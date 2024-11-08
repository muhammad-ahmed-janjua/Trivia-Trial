<script setup>
	import { RouterLink } from 'vue-router';
</script>

<template>
	<footer class="bg-green-700 text-white py-6">
	  <div class="container mx-auto px-4">
		<div class="flex flex-col md:flex-row justify-between items-center">
		  <!-- Logo / Branding -->
		  <div class="text-lg font-semibold mb-4 md:mb-0">
			<a href="/" class="text-white hover:text-gray-400">Vue Jobs</a>
		  </div>
  
		  <!-- Links -->
		  <div class="flex space-x-4 mb-4 md:mb-0">
			<RouterLink to="/" class="hover:text-gray-400">Home</RouterLink>
			<RouterLink to="/jobs" class="hover:text-gray-400">Jobs</RouterLink>
			<RouterLink to="/jobs/add" class="hover:text-gray-400">Add Job</RouterLink>
			<a href="https://github.com/muhammad-ahmed-janjua/learning-vue/tree/main/job-page-project" class="hover:text-gray-400">Github</a>
		  </div>
  
		</div>

	  </div>
	</footer>
</template>
  
