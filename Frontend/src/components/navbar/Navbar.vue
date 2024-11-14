<script setup>
import logo from '@/assets/img/trivia-time-logo (1).png';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '../../store/auth';
import { ref } from 'vue';

const authStore = useAuthStore();
const router = useRouter();
const showMenu = ref(false); // Toggle for mobile menu

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};

const logout = async () => {
  try {
    await authStore.logout(router);
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <nav class="navbar bg-transparent">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <!-- Logo -->
        <RouterLink class="flex items-center mr-4" to="/">
          <img class="h-12 w-auto dark:invert" :src="logo" alt="Trivia Logo" />
          <span class="dark:text-white text-black hidden md:block  text-3xl font-bold ml-2">Trivia Time</span>
        </RouterLink>
        
        <!-- Hamburger Menu -->
        <button @click="showMenu = !showMenu"
          class="text-white md:hidden focus:outline-none focus:ring-2 focus:ring-white ml-auto absolute right-6 top-6">
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <!-- Links -->
        <div :class="{ 'block': showMenu, 'hidden': !showMenu }"
          class="w-full md:flex md:w-auto md:space-x-4 md:items-center absolute md:static top-20 right-0 bg-fission-1 md:bg-transparent p-4 md:p-0 z-10">
          <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
            <!-- Quiz Link -->
            <RouterLink to="/quiz" class="dark:bg-l-primary text-white rounded-md px-4 py-2 transition-colors hover:bg-blue-600 hover:text-white bg-blue-900">
              Play Quiz
            </RouterLink>

            <!-- Auth links -->
            <div v-if="authStore.isAuthenticated" class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <RouterLink to="/leaderboard" class="bg-d-secondary text-white rounded-md px-4 py-2 transition-colors hover:bg-blue-600 hover:text-white ">
                Leaderboard
              </RouterLink>
              <RouterLink to="/my-quizzes" class="bg-d-secondary text-white rounded-md px-4 py-2 transition-colors hover:bg-blue-600 hover:text-white ">
                My Quizzes
              </RouterLink>
              <RouterLink to="/profile" class="bg-d-secondary text-white rounded-md px-4 py-2 transition-colors hover:bg-blue-600 hover:text-white ">
                Profile
              </RouterLink>
              <button @click="logout"
                class="dark:bg-fission-3 bg-fission-1 hover:bg-fission-2 text-white rounded-md px-4 py-2 transition-colors">
                Logout
              </button>
            </div>

            <!-- Non-auth links -->
            <div v-else class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <RouterLink to="/login"
                class="bg-fission-1 hover:bg-blue-600 text-white rounded-md px-4 py-2 transition-colors">
                Login
              </RouterLink>
              <RouterLink to="/register"
                class="bg-blue-900 hover:bg-blue-600 text-white rounded-md px-4 py-2 transition-colors">
                Register
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: absolute;
  z-index: 50;
  width: 100%;
}
</style>