<script setup>
	import LandingHero from '@/components/LandingHero.vue';
	import LoggedInHero from '@/components/LoggedInHero.vue';

	import { RouterLink, useRouter } from 'vue-router';
	import { useAuthStore } from '../store/auth';
	import { ref } from 'vue';

	const authStore = useAuthStore();
	const router = useRouter();
	const showMenu = ref(false);
</script>

<template>
	<LandingHero v-if="!authStore.isAuthenticated"/>
	<LoggedInHero v-else/>
</template>