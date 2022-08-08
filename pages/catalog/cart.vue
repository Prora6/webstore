<template>
  <div class="cards">
    <NuxtLink to="/" class="transition-button">Назад в каталог</NuxtLink>
    <h2 class="empty-cart" v-if="!cart.length">Добавьтне первый товар в корзину</h2>
    <shopping-cart v-if="cart.length"
                   :cart_data="cart"
    />
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "cart",
  computed: {
    ...mapGetters('products', {
      cart: 'getCarts'
    })
  },
}
</script>
