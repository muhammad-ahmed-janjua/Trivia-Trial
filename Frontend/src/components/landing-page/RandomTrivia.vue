<template>
	<div
		class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-l-bg dark:bg-d-bg">
		<h1 class="text-4xl sm:text-5xl lg:text-6xl mt-5 mb-10 text-center dark:text-l-accent text-d-primary">Did you know?</h1>
		<!-- First Marquee -->
		<Marquee pause-on-hover class="[--duration:20s]">
			<ReviewCard v-for="review in firstRow" :body="review.body" />
		</Marquee>

		<!-- Second Marquee (reverse) -->
		<Marquee reverse pause-on-hover class="[--duration:20s]">
			<ReviewCard v-for="review in secondRow" :body="review.body" />
		</Marquee>

		<!-- Left Gradient -->
		<div
			class="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-l-bg dark:from-d-bg">
		</div>

		<!-- Right Gradient -->
		<div
			class="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-l-bg dark:from-d-bg">
		</div>
	</div>
</template>

<script setup lang="ts">
/**
 * Code copied from inspira ui marquee component
 */
import { ref } from 'vue';
import ReviewCard from '../inspira-ui/Marquee/ReviewCard.vue';
import Marquee from '../inspira-ui/Marquee/Marquee.vue';
// Reviews data
const reviews = [
  {
    body: "The elephant is the largest land mammal.",
  },
  {
    body: "The first Olympic Games were held in 776 BC in Ancient Greece.",
  },
  {
    body: "The Legend of Zelda was released in 1986 and is one of the most iconic video game franchises.",
  },
  {
    body: "Water boils at 100°C (212°F) at sea level.",
  },
  {
    body: "The movie Titanic won 11 Academy Awards, including Best Picture.",
  },
  {
    body: "A group of flamingos is called a 'flamboyance'.",
  },
  {
    body: "Basketball was invented in 1891 by James Naismith.",
  },
  {
    body: "Minecraft is the best-selling video game of all time, with over 200 million copies sold.",
  },
  {
    body: "Albert Einstein won the Nobel Prize in Physics in 1921.",
  },
  {
    body: "The Marvel Cinematic Universe's first movie, Iron Man, was released in 2008.",
  },
];

// Split reviews into two rows
const firstRow = ref(reviews.slice(0, reviews.length / 2));
const secondRow = ref(reviews.slice(reviews.length / 2));
</script>