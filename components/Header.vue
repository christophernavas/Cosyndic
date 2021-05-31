<template>
  <div class="bg-secondary p-6 flex justify-between items-center">
    <!-- Search -->
    <div class="text-white">
      <!-- component -->
      <div class="relative text-gray-600">
        <input
          type="search"
          name="serch"
          placeholder="Rechercher"
          class="bg-white h-10 px-10 pr-40 rounded-full text-sm focus:outline-none"
        />
        <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
          <svg
            id="Capa_1"
            class="h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style="enable-background: new 0 0 56.966 56.966"
            xml:space="preserve"
            width="512px"
            height="512px"
          >
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- User -->
    <div
      class="text-white cursor-pointer"
      @click="isVisible = !isVisible"
      @keydown.enter="isVisible = !isVisible"
    >
      <div
        class="pr-5 h-16 flex items-center border-secondary-light border rounded-md"
      >
        <img class="h-full rounded-md" :src="user.userImg" alt="" />
        <div class="flex flex-col pl-3">
          <div>
            <div class="font-bold">
              {{ user.firstname }} {{ user.lastname }}
            </div>
          </div>
          <div>
            <div v-if="user.isPCS && user.isCS">
              Président du conseil syndical
            </div>
            <div v-else-if="user.isCS">Membre du conseil syndical</div>
            <div v-else>Copropriétaire</div>
          </div>
        </div>
        <transition
          enter-active-class="transition duration-300 ease-out transform"
          enter-class="-translate-y-3 scale-95 opacity-0"
          enter-to-class="translate-y-0 scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in transform"
          leave-class="translate-y-0 opacity-100"
          leave-to-class="-translate-y-3 opacity-0"
        >
          <div v-show="isVisible" class="absolute pt-2">
            <div
              class="relative py-1 bg-white border border-gray-200 rounded-md shadow-xl"
              style="top: 4rem"
            >
              <div
                class="absolute top-0 w-4 h-4 origin-center transform rotate-45 translate-x-5 -translate-y-2 bg-white border-t border-l border-gray-200 rounded-sm pointer-events-none"
              ></div>
              <div class="relative">
                <a
                  href="#"
                  class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-100 ease-in-out"
                  @click="logout()"
                  >Déconnexion</a
                >
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isVisible: false,
    }
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
