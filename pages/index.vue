<template>
    <div class="cards">
      <NuxtLink to="/catalog/cart" class="transition-button">
        Корзина
        <span v-if="cart.length">
          ({{cart.length}})
        </span>
      </NuxtLink>
      <ul class="list">
        <products-card v-for="product in products"
                       :key="product.id"
                       class="element"
                       :product_data="product"
                       @addToCart="addToCart"
        />
      </ul>
    </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'

import Vue from 'vue'
export default Vue.extend({
  name: 'IndexPage',
  computed: {
    ...mapGetters('products', {
      products: 'getProducts',
      cart: 'getCarts'
    })
  },
  methods: {
    addToCart(product: object) {
      const result = {
        ...product,
        quantity: 1
      }
      this.$store.dispatch('products/addToCart' ,result);
    },
  },
  async fetch () {
    await this.$store.dispatch('products/fetchCard')
  }
})
</script>
