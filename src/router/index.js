import Vue from "vue";
import VueRouter from "vue-router";

import ProductListComponent from "../views/product-list-component.vue";
import CartComponent from "../views/cart-component.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: ProductListComponent,
  },
  {
    path: "/cart",
    component: CartComponent,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;