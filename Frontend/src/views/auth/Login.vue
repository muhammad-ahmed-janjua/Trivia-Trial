<script setup>
	import { ref } from 'vue';
	import { useAuthStore } from '../../store/auth';
	import { useRouter } from 'vue-router';

	const authStore = useAuthStore();
	const router = useRouter();

	const email = ref('');
	const password = ref('');
	const error = ref('');

	const login = async () => {
	await authStore.login(email.value, password.value, router);
	if (!authStore.isAuthenticated) {
		error.value = 'Login failed. Please check your credentials.';
	}
	};

	const resetError = () => {
	error.value = '';
	};
</script>

<template>
	<section class=" min-h-screen flex items-center justify-center bg-l-bg dark:bg-d-bg">
	  <div class="container max-w-md">
		<div class="px-6 py-8 mb-4 shadow-md rounded-[2rem] border m-4 md:m-0 bg-white ">
		  <h2 class="text-3xl text-center font-semibold mb-6">Trivia Login</h2>
		  <form @submit.prevent="login">
			<div class="mb-3">
			  <label for="login-email" class="text-gray-700 font-bold mb-2">Email address</label>
			  <input
				v-model="email"
				class="border rounded w-full py-2 px-3 mb-2"
				type="email"
				placeholder="name@example.com"
				name="email"
				required
				@input="resetError"
			  />
			</div>
			<div class="mb-3">
			  <label for="login-password" class="text-gray-700 font-bold mb-2">Password</label>
			  <input
				v-model="password"
				class="border rounded w-full py-2 px-3 mb-2"
				type="password"
				placeholder="Enter password"
				required
				@input="resetError"
			  />
			</div>
			<div v-if="error" class="text-red-500 mb-4">{{ error }}</div>
			<div class="d-grid gap-2">
			  <button
				id="login-submit"
				class="bg-l-primary hover:bg-l-primary/[0.8] dark:bg-d-accent dark:hover:bg-d-secondary text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mb-4"
				type="submit"
			  >
				Login
			  </button>
			  <router-link to="/register" class="w-full">
				<div class="bg-l-primary/[0.2] hover:bg-l-primary/[0.5] text-black font-bold py-2 px-4 rounded-full w-full text-center focus:outline-none focus:shadow-outline">
					Create Account?
				</div>
			  </router-link>
			</div>
		  </form>
		</div>
	  </div>
	</section>
  </template>