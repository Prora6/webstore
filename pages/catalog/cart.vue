<template>
  <div class="cards">
    <h2 v-if="!cart.length">Добавьтне первый товар в корзину</h2>
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
