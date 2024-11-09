<script setup>
import { ref } from 'vue';
import QuestionComponent from '@/components/TestQuestion.vue'
// Hardcoded quiz data
const quiz = ref({
  id: 1,
  title: "General Knowledge Quiz",
  questions: [
    {
      id: 1,
      text: "What is the capital of France?",
      options: [
        { id: 1, text: "Berlin" },
        { id: 2, text: "Madrid" },
        { id: 3, text: "Paris" },
        { id: 4, text: "Rome" }
      ]
    },
    {
      id: 2,
      text: "Which planet is known as the Red Planet?",
      options: [
        { id: 1, text: "Earth" },
        { id: 2, text: "Jupiter" },
        { id: 3, text: "Mars" },
        { id: 4, text: "Venus" }
      ]
    },
    {
      id: 3,
      text: "Who wrote 'To Kill a Mockingbird'?",
      options: [
        { id: 1, text: "Harper Lee" },
        { id: 2, text: "F. Scott Fitzgerald" },
        { id: 3, text: "Ernest Hemingway" },
        { id: 4, text: "Mark Twain" }
      ]
    }
  ]
});

const currentQuestionIndex = ref(0);
const userAnswers = ref(Array(quiz.value.questions.length).fill(null));

// Navigation functions
const nextQuestion = () => {
  if (currentQuestionIndex.value < quiz.value.questions.length - 1) {
    currentQuestionIndex.value += 1;
  }
};

const prevQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value -= 1;
  }
};

const submitQuiz = () => {
  console.log("User answers:", userAnswers.value);
  // Here you could display a result or score summary if needed.
};
</script>

<template>
  <section class="p-4">
    <h2 class="text-3xl font-bold mb-6 text-center">{{ quiz.title }}</h2>

    <!-- Display current question -->
    <QuestionComponent
      :question="quiz.questions[currentQuestionIndex]"
      v-model="userAnswers[currentQuestionIndex]"
    />

    <!-- Navigation Controls -->
    <div class="flex justify-between mt-6">
      <button
        @click="prevQuestion"
        :disabled="currentQuestionIndex === 0"
        class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
      >
        Previous
      </button>
      <button
        v-if="currentQuestionIndex < quiz.questions.length - 1"
        @click="nextQuestion"
        class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Next
      </button>
      <button
        v-else
        @click="submitQuiz"
        class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Submit Quiz
      </button>
    </div>
  </section>
</template>