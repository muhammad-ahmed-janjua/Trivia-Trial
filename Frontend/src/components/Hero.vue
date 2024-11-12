<script setup>
import { defineProps,  } from 'vue';
import { useAuthStore } from '../store/auth';
import { onMounted } from 'vue';
const authStore = useAuthStore();

defineProps({
  title: {
    type: String,
    default: 'Discover Your Inner Trivia Wizard!',
  },
  subtitle: {
    type: String,
    default: 'Challenge yourself with fun and engaging trivia questions!',
  }
});
	onMounted(async () => {
		await authStore.fetchUserStats();
	});

</script>

<template>
  <section class="bg-[#007f5f] py-36 mb-4"> <!-- Deep Green Background -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div class="text-center">
        <!-- Title -->
        <h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          {{ title }}
        </h1>

        <!-- Welcome Back Section (Only shown if the user is logged in) -->
        <div v-if="authStore.isAuthenticated" class="mt-4 text-2xl text-[#ffdd57] font-semibold"> <!-- Bright Yellow Text -->
          Welcome back, {{ authStore.userStats }}!
        </div>

        <!-- Subtitle -->
        <p class="my-4 text-xl text-white">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>