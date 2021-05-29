<template>
  <div class="w-full pt-6">
    <div v-if="step === 1">
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
            class="border-4 bg-primary uppercase text-secondary font-bold rounded pl-12 pr-3 py-3 w-full focus:outline-none focus:shadow"
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
      <button
        class="block w-full px-6 py-3 font-medium leading-6 text-center text-primary uppercase transition bg-secondary rounded shadow ripple hover:shadow-lg focus:outline-none"
        @click="passwordResetEmail"
      >
        Envoyer
      </button>
    </div>
    <div v-if="step === 2" class="text-2xl">
      Un email de récupération de mot de passe vient de vous être envoyé.
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      step: 1,
      email: '',
      emailError: '',
      userError: '',
    }
  },
  methods: {
    async passwordResetEmail() {
      try {
        await this.$fire.auth.sendPasswordResetEmail(this.email)
        this.step = 2
      } catch (error) {
        console.log(error)
        if (error.code === 'auth/invalid-email') {
          this.emailError = 'Adresse email non valide'
        } else {
          this.emailError = ''
        }
        if (error.code === 'auth/user-not-found') {
          this.userError = 'Compte introuvable'
        } else {
          this.userError = ''
        }
      }
    },
  },
}
</script>
<style lang=""></style>
