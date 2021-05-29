<template>
  <div><button @click="logout()">Déconnection</button></div>
</template>
<script>
export default {
  async fetch({ app }) {
    const users = []
    const usersCollection = await app.$fire.firestore.collection('users')

    const query = await usersCollection.get()
    query.forEach((element) => {
      users.push(element.data())
    })
  },
  created() {
    // this.logout()
  },
  methods: {
    async logout() {
      try {
        await this.$fire.auth.signOut()
        this.$router.push('/')
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>
<style lang=""></style>
