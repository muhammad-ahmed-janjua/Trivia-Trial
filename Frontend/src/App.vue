<script setup>
  import navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';
  import { RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex-grow">
      <navbar />
      <RouterView />
    </main>
    <Footer></Footer>
  </div>
</template>