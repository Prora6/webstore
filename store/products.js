import axios from 'axios'
import cart from "~/pages/catalog/cart";

export const state = () => ({
  products: [],
  cart: []
})

export const getters = {
  getProducts: (state) => {
    return state.products
  },
  getCarts: (state) => {
    return state.cart
  }
}

export const mutations = {
  SAVE_PRODUCT(state, products) {
    state.products = products
  },
  SET_CARD(state, products) {
      let isProductExists = false;
      let cart = state.cart.map(function (item){
        if (item.id === products.id) {
          isProductExists = true;
          return {
            ...item,
            quantity: item.quantity +1
          }
        }
        return item
      })
      if (!isProductExists) {
        cart.push(products);
      }
      state.cart = cart;
      localStorage.setItem('cart', JSON.stringify(cart));
  },
  REMOVE_FROM_CART(state, index) {
    let cart = state.cart.filter(function (item, currentIndex){
      return index !== currentIndex
    })
    state.cart = cart;
    localStorage.setItem('cart', JSON.stringify(cart));
  },
  INCREMENT(state, index) {
    let cart = state.cart.map(function (item, currentIndex){
      if (index === currentIndex) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    state.cart = cart;
    localStorage.setItem('cart', JSON.stringify(cart));
  },
  DECREMENT(state, index) {
    let cart = state.cart.map(function (item, currentIndex){
      if (index === currentIndex && item.quantity !== 1) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    state.cart = cart;
    localStorage.setItem('cart', JSON.stringify(cart));
  },
  SET_INITIAL_CART(state, cart){
    state.cart = cart;
  }
}

export const actions = {
  async fetchCard ({ commit }) {
    let response = await axios .get('https://fakestoreapi.com/products')
    commit('SAVE_PRODUCT', response.data);
  },
  addToCart ({ commit }, product) {
    commit('SET_CARD', product);
  },
  deleteFromCart ({ commit }, index){
    commit('REMOVE_FROM_CART', index)
  },
  incrementCartItem({ commit }, index) {
    commit('INCREMENT', index)
  },
  decrementCartItem({ commit }, index) {
    commit('DECREMENT', index)
  },
  setFromLocalStorage ({commit}) {
    let rawCart = localStorage.getItem('cart')
    console.log(rawCart);
    if (rawCart) {
      commit('SET_INITIAL_CART', JSON.parse(rawCart))
    }
  }
}
