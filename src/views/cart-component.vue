<template>
  <div class="container">
    <main>
      <h1>Корзина</h1>
      <ul class="order-list">
        <li 
          v-for="product in products"
          :key="product.id"
          class="order-list__item"
        >
          <p class="order-list__elem">{{ product.title }}</p>
          <p class="order-list__elem">Цена: {{ product.price}} руб.</p>
          <p class="order-list__elem">Количество: {{ product.count }}</p>
          <button @click="removeFromCart(product.id)" class="order-list__elem order-list__button" type="button">Удалить</button>
        </li>
      </ul>
    </main>
    <div class="order">
      <p>Всего товаров: {{ products.length }}</p>
      <p>Общая стоимость: {{ totalCartPrice }} руб.</p>
      <button @click="sendOrder" class="order__button" type="button">Оформить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartComponent',
  computed: {
    products() {
      return this.$store.state.order;
    },
    totalCartPrice() {
      return this.$store.getters.totalPrice;
    }
  },
  methods: {
    removeFromCart(id) {
      this.$store.dispatch('removeProductFromCart', id);
    },
    sendOrder() {
      alert(JSON.stringify(this.products));
    }
  }
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-areas:
  "main sidebar";
  grid-template-columns: 1fr 300px;
  grid-template-rows:
    1fr;
  margin: 0 auto;
  min-height: 100vh - 50px;
  gap: 20px;
}
main {
  grid-area: "main";
  padding-left: 30px;
}
.order-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.order-list__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  border-bottom: 1px solid rgba(157, 162, 166, 0.35);
}
.order-list__elem {
  flex-basis: 0;
  flex-grow: 1;
  white-space: nowrap;
}
.order {
  grid-area: "sidebar";
  padding: 70px 20px 10px 10px;
}
.order-list__button {
  cursor: pointer;
  border: none;
  background-color: transparent;
}
.order-list__button:hover,
.order-list__button:focus,
.order-list__button:active {
  text-decoration: underline;
}
.order__button {
  box-sizing: border-box;
  padding: 0;
  cursor: pointer;
  width: 100%;
  height: 35px;
  border: 1px solid #de012c;
  border-radius: 4px;
  background-color: #de012c;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(35px - 1px * 2);
  text-align: center;
}
.order__button:hover,
.order__button:focus,
.order__button:active {
  transition: all 0.2s ease-in-out 0s;
}
.order__button:hover {
  background-color: #c20127;
}
.order__button:focus,
.order__button:active {
  border: 1px solid #001524;
  background-color: #de012c;
}
</style>