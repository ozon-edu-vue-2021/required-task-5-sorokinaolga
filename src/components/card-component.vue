<template>
  <article class="card-item">
    <a class="card-item__link" href="#" rel="bookmark">
      <img class="card-item__img" :src="require(`../assets/images/img-${image}.webp`)" alt="" width="380" height="380">
    </a>
    <p class="card-item__price">{{ price }} руб.</p>
    <h3 class="card-item__title">
      {{ product.dish }}
    </h3>
    <button @click="addToCart" class="card-item__button" type="button">В корзину</button>
  </article>
</template>

<script>
import { randomNumber } from '../helpers';

export default {
  name: 'CardComponent',
  props: ['product'],
  data() {
    return {
      image: randomNumber(1, 12),
      price: randomNumber(50, 200),
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addProductToCart', {
        id: this.product.uid,
        title: this.product.dish,
        price: this.price,
        count: 1,
      });
    }
  },
};
</script>

<style scoped>
.card-item {
  box-sizing: border-box;
  height: 100%;
  padding: 20px 10px;
  transition: all 0.2s ease-in-out 0s;
  background-color: #ffffff;
}
.card-item:hover {
  box-shadow: 0 4px 20px rgba(157, 162, 166, 0.35);
}
.card-item__link {
  display: block;
  height: 170px;
  margin-bottom: 2.2em;
}
.card-item__img {
  display: block;
  width: auto;
  max-height: 100%;
}
.card-item__price {
  margin: 0 0 0.6em;
  color: #001524;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
}
.card-item__title {
  margin: 0 0 1em;
  color: #001524;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
}
.card-item__button {
  box-sizing: border-box;
  cursor: pointer;
  width: 170px;
  height: 35px;
  margin-right: 1.4em;
  padding: 0;
  border: 1px solid #de012c;
  border-radius: 4px;
  background-color: #de012c;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(35px - 1px * 2);
  text-align: center;
}
.card-item__button:hover,
.card-item__button:focus,
.card-item__button:active {
  transition: all 0.2s ease-in-out 0s;
}

.card-item__button:hover {
  background-color: #c20127;
}
.card-item__button:focus,
.card-item__button:active {
  border: 1px solid #001524;
  background-color: #de012c;
}
</style>