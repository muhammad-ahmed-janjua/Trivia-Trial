<script setup>
	import { RouterLink } from 'vue-router';
</script>

<template>
	<footer class="bg-l-primary dark:bg-d-accent text-white py-8">
	  <div class="container mx-auto px-4">
		<div class="flex flex-col md:flex-row justify-between items-center mb-6">
		  
		  <!-- Logo / Branding -->
		  <div class="text-lg font-semibold mb-4 md:mb-0 text-white">
			<a href="/" class="hover:text-gray-400 dark:hover:text-black">Trivia Time</a>
		  </div>
  
		  <!-- Navigation Links -->
		  <div class="flex space-x-6 mb-4 md:mb-0">
			<RouterLink to="/" class="hover:text-gray-400 text-white dark:hover:text-black">Home</RouterLink>
			<RouterLink to="/quiz" class="hover:text-gray-400 text-white dark:hover:text-black">Quiz</RouterLink>
			<RouterLink to="/leaderboard" class="hover:text-gray-400 text-white dark:hover:text-black">Leaderboard</RouterLink>
			<RouterLink to="/quizzes" class="hover:text-gray-400 text-white dark:hover:text-black">My Quizzes</RouterLink>
			<RouterLink to="/profile" class="hover:text-gray-400 dark:hover:text-black text-white">Profile</RouterLink>
			<a href="https://github.com/muhammad-ahmed-janjua/Trivia-Trial" class="hover:text-gray-400 text-white dark:hover:text-bl">GitHub</a>
		  </div>

		  <!-- Contact Info -->
		  <div class="text-center md:text-left">
			<p class="text-sm text-white">Contact me: <a href="muhammadahmedjanjua.02@gmail.com" class="hover:text-gray-400 dark:hover:text-black text-white">muhammadahmedjanjua.02@gmail.com</a></p>
		  </div>
		</div>
		
		<!-- Social Media Links -->
		<div class="flex justify-center md:justify-end space-x-4 mb-6">
		  <a href="www.linkedin.com/in/muhammad-ahmed-janjua" class="hover:text-gray-400 dark:hover:text-black first-letter:text-white">LinkedIn</a>
		</div>
	  </div>
	</footer>
</template>