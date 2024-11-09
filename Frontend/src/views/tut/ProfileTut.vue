<script setup>
import { ref, onMounted } from 'vue';

// Hardcoded data simulating user profile stats
const userStats = ref({
  total_score: 500,
  highest_score: 100,
  performance_data: [
    {
      category: "Science",
      average_score: 85,
      attempts: 5,
    },
    {
      category: "History",
      average_score: 45,
      attempts: 3,
    },
    {
      category: "Sports",
      average_score: 60,
      attempts: 4,
    },
    {
      category: "Geography",
      average_score: 30,
      attempts: 2,
    }
  ]
});

// Simulate loading state
const isLoading = ref(true);
const errorMessage = ref('');

const loadUserStats = async () => {
  // Simulating a delay to replicate an API call
  await new Promise((resolve) => setTimeout(resolve, 500));
  isLoading.value = false;
};

// Load hardcoded data on component mount
onMounted(() => {
  loadUserStats();
});
</script>

<template>
  <section class="p-6 max-w-2xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-6">Your Profile</h2>

    <div v-if="isLoading" class="text-center text-gray-500">
      Loading profile stats...
    </div>

    <div v-else-if="errorMessage" class="text-center text-red-500">
      {{ errorMessage }}
    </div>

    <div v-else>
      <!-- User Stats Summary -->
      <div class="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 class="text-xl font-semibold mb-2">Overall Stats</h3>
        <p>Total Score: {{ userStats.total_score }}</p>
        <p>Highest Score: {{ userStats.highest_score }}</p>
      </div>

      <!-- Category Performance -->
      <div class="bg-white p-4 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-4">Performance by Category</h3>
        <div v-for="data in userStats.performance_data" :key="data.category" class="mb-4">
          <p class="text-lg font-medium">{{ data.category }}</p>
          <p>Average Score: {{ data.average_score.toFixed(2) }}</p>
          <p>Attempts: {{ data.attempts }}</p>

          <!-- Performance Indicator -->
          <p v-if="data.average_score < 50" class="text-red-500">Needs Improvement</p>
          <p v-else class="text-green-500">Good Performance</p>
        </div>
      </div>
    </div>
  </section>
</template>