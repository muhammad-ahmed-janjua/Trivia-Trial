<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getCSRFToken } from '../../store/auth';

const router = useRouter();

const email = ref('');
const password = ref('');
const error = ref('');
const success = ref('');

const register = async () => {
  try {
    console.log('Attempting registration with email:', email.value); // Debugging log

    const response = await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCSRFToken(),
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
      credentials: 'include',
    });

    const data = await response.json();
    if (response.ok) {
      success.value = 'Registration successful! Please log in.';
      setTimeout(() => {
        router.push('/login');
      }, 1000);
    } else {
      error.value = data.error || 'Registration failed';
    }
  } catch (err) {
    error.value = 'An error occurred during registration: ' + err.message;
    console.error('Registration error:', err); // Debugging log
  }
};
</script>

<template>
  <section class="min-h-screen flex items-center justify-center bg-l-bg dark:bg-d-bg">
    <div class="container max-w-md">
      <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-[2rem] border m-4 md:m-0">
        <h2 class="text-3xl text-center font-semibold mb-6">Trivia Register</h2>
        <form @submit.prevent="register">
          <div class="mb-3">
            <label for="register-email" class="text-gray-700 font-bold mb-2">Email address</label>
            <input
              v-model="email"
              id="register-email"
              class="border rounded w-full py-2 px-3 mb-2"
              type="email"
              placeholder="name@example.com"
              required
            />
          </div>
          <div class="mb-3">
            <label for="register-password" class="text-gray-700 font-bold mb-2">Password</label>
            <input
              v-model="password"
              id="register-password"
              class="border rounded w-full py-2 px-3 mb-2"
              type="password"
              placeholder="Enter password"
              required
            />
          </div>
          <div v-if="error" class="text-red-500 mb-4">{{ error }}</div>
          <div v-if="success" class="text-green-500 mb-4">{{ success }}</div>
          <div class="d-grid gap-2">
            <button
              class="bg-l-primary hover:bg-l-primary/[0.8] dark:bg-d-accent dark:hover:bg-d-secondary text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mb-4"
              type="submit"
            >
              Register
            </button>
            <router-link to="/login" class="w-full">
              <div class="bg-l-primary/[0.2] hover:bg-l-primary/[0.5] text-black font-bold py-2 px-4 rounded-full w-full text-center focus:outline-none focus:shadow-outline">
                Already have an account? Login
              </div>
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>