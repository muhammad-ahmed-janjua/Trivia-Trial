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

