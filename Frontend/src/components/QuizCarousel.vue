<script setup>
import { reactive, defineProps, onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from 'axios';
import CarouselSlide from './CarouselSlide.vue';

const state = reactive({
  quizzes: [],
  isLoading: true,
  currentIndex: 0, // Track current slide index
});

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  }
});

onMounted(async () => {
  try {
    const response = await axios.get('/api/quizzes'); // Adjust API endpoint for quizzes
    state.quizzes = response.data;
  } catch (error) {
    console.error('Error fetching quizzes', error);
  } finally {
    state.isLoading = false;
  }
});

// Navigate to the next slide
const nextSlide = () => {
  state.currentIndex = (state.currentIndex + 1) % state.quizzes.length;
};

// Navigate to the previous slide
const prevSlide = () => {
  state.currentIndex = (state.currentIndex - 1 + state.quizzes.length) % state.quizzes.length;
};
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container w-full mx-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Quizzes
      </h2>
      
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>
      
      <div v-else class="relative">
        <!-- Carousel Slide -->
        <CarouselSlide :quiz="state.quizzes[state.currentIndex]" />

        <!-- Carousel Navigation -->
        <button
          @click="prevSlide"
          class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-r-md"
        >
          Prev
        </button>
        <button
          @click="nextSlide"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-l-md"
        >
          Next
        </button>
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/quizzes"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
    >
      View All Quizzes
    </RouterLink>
  </section>
</template>