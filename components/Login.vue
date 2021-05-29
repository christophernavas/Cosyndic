<template>
  <div class="p-6">
    <div class="flex flex-col mb-6">
      <div class="relative">
        <img
          class="absolute h-8"
          style="top: 10px; left: 10px"
          src="/user.svg"
          alt=""
        />
        <input
          id="email"
          v-model="email"
          type="text"
          name="email"
          class="border-4 bg-primary text-secondary font-bold rounded pl-12 pr-3 py-3 w-full focus:outline-none focus:shadow"
          :class="
            emailError || userError ? 'border-red-600' : 'border-secondary'
          "
          placeholder="Adresse email"
        />
        <div v-if="emailError" class="text-red-600 text-left mt">
          {{ emailError }}
        </div>
        <div v-if="userError" class="text-red-600 text-left mt">
          {{ userError }}
        </div>
      </div>
    </div>
    <div class="flex flex-col mb-6">
      <div class="relative">
        <img
          class="absolute h-8"
          style="top: 10px; left: 10px"
          src="/lock.svg"
          alt=""
        />
        <input
          id="password"
          v-model="password"
          type="password"
          name="password"
          class="border-4 bg-primary text-secondary font-bold rounded pl-12 px-3 py-3 w-full focus:outline-none focus:shadow"
          :class="passwordError ? 'border-red-600' : 'border-secondary'"
          placeholder="Mot de passe"
        />
        <div v-if="passwordError" class="text-red-600 text-left mt">
          {{ passwordError }}
        </div>
      </div>
    </div>
    <!-- <NuxtLink to="/dashboard"> -->
    <button
      class="block w-full px-6 py-3 font-medium leading-6 text-center text-primary uppercase transition bg-secondary rounded shadow ripple hover:shadow-lg focus:outline-none"
      @click="login"
    >
      Connexion
    </button>
    <!-- </NuxtLink> -->
    <NuxtLink to="/passwordrecovery">
      <div
        class="flex justify-end mt-3 inline-block text-right cursor-pointer text-secondary hover:underline"
      >
        Mot de passe oublié ?
      </div>
    </NuxtLink>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      userError: '',
    }
  },
  computed: {
    ...mapState({
      authUser: (state) => state.authUser,
    }),
  },
  methods: {
    async login() {
      try {
        await this.$fire.auth.signInWithEmailAndPassword(
          this.email,
          this.password
        )
      } catch (error) {
        console.error(error)
        if (error.code === 'auth/invalid-email') {
          this.emailError = 'Adresse email non valide'
        } else {
          this.emailError = ''
        }
        if (error.code === 'auth/wrong-password') {
          this.passwordError = "Le mot de passe n'est pas valide"
        } else {
          this.passwordError = ''
        }
        if (error.code === 'auth/user-not-found') {
          this.userError = 'Compte introuvable'
        } else {
          this.userError = ''
        }
        // console.error(error.code)
      }
      if (this.authUser) {
        this.$router.push('/dashboard')
      }
    },
    // If I want to create an User but here we don't do that in the project
    // async createUser() {
    //   try {
    //     await this.$fire.auth.createUserWithEmailAndPassword(
    //       'foo@foo.foo',
    //       'foooooo'
    //     )
    //   } catch (e) {
    //     console.log(e)
    //   }
    // },
  },
}
</script>
<style lang=""></style>
