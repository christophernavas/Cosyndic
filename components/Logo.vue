<template>
  <div class="flex">
    <h1
      class="mt-5 text-secondary font-secondary font-medium"
      :class="textSize"
    >
      CoSyndic
    </h1>
    <img
      class="text-secondary mt-2 h-10"
      src="/logo-icon.svg"
      alt="svg logo icon"
    />
  </div>
</template>

<script>
export default {
  props: {
    textSize: {
      require: false,
      default: 'text-7xl',
    },
    iconClass: {
      require: false,
      default: 'h-20',
    },
  },
}
</script>

<style></style>
