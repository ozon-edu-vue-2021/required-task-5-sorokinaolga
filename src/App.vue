<template>
  <div id="app">
    <header class="header">
      <nav class="nav">
        <router-link 
          v-for="link in viewsList" 
          :key="link.name" 
          :to="link.path"
        >
          {{ link.title }}
        </router-link>
      </nav>
    </header>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      viewsList: [
        { name: 'main', path: '/', title: 'Главная' },
        { name: 'cart', path: '/cart', title: 'Корзина' }
      ]
    }
  },
  mounted() {
    this.$store.dispatch('getProducts');
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}
html,
body {
  padding: 0;
  margin: 0;
}
#app {
  height: 100%;
}
* {
  box-sizing: border-box;
}
.header {
  border-bottom: 1px solid rgba(157, 162, 166, 0.35);
}
.nav {
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.nav a {
  padding: 0 20px;
}
</style>
