<template>
	<div class="quiz-view">
	  <h1>Trivia Quiz</h1>
  
	  <!-- QuizOptions component to gather quiz settings from the user -->
	  <QuizOptions :categories="categories" @start-quiz="startQuiz" />
  
	  <!-- Display quiz questions once quiz starts -->
	  <div v-if="quizStarted && questions.length" class="quiz-questions">
		<h2>Quiz</h2>
		<div v-for="(question, index) in questions" :key="question.id" class="question">
		  <p><strong>Q{{ index + 1 }}: {{ question.text }}</strong></p>
		  <ul>
			<li v-for="option in question.options" :key="option.text">
			  <label>
				<input type="radio" :name="'question-' + index" :value="option.text" v-model="userAnswers[index]" />
				{{ option.text }}
			  </label>
			</li>
		  </ul>
		</div>
		<button @click="submitQuiz">Submit Quiz</button>
	  </div>
	</div>
  </template>
  
  <script>
  import axios from 'axios';
  import QuizOptions from './QuizOptionsView.vue';
  import { getCSRFToken } from '../store/auth';
  
  export default {
	name: "QuizView",
	components: {
	  QuizOptions,
	},
	data() {
	  return {
		categories: ["Animals", "History", "Geography", "Science", "Entertainment"], // Replace with dynamic data if needed
		quizStarted: false,
		questions: [],
		userAnswers: [],
		quizOptions: null,
	  };
	},
	methods: {
	  async startQuiz(options) {
		this.quizOptions = options;
		try {
		  // Fetch questions based on the options selected in QuizOptions
		  const params = {
			limit: options.limit,
			random: options.random,
		  };
		  if (options.category) {
			params.category = options.category;
		  }
  
		  const response = await axios.get('http://localhost:8000/api/trivia/questions/', { params });
		  this.questions = response.data.questions;
		  this.quizStarted = true;
  
		  // Initialize user answers array
		  this.userAnswers = Array(this.questions.length).fill(null);
		} catch (error) {
		  console.error("Error starting quiz:", error);
		}
	  },
	  async submitQuiz() {
		console.log("submit" + this.quizOptions);

		// Calculate the score based on correct answers
		this.score = this.calculateScore();
		console.log(this.quizOptions.category)
		// Prepare the data to match the stats structure
		const payload = {
			category: this.quizOptions.category,
			score: this.score
		};

		// Call the API to update user stats with the calculated score and selected category
		try {
			const response = await axios.post(
			'http://localhost:8000/api/user/stats/update',
			payload,
			{
				headers: {
				'X-CSRFToken': getCSRFToken() // Include CSRF token from authStore
				},
				withCredentials: true // Ensure cookies are sent in the request
			}
			);

			// Log the server response for debugging
			console.log(response.data.message); // Expected response: 'User stats updated successfully'

			// Optionally: Update local stats representation if needed
			// e.g., this.userStats = response.data.updatedStats;

		} catch (error) {
			console.error('Error updating user stats:', error);
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
    }
  }
  };
  </script>
  
  <style scoped>
  .quiz-view {
	padding: 20px;
  }
  .quiz-questions {
	margin-top: 20px;
  }
  .question {
	margin: 10px 0;
  }
  </style>