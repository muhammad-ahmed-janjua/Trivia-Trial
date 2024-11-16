<script setup>
/**
 * Future updates, make the navbar float
 */
import logo from '@/assets/img/trivia-time-logo (1).png';
import { RouterLink, useRouter } from 'vue-router';
import { useAuthStore } from '../../store/auth';
import { ref } from 'vue';

const authStore = useAuthStore();
const router = useRouter();
const showMenu = ref(false);

const logout = async () => {
  try {
    await authStore.logout(router);
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <nav class="bg-transparent absolute z-10 w-[100%]">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <!-- Logo -->
        <RouterLink class="flex items-center mr-4" to="/">
          <img class="h-12 w-auto dark:invert" :src="logo" alt="Trivia Logo" />
          <span class="dark:text-white text-black hidden md:block  text-3xl font-bold ml-2">Trivia Time</span>
        </RouterLink>
        
        <!-- Hamburger Menu -->
        <button @click="showMenu = !showMenu"
          class="text-white md:hidden focus:outline-none focus:ring-2 focus:ring-white ml-auto absolute right-6 top-6 ">
          <svg class="h-6 w-6 dark:invert" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="#000000">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <!-- Links -->
        <div :class="{ 'block': showMenu, 'hidden': !showMenu }"
          class="w-full md:flex md:w-auto md:space-x-4 md:items-center absolute md:static top-20 right-0 bg-fission-1 md:bg-transparent p-4 md:p-0 z-10">
          <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
            <!-- Auth links -->
            <div v-if="authStore.isAuthenticated" class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <RouterLink to="/leaderboard" class="text-black dark:text-white rounded-md px-4 py-2 transition-colors hover:bg-l-primary hover:text-white ">
                Leaderboard
              </RouterLink>
              <RouterLink to="/quizzes" class="text-black dark:text-white rounded-md px-4 py-2 transition-colors hover:bg-l-primary hover:text-white ">
                My Quizzes
              </RouterLink>
              <RouterLink to="/profile" class="text-black dark:text-white rounded-md px-4 py-2 transition-colors hover:bg-l-primary hover:text-white ">
                Profile
              </RouterLink>
              <RouterLink to="/login">
              <button @click="logout"
                class="dark:bg-d-accent bg-l-accent hover:bg-d-accent dark:hover:bg-d-accent/[0.8] text-white rounded-md px-4 py-2 transition-colors">
                Logout
              </button>
            </RouterLink>
            </div>

            <!-- Non-auth links -->
            <div v-else class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <RouterLink to="/login"
                class="dark:bg-d-accent bg-l-primary hover:bg-d-primary/[0.8] dark:hover:bg-d-accent/[0.8] text-white rounded-md px-4 py-2 transition-colors">
                Login
              </RouterLink>
              <RouterLink to="/register"
                class="dark:bg-d-accent bg-l-primary hover:bg-d-primary/[0.8] dark:hover:bg-d-accent/[0.8] text-white rounded-md px-4 py-2 transition-colors">
                Register
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
