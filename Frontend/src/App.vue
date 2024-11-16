<script setup>
  import Navbar from './components/navbar/Navbar.vue';
  import Footer from './components/Footer.vue';
  import DarkMode from './components/utility/DarkMode.vue';
  import { RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex-grow">
      <Navbar />
      <RouterView />
      <DarkMode />
    </main>
    <Footer></Footer>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
