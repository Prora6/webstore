<template>
  <li>
    <div class="element-image">
      <img :src="cart_item_data.image" alt="image" class="image">
    </div>
    <p class="section">Название: <span class="values">{{ cart_item_data.title }}</span></p>
    <p class="section">Категория: <span class="values">{{ cart_item_data.category }}</span></p>
    <p class="section">Цена: <span class="values">{{ cart_item_data.price }}</span></p>
    <div class="section">
      Количество:
      <span class="values">
        <button @click="incrementItem" class="change-button">+</button>
        {{ cart_item_data.quantity }}
        <button @click="decrementItem" class="change-button">-</button>
      </span>
      </div>
    <button class="button" @click="deleteCartItem">Удалить</button>
  </li>
</template>

<script>
export default {
  name: "ShoppingCartItem",
  props: {
    cart_item_data : {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    deleteCartItem(){
      this.$emit('deleteCartItem')
    },
    incrementItem() {
      this.$emit('increment');
    },
    decrementItem() {
      this.$emit('decrement');
    }
  }
}
</script>

<style scoped>

</style>
