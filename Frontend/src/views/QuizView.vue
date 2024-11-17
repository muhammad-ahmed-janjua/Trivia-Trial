<template>
	<div class="quiz-view bg-l-bg dark:bg-d-bg min-h-screen flex items-center justify-center">
	  <QuizOptions
		v-if="!quizStarted"
		@start-quiz="startQuiz"
	  />
  
	  <div
		v-if="quizStarted && questions.length"
		class="quiz-questions w-full max-w-xl p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg"
	  >
		<h2 class="text-center text-xl sm:text-2xl md:text-2xl font-semibold dark:text-white mb-6">
		  Question {{ currentQuestionIndex + 1 }} of {{ questions.length }}
		</h2>
		<h3 class="text-center text-lg dark:text-gray-300 mb-4">
			Category: {{ questions[currentQuestionIndex].category }}
		</h3>
		<Question
		  :question="questions[currentQuestionIndex]"
		  :index="currentQuestionIndex"
		  :userAnswers="userAnswers"
		  @answer-selected="handleAnswerSelection"
		/>
  
		<button
		  @click="goBack"
		  class="mt-6 px-4 py-2 bg-d-primary/[0.5] opacity-50 text-white rounded-md hover:opacity-100 hover:text-black focus:outline-none"
		>
		  Back to Quiz Options
		</button>
	  </div>
	</div>
  </template>

<script>
import { useAuthStore } from '../store/auth';
import axios from 'axios';
import QuizOptions from './QuizOptionsView.vue';
import Question from '@/components/Question.vue';
import { getCSRFToken } from '../store/auth';
import { useToast } from "vue-toastification";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default {
	name: "QuizView",
	components: {
		QuizOptions,
		Question,
	},
	data() {
		return {
			category: "",
			quizStarted: false,
			quizCompleted: false,
			questions: [],
			userAnswers: [],
			quizOptions: null,
			currentQuestionIndex: 0,
			score: 0,
		};
	},
	methods: {
		async startQuiz(options) {
			this.quizOptions = options;
			this.category = options.category;
			try {
				const params = new URLSearchParams({
					limit: options.limit.toString(),
					random: options.random.toString(),
				});

				if (options.category) {
					params.append("category", options.category);
				}

				const response = await axios.get(
					`${API_BASE_URL}/trivia/questions/?${params.toString()}`
				);

				this.questions = response.data.questions;
				this.quizStarted = true;
				this.quizCompleted = false;
				this.currentQuestionIndex = 0; // Start at the first question
				this.userAnswers = Array(this.questions.length).fill(null);
			} catch (error) {
				console.error("Error starting quiz:", error);
			}
		},
		handleAnswerSelection(answer) {
			this.userAnswers[this.currentQuestionIndex] = answer;

			if (this.currentQuestionIndex < this.questions.length - 1) {
				this.currentQuestionIndex++;
			} else {
				this.handleSubmitQuiz();
			}
		},
		async submitQuiz() {
			this.score = this.calculateScore();
			const toast = useToast();
			toast.success(`Your score is ${this.score} / ${this.questions.length}`, {
				position: "top-right",
				timeout: 5000,
			});

			const payload = {
				category: this.quizOptions.category,
				score: this.score,
			};

			try {
				const response = await axios.post(
					`${API_BASE_URL}/user/stats/update`,
					payload,
					{
						headers: {
							'X-CSRFToken': getCSRFToken(),
						},
						withCredentials: true,
					}
				);
				console.log(response.data.message);
			} catch (error) {
				console.error('Error updating user stats:', error);
			}

			this.quizCompleted = true;
			this.quizStarted = false;
		},
		submitQuizUnauthorised() {
			this.score = this.calculateScore();
			const toast = useToast();
			toast.success(`Your score is ${this.score} / ${this.questions.length}`, {
				position: "top-right",
				timeout: 5000,
			});

			this.quizCompleted = true;
			this.quizStarted = false;
		},
		async handleSubmitQuiz() {
			if (useAuthStore().isAuthenticated) {
				await this.submitQuiz();
			} else {
				this.submitQuizUnauthorised();
			}
		},
		calculateScore() {
			let score = 0;
			this.questions.forEach((question, index) => {
				const correctOption = question.options.find(option => option.is_correct);
				if (this.userAnswers[index] === correctOption.text) {
					score++;
				}
			});
			return score;
		},
		goBack() {
			this.quizStarted = false;
			this.questions = [];
			this.userAnswers = [];
			this.currentQuestionIndex = 0;
		},
	},
};
</script>