<template>
  <div class="border-r-2 border-secondary pt-5 px-6 h-screen">
    <nuxt-link to="/dashboard">
      <Logo icon-class="h-10" text-size="text-2xl" />
    </nuxt-link>
    <ul class="p-3 mt-12">
      <li class="pt-3 pb-6 flex items-center">
        <img class="h-4 pr-3" src="sidebar/home.svg" alt="" />
        <span>Accueil</span>
      </li>
      <li class="pb-6 flex items-center">
        <img class="h-4 pr-3" src="sidebar/copro.svg" alt="" />
        <span>Ma copropriété</span>
      </li>
      <li class="pb-6 flex items-center">
        <img class="h-4 pr-3" src="sidebar/discuss.svg" alt="" />
        <span>Discussion</span>
      </li>
      <li class="pb-6 flex items-center">
        <img class="h-4 pr-3" src="sidebar/paiements.svg" alt="" />
        <span>Paiements</span>
      </li>
      <li class="pb-6 flex items-center">
        <img class="h-4 pr-3" src="sidebar/ag.svg" alt="" />
        <span>Assemblées</span>
      </li>
      <li class="pb-6 flex items-center">
        <img class="h-4 pr-3" src="sidebar/folders.svg" alt="" />
        <span>Dossiers</span>
      </li>
      <li class="pb-6 flex items-center">
        <img class="h-4 pr-3" src="sidebar/providers.svg" alt="" />
        <span>Fournisseurs</span>
      </li>
      <li class="pb-6 flex items-center">
        <img class="h-4 pr-3" src="sidebar/documents.svg" alt="" />
        <span>Documents</span>
      </li>
      <li class="pb-6 flex items-center">
        <img class="h-4 pr-3" src="sidebar/settings.svg" alt="" />
        <span>Paramètres</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
