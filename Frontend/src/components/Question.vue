<template>
	<div class="questions-view">
	  <h1>Trivia Questions</h1>
  
	  <!-- Form for selecting category, limit, and randomization -->
	  <form @submit.prevent="fetchQuestions">
		<label for="category">Select Category:</label>
		<select v-model="selectedCategory" id="category">
		  <option value="">All Categories</option>
		  <option v-for="category in categories" :key="category" :value="category">
			{{ category }}
		  </option>
		</select>
  
		<label for="limit">Number of Questions:</label>
		<input type="number" v-model="questionLimit" id="limit" min="1" />
  
		<label for="random">Randomize:</label>
		<input type="checkbox" v-model="randomizeQuestions" id="random" />
  
		<button type="submit">Fetch Questions</button>
	  </form>
  
	  <!-- Display fetched questions and options -->
	  <div v-if="questions.length">
		<h2>Questions</h2>
		<div v-for="question in questions" :key="question.id" class="question">
		  <p><strong>{{ question.text }}</strong> (Category: {{ question.category }})</p>
		  <ul>
			<li v-for="option in question.options" :key="option.text">{{ option.text }}</li>
		  </ul>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
	name: 'QuestionsView',
	data() {
	  return {
		categories: ['Animals', 'History', 'Geography', 'Science', 'Entertainment'], // You can fetch this dynamically
		selectedCategory: '',
		questionLimit: 10,
		randomizeQuestions: false,
		questions: []
	  };
	},
	methods: {
	  async fetchQuestions() {
		try {
		  // Construct query parameters based on user selections
		  const params = {
			limit: this.questionLimit,
			random: this.randomizeQuestions
		  };
		  if (this.selectedCategory) {
			params.category = this.selectedCategory;
		  }
  
		  // Make API request
		  const response = await axios.get('http://localhost:8000/api/trivia/questions/', { params });
		  this.questions = response.data.questions; // Store fetched questions
		} catch (error) {
		  console.error('Error fetching questions:', error);
		}
	  }
	}
  };
  </script>
  
  <style scoped>
  .questions-view {
	padding: 20px;
  }
  .question {
	margin: 10px 0;
  }
  </style>