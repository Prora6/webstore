<template>
  <Nuxt />
</template>

<script>
export default {
  name: "default",
  mounted() {
    this.$store.dispatch('products/setFromLocalStorage');
  }
}
</script>
