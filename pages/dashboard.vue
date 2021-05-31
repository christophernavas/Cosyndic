<template>
  <div>
    <!-- <button @click="logout()">Déconnection</button> -->
    <!-- <img :src="userImg" alt="" /> -->
    <div class="flex">
      <div><Sidebar /></div>
      <div class="w-full"><Header :user="user" /></div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ app, store }) {
    if (store.state.authUser !== null) {
      const userId = store.state.authUser.uid
      const docRef = await app.$fire.firestore.collection('users').doc(userId)
      const currentUser = await docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            return doc.data()
          } else {
            // doc.data() will be undefined in this case
            console.log('Document not found!')
          }
        })
        .catch((error) => {
          console.log('Error getting document:', error)
        })
      // const users = []
      // const usersCollection = await app.$fire.firestore.collection('users')
      // const query = await usersCollection.get()
      // query.forEach((element) => {
      //   users.push(element.data())
      // })
      const currentImg = await app.$fire.storage
        .ref()
        .child(`users/${userId}.png`)
        .getDownloadURL()
        .then(function (url) {
          return url
        })
        .catch(function (error) {
          console.log(error)
        })

      // Adding user Img
      currentUser.userImg = currentImg
      // Return user data
      return {
        user: currentUser,
      }
    }
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
