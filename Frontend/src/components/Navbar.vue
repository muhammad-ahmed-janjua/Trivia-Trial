<script setup>
import logo from '@/assets/img/logo.png';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '../store/auth';
import { ref } from 'vue';

const authStore = useAuthStore();
const router = useRouter();
const showMenu = ref(false); // Added for mobile menu toggle

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
  <nav class="bg-curulean">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex items-center">
          <!-- Trivia Logo -->
          <RouterLink class="flex items-center mr-4" to="/">
            <img class="h-12 w-auto" :src="logo" alt="Trivia Logo" />
            <span class="hidden md:block text-white text-3xl font-bold ml-2">Trivia Time</span>
          </RouterLink>
          <!-- Mobile Menu Button -->
          <button 
            @click="showMenu = !showMenu" 
            class="text-white md:hidden focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <!-- Desktop & Mobile Links -->
        <div 
          :class="{'block': showMenu, 'hidden': !showMenu}" 
          class="w-full md:flex md:w-auto md:space-x-4 md:items-center absolute md:static top-20 right-0 bg-curulean md:bg-transparent"
        >
          <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0 md:mr-0 mr-2">
            <!-- Quiz Link -->
            <RouterLink
              to="/"
              :class="[isActiveLink('/') ? 'bg-blue-900' : 'hover:bg-blue-600 hover:text-white', 
                'text-white', 'rounded-md', 'px-4', 'py-2', 'transition-colors']"
            >
              Play Quiz
            </RouterLink>

            <!-- Authenticated Links -->
            <div v-if="authStore.isAuthenticated" class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <RouterLink
                to="/leaderboard"
                :class="[isActiveLink('/leaderboard') ? 'bg-blue-900' : 'hover:bg-blue-600 hover:text-white', 
                  'text-white', 'rounded-md', 'px-4', 'py-2', 'transition-colors']"
              >
                Leaderboard
              </RouterLink>
              <RouterLink
                to="/my-quizzes"
                :class="[isActiveLink('/my-quizzes') ? 'bg-blue-900' : 'hover:bg-blue-600 hover:text-white', 
                  'text-white', 'rounded-md', 'px-4', 'py-2', 'transition-colors']"
              >
                My Quizzes
              </RouterLink>
              <RouterLink
                to="/settings"
                :class="[isActiveLink('/settings') ? 'bg-blue-900' : 'hover:bg-blue-600 hover:text-white', 
                  'text-white', 'rounded-md', 'px-4', 'py-2', 'transition-colors']"
              >
                Settings
              </RouterLink>
              <button
                @click="logout"
                class="bg-blue-900 hover:bg-blue-600 text-white rounded-md px-4 py-2 transition-colors"
              >
                Logout
              </button>
            </div>

            <!-- Non-authenticated Links -->
            <div v-else class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <RouterLink
                to="/login"
                class="bg-blue-900 hover:bg-blue-600 text-white rounded-md px-4 py-2 transition-colors"
              >
                Login
              </RouterLink>
              <RouterLink
                to="/register"
                class="bg-blue-900 hover:bg-blue-600 text-white rounded-md px-4 py-2 transition-colors"
              >
                Register
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>