<template>
      <li>
        <div class="element-image">
          <img :src="product_data.image" alt="image" class="image">
        </div>
        <p class="section">Название: <span class="values">{{ product_data.title }}</span></p>
        <p class="section">Категория: <span class="values">{{ product_data.category }}</span></p>
        <p class="section">Описание: <span class="values">{{ product_data.description }}</span></p>
        <p class="section">Цена: <span class="values">{{ product_data.price }}</span></p>
        <div class="rating" v-if="product_data.rating">
          <p class="section">Оценок: <span class="values">{{ product_data.rating.count }}</span></p>
          <p class="section">Рейтинг: <span class="values">{{ product_data.rating.rate }}</span></p>
        </div>
        <button class="button" @click="addToCart"> В корзину</button>
      </li>
</template>

<script>

export default {
  name: 'ProductsCard',
  props: {
    product_data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    addToCart () {
      this.$emit('addToCart', this.product_data);
    }
  }
}
</script>
