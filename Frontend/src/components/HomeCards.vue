<script setup>
  import Card from './Card.vue';
  import { RouterLink } from 'vue-router';
  import { useAuthStore } from '../store/auth';
  import { onMounted } from 'vue';
  const authStore = useAuthStore();
</script>

<template>
  <section class="py-6 bg-blue-50">
    <div class="container-xl lg:container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-lg shadow-lg bg-white">
        <!-- Play Trivia Card -->
        <Card bg="bg-yellow-100">
          <h2 class="text-3xl font-bold text-yellow-800">Play Trivia</h2>
          <p class="mt-4 text-yellow-700">
            Test your knowledge across various categories and see how much you know!
          </p>
          <RouterLink 
            to="/quiz"
            class="inline-block mt-6 bg-yellow-500 text-white rounded-lg px-6 py-3 font-semibold hover:bg-yellow-600 transition-colors"
          >
            Start a Quiz
          </RouterLink>
        </Card>
        
        <!-- Create a Quiz Card -->
        <Card bg="bg-green-100">
          <h2 class="text-3xl font-bold text-green-800">Create a Quiz</h2>
          <p class="mt-4 text-green-700">
            Make your own trivia quizzes and challenge your friends to play!
          </p>
          <RouterLink v-if="!authStore.isAuthenticated"
            to="/login"
            class="inline-block mt-6 bg-green-500 text-white rounded-lg px-6 py-3 font-semibold hover:bg-green-600 transition-colors"
          >
            Create Quiz
          </RouterLink>
          <RouterLink v-else
            to="/quiz/create"
            class="inline-block mt-6 bg-green-500 text-white rounded-lg px-6 py-3 font-semibold hover:bg-green-600 transition-colors"
          >
            Create Quiz
          </RouterLink>
        </Card>

        <!-- Leaderboard Card -->
        <Card bg="bg-blue-100">
          <h2 class="text-3xl font-bold text-blue-800">Leaderboard</h2>
          <p class="mt-4 text-blue-700">
            See who’s on top! Check out the highest scores from trivia masters.
          </p>
          <RouterLink v-if="!authStore.isAuthenticated"
            to="/login"
            class="inline-block mt-6 bg-blue-500 text-white rounded-lg px-6 py-3 font-semibold hover:bg-blue-600 transition-colors"
          >
            View Leaderboard
          </RouterLink>
          <RouterLink v-else
            to="/leaderboard"
            class="inline-block mt-6 bg-blue-500 text-white rounded-lg px-6 py-3 font-semibold hover:bg-blue-600 transition-colors"
          >
            View Leaderboard
          </RouterLink>
        </Card>

        <!-- My Quizzes Card -->
        <Card bg="bg-purple-100">
          <h2 class="text-3xl font-bold text-purple-800">My Quizzes</h2>
          <p class="mt-4 text-purple-700">
            Review your quizzes and track your progress as you improve!
          </p>
          <RouterLink v-if="!authStore.isAuthenticated"
            to="/login"
            class="inline-block mt-6 bg-purple-500 text-white rounded-lg px-6 py-3 font-semibold hover:bg-purple-600 transition-colors"
          >
            View My Quizzes
          </RouterLink>
          <RouterLink v-else
            to="/quizzes"
            class="inline-block mt-6 bg-purple-500 text-white rounded-lg px-6 py-3 font-semibold hover:bg-purple-600 transition-colors"
          >
            View My Quizzes
          </RouterLink>
        </Card>

      </div>
    </div>
  </section>
</template>