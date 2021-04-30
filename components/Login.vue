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
          id="mail"
          type="text"
          name="mail"
          class="border-4 border-secondary bg-primary uppercase text-secondary font-bold rounded pl-12 pr-3 py-3 w-full focus:outline-none focus:shadow"
          placeholder="Adresse email"
        />
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
          type="password"
          name="password"
          class="border-4 border-secondary bg-primary uppercase text-secondary font-bold rounded pl-12 px-3 py-3 w-full focus:outline-none focus:shadow"
          placeholder="Mot de passe"
        />
      </div>
    </div>
    <button
      class="block w-full px-6 py-3 font-medium leading-6 text-center text-primary uppercase transition bg-secondary rounded shadow ripple hover:shadow-lg focus:outline-none"
    >
      Connexion
    </button>
    <div
      class="flex justify-end mt-3 inline-block text-right cursor-pointer text-secondary hover:underline"
    >
      Mot de passe oublié ?
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
