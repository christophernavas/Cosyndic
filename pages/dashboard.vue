<template>
  <div>
    <div class="flex">
      <div><Sidebar /></div>
      <div class="w-full">
        <Header :user="user" />
        <!-- Content Dashboard -->
        <div class="p-6">
          <h1 class="text-xl font-bold">Bonjour {{ user.firstname }}</h1>
          <h2 class="text-lg">Voici l'actualité de votre copropriété</h2>
          <hr class="my-6 p-2 border-secondary" />
        </div>
        <div class="flex">
          <!-- Building Info -->

          <div
            class="max-w-md ml-10 bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div class="md:flex">
              <div class="md:flex-shrink-0">
                <img
                  class="h-48 w-full object-cover md:w-48"
                  :src="building.buildingImg"
                  alt="Man looking at item at a store"
                />
              </div>
              <div class="p-8">
                <div class="uppercase tracking-wide text-lg font-semibold">
                  Votre immeuble
                </div>
                <p
                  class="block mt-1 text-lg leading-tight font-medium text-black"
                >
                  {{ building.name }}
                </p>
                <div class="mt-2 text-gray-500">
                  <div>{{ building.address }}</div>
                  <span>{{ building.zipCode }}</span>
                  <span>{{ building.city }}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Copro Info -->
          <!--
          <div
            class="max-w-md ml-10 bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div class="md:flex">
              <div class="p-8">
                <div class="uppercase tracking-wide text-lg font-semibold">
                  Copropriétaires
                </div>
                <div v-for="(user, index) in building.users" :key="index">
                  {{ user }}
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ app, store }) {
    if (store.state.authUser !== null) {
      const userId = store.state.authUser.uid

      // Create a ref from current user data
      const docRefUser = await app.$fire.firestore
        .collection('users')
        .doc(userId)

      // Getting user data
      const currentUser = await docRefUser
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

      // Adding img from storage
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
      // Adding currentImg to user object
      currentUser.userImg = currentImg

      // Getting building document
      const currentBuilding = await currentUser.buildingId
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
      // Adding img from storage
      const currentImgBuilding = await app.$fire.storage
        .ref()
        .child(`buildings/${currentUser.buildingId.id}.png`)
        .getDownloadURL()
        .then(function (url) {
          return url
        })
        .catch(function (error) {
          console.log(error)
        })

      // Adding currentImg to user object
      currentUser.userImg = currentImg

      // Adding currentImgBuilding to building object
      currentBuilding.buildingImg = currentImgBuilding

      // Return building & user data
      return {
        user: currentUser,
        building: currentBuilding,
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
