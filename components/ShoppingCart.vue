<template>
  <div class="cart">
    <h2>Корзина</h2>
    <ul class="list">
      <shopping-cart-item class="list-cart"
                          v-for="(item, index) in cart_data"
                          :key="item.id"
                          :cart_item_data="item"
                          @deleteCartItem="deleteCartItem(index)"
                          @increment="incrementItem(index)"
                          @decrement="decrementItem(index)"
      />
    </ul>
    <div class="cart-total">
      <span class="total-name">Стоимость товаров: {{ cardTotalCost }}</span>
    </div>
  </div>
</template>
<script>
import ShoppingCartItem from "~/components/ShoppingCartItem";
export default {
  name: "ShoppingCart",
  components: {
    'shopping-cart-item': ShoppingCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    deleteCartItem(index) {
      console.log(index);
      this.$store.dispatch('products/deleteFromCart' ,index);
    },
    decrementItem(index) {
      this.$store.dispatch('products/decrementCartItem', index);
    },
    incrementItem(index) {
      this.$store.dispatch('products/incrementCartItem', index);
    }
  },
  computed: {
    cardTotalCost(){
      let result = [];
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        })
        return result;
      } else {
        return 0;
      }
    }
  }
}
</script>

