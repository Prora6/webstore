<template>
  <div>
    <HeaderStore />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "default",
  mounted() {
    this.$store.dispatch('products/setFromLocalStorage');
  }
}
</script>
