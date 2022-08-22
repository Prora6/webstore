<template>
  <header class="header">
    <div class="header-logo">
      <NuxtLogo class="logo"/>
      <div class="header-logo-description">
        <span class="name">nuxt store</span>
        <span class="description">самая яркая одежда во вселенной</span>
      </div>
    </div>
    <nav class="header-navigation">
      <NuxtLink to="/" class="button navigation">
        Галерея
      </NuxtLink>
      <NuxtLink to="/about/about" class="button navigation">
        О нас
      </NuxtLink>
      <NuxtLink to="/catalog/cart" class="button navigation">
        Корзина
        <span v-if="cart.length">
            ({{cart.length}})
          </span>
      </NuxtLink>
    </nav>
  </header>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "HeaderStore",
  computed: {
    ...mapGetters('products', {
      cart: 'getCarts'
    })
  },
}
</script>
