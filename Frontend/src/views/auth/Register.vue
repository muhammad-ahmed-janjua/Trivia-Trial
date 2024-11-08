<script setup>

</script>
<template>
	<section class="bg-blue-50 min-h-screen flex items-center justify-center">
		<div class="container max-w-md">
			<div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
				<h2 class="text-3xl text-center font-semibold mb-6">Trivia Login</h2>
				<form @submit.prevent="handleSubmit">
					<div class="mb-3">
						<label for="login-email" class="text-gray-700 font-bold mb-2">Email address</label>
						<input 
							class="border rounded- w-full py-2 px-3 mb-2"
							type="email" 
							placeholder="name@example.com" 
							name='email' 
							required
						/>
					</div>
					<div class="mb-3">
						<label for="login-password" class="form-label">Password</label>
						<input 
							class="border rounded w-full py-2 px-3 mb-2"
							type="password" 
							placeholder="Enter password" 
							required
						/>
					</div>
					<div class="d-grid gap-2">
						<button id="login-submit" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mb-4" type="submit">Login</button>
						<button id="login-submit" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline" type="submit">
							<router-link>
								Sign Up
							</router-link>
						</button>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>