<script setup>
import { defineProps } from 'vue';

defineProps({
  quiz: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="bg-white shadow-lg rounded-lg p-6 text-center">
    <h3 class="text-2xl font-bold text-blue-500 mb-4">{{ quiz.title }}</h3>
    <p class="text-gray-700 mb-4">{{ quiz.description }}</p>
    <RouterLink
      :to="`/quiz/${quiz.id}`"
      class="inline-block bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
    >
      Start Quiz
    </RouterLink>
  </div>
</template>