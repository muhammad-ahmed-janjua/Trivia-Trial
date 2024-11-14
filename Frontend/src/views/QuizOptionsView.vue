<template>
	<div class="quiz-options">
	  <h2>Select Quiz Options</h2>
	  <form @submit.prevent="applyOptions">
		<!-- Category Selection -->
		<label for="category">Select Category:</label>
		<select v-model="selectedCategory" id="category">
		  <option value="">All Categories</option>
		  <option v-for="category in categories" :key="category" :value="category">
			{{ category }}
		  </option>
		</select>
  
		<!-- Question Limit -->
		<label for="limit">Number of Questions:</label>
		<input type="number" v-model="questionLimit" id="limit" min="1" />
  
		<!-- Randomization Toggle -->
		<label for="random">Randomize Questions:</label>
		<input type="checkbox" v-model="randomizeQuestions" id="random" />
  
		<!-- Submit Button -->
		<button type="submit">Start Quiz</button>
	  </form>
	</div>
  </template>
  
  <script>
  export default {
	name: "QuizOptions",
	props: {
	  categories: {
		type: Array,
		default: () => ["Animals", "History", "Geography", "Science", "Entertainment"], // Replace with fetched categories if needed
	  },
	},
	data() {
	  return {
		selectedCategory: "",  // Default empty to represent "All Categories"
		questionLimit: 10,
		randomizeQuestions: false,
	  };
	},
	methods: {
	  applyOptions() {
		// If no category is selected, default to "All Categories" or handle it as needed
		const selectedCategory = this.selectedCategory || "All Categories";
		console.log(selectedCategory)
		// Emit the options selected by the user to the parent component
		this.$emit("start-quiz", {
		  category: selectedCategory,
		  limit: this.questionLimit,
		  random: this.randomizeQuestions,
		});
	  },
	},
  };
  </script>
  
  <style scoped>
  .quiz-options {
	padding: 20px;
	max-width: 400px;
	margin: 0 auto;
  }
  </style>