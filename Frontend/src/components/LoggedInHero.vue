<script setup>
/**
 * Future ideas: make each icon clickable, leads to the quiz category
 * Essentially a duplicate of Landing Hero, code needs to be more modular
 */

import { ref, onMounted } from 'vue';
import animals from "@/assets/trivia_categories/animals.svg";
import history from "@/assets/trivia_categories/history.svg";
import science from "@/assets/trivia_categories/science.svg";
import brain from "@/assets/trivia_categories/brain.svg";
import famous from "@/assets/trivia_categories/famous.svg";
import film_camera from "@/assets/trivia_categories/film-camera.svg";
import geography from "@/assets/trivia_categories/geography.svg";
import literature from "@/assets/trivia_categories/literature.svg";
import film from "@/assets/trivia_categories/film.svg";
import people from "@/assets/trivia_categories/people.svg";
import soccer from "@/assets/trivia_categories/soccer.svg";
import television from "@/assets/trivia_categories/television.svg";
import video_games from "@/assets/trivia_categories/video-games.svg";

import { useDark } from '@vueuse/core';
import { useAuthStore } from '@/store/auth';
import CategoryTags from './landing-page/CategoryTags.vue';
import ShimmerButton from './inspira-ui/ShimmerButton.vue';
import RandomTrivia from './landing-page/RandomTrivia.vue';

const isDark = useDark();
const authStore = useAuthStore();

const icons = ref([
	{ src: animals, style: {} },
	{ src: history, style: {} },
	{ src: science, style: {} },
	{ src: brain, style: {} },
	{ src: famous, style: {} },
	{ src: film_camera, style: {} },
	{ src: geography, style: {} },
	{ src: literature, style: {} },
	{ src: film, style: {} },
	{ src: soccer, style: {} },
	{ src: television, style: {} },
	{ src: video_games, style: {} },
	{ src: people, style: {} },
	{ src: animals, style: {} },
	{ src: history, style: {} },
	{ src: science, style: {} },
	{ src: brain, style: {} },
	{ src: famous, style: {} },
	{ src: film_camera, style: {} },
	{ src: geography, style: {} },
	{ src: literature, style: {} },
	{ src: film, style: {} },
	{ src: soccer, style: {} },
	{ src: television, style: {} },
	{ src: video_games, style: {} },
	{ src: people, style: {} },
]);

// Check icon overlap
function isOverlapping(top, left, existingPositions, buffer = 10) {
	return existingPositions.some(pos => {
		const dx = pos.left - left;
		const dy = pos.top - top;
		return Math.sqrt(dx * dx + dy * dy) < buffer;
	});
}

// This is ineffecient way to prevent overlap
// Can by improved by using a grid based approach and checking for overlapping cells
onMounted(async () => {
	const existingPositions = [];
	icons.value.forEach(icon => {
		let randomTop, randomLeft;

		while (true) {
			randomTop = Math.random() * 90;
			randomLeft = Math.random() * 100;

			if (!isOverlapping(randomTop, randomLeft, existingPositions, 10)) {
				break;
			}
		}

		existingPositions.push({ top: randomTop, left: randomLeft });

		const randomDuration = Math.random() * 5 + 9;
		icon.style = {
			top: `${randomTop}%`,
			left: `${randomLeft}%`,
			animationDuration: `${randomDuration}s`,
		};
	});

	try {
		await authStore.fetchUser();
	} catch (error) {
		console.error('Error fetching user:', error);
	}
});

const categoryTagsSection = ref(null);

// Function to scroll to CategoryTags
const scrollToCategoryTags = () => {
	if (categoryTagsSection.value) {
		categoryTagsSection.value.scrollIntoView({ behavior: 'smooth' });
	}
};
</script>

<template>
	<section class="bg-l-bg min-h-screen py-36 dark:bg-d-bg flex items-center">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center" style="z-index: 1;">

			<div v-if="authStore.isAuthenticated"
				class="dark:text-white text-fission-1 text-4xl font-inter sm:text-6xl md:text-[5rem] mb-10">
				<!-- Bright Yellow Text -->
				Welcome back, {{ authStore.user?.username || 'Error' }}!
			</div>
			<router-link to="/quiz">
				<ShimmerButton class="shadow-2xl" shimmer-size="2px" :background="isDark ? '#f97143' : '#9412f8'">
					<span
						class="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10">
						Test Yourself!
					</span>
				</ShimmerButton>
			</router-link>
		</div>
		<div :class="!isDark ? 'icons' : 'icons-dark'">
			<img v-for="(icon, index) in icons" :key="index" :src="icon.src" :style="icon.style" />
		</div>
		<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
			<button @click="scrollToCategoryTags"
				class="p-4 bg-l-primary bg-opacity-30 dark:bg-l-accent dark:bg-opacity-50 text-black rounded-full shadow-md hover:bg-fission-2 focus:outline-none animate-bounce dark:bg-fission-2 dark:text-white dark:hover:bg-fission-3"
				aria-label="Scroll down">
				↓
			</button>
		</div>
	</section>
	<div ref="categoryTagsSection">
		<RandomTrivia class="dark:bg-d-bg bg-l-bg vh-100 "> </RandomTrivia>
	</div>
	<div class="dark:bg-d-bg bg-l-bg vh-100">
		<CategoryTags>

		</CategoryTags>
	</div>

</template>

<style scoped>
.icons {
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	pointer-events: none;
	z-index: 0;
}

.icons-dark {
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	pointer-events: none;
	z-index: 0;
	filter: invert(1)
}

.no-border {
	border: none !important;
	outline: none !important;
	box-shadow: none !important;
}

.icons img,
.icons-dark img {
	position: absolute;
	background-color: transparent;
	animation: animate linear infinite;
	fill: red;
	stroke: red;
}

@keyframes animate {
	0% {
		transform: scale(0) translateY(0) rotate(0);
		opacity: 0.8;
	}

	100% {
		transform: scale(1.0) translateY(-90px) rotate(360deg);
		opacity: 0;
	}
}

@keyframes bounce {

	0%,
	20%,
	50%,
	80%,
	100% {
		transform: translateY(0);
	}

	40% {
		transform: translateY(-10px);
	}

	60% {
		transform: translateY(-5px);
	}
}

.animate-bounce {
	animation: bounce 2s infinite;
}

/* Text fade animation */
@keyframes fade {

	0%,
	100% {
		opacity: 0;
	}

	50% {
		opacity: 1;
	}
}

.animate-fade {
	animation: fade 3s infinite;
}
</style>