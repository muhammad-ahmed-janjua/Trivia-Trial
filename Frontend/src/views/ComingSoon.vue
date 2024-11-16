<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
    <div class="bg-white shadow-md rounded-lg p-10 max-w-md mx-auto">
      <h2 class="text-4xl font-bold text-gray-700 mb-4">Feature Coming Soon!</h2>
      <p class="text-gray-600 mb-6">
        We're working hard to bring you this feature. Stay tuned!
      </p>
      <!-- Optional Illustration or Icon -->
      <div class="text-gray-400 text-6xl mb-6">
        🛠️ <!-- You can replace this with an icon or illustration -->
      </div>

      <RouterLink
        to="/"
        class="bg-d-primary text-white px-6 py-3 rounded-lg hover:bg-d-primary/[0.9] transition-colors"
      >
        Back to Home
      </RouterLink>
    </div>
  </section>
</template>