<template>
  <ul class="card-list-container">
    <li 
      v-for="product in products"
      :key="product.uid"
      class="card-list-container__item"
    >
      <card-component :product="product" />
    </li>
  </ul>
</template>

<script>
import CardComponent from '../components/card-component.vue';

export default {
  name: "ProductListComponent",
  components: {
    CardComponent,
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
};
</script>

<style scoped>
.card-list-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  list-style: none;
}
.card-list-container__item {
  box-sizing: border-box;
  height: 350px;
  max-height: 350px;
}
</style>
