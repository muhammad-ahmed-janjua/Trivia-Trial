<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Question from '@/components/TestQuestion.vue'
/*
const quizId = 1; // Replace with dynamic ID if needed
const quiz = ref(null);
const currentQuestionIndex = ref(0);
const userAnswers = ref([]);

const loadQuizData = async () => {
  try {
    const response = await axios.get(`/api/quiz/${quizId}/data`);
    quiz.value = response.data;
    userAnswers.value = Array(quiz.value.questions.length).fill(null);
  } catch (error) {
    console.error("Error loading quiz data:", error);
  }
};
*/

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
  // Add logic here to handle quiz submission, e.g., sending data to the server
};

onMounted(() => {
  loadQuizData();
});
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

<!--
<template>
  <section v-if="quiz" class="p-4">
    <h2 class="text-3xl font-bold mb-6">{{ quiz.title }}</h2>

    
    <QuestionComponent
      :question="quiz.questions[currentQuestionIndex]"
      v-model="userAnswers[currentQuestionIndex]"
    />

    
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

  <section v-else class="text-center py-10 text-gray-500">
    Loading quiz...
  </section>
</template>
-->