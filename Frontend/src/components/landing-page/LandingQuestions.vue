<script setup>
import { defineProps, ref } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();

const props = defineProps({
	question: {
		type: Object,
		required: true,
		default: () => ({
			id: 1,
			text: "Who painted the Mona Lisa?",
			options: [
				{ text: "Leonardo da Vinci" },
				{ text: "Vincent van Gogh" },
				{ text: "Pablo Picasso" },
				{ text: "Claude Monet" },
			],
			correct: "Leonardo da Vinci",
		}),
	},
});

function checkAnswer(selectedAnswer) {
	if (!(selectedAnswer === props.question.correct)) {
		toast.error("Oops! That's incorrect. 😞");
	} else {
		toast.success("Correct!")
	}
}
</script>

<template>
	<div class="questions-view max-w-xl mx-auto p-4 sm:p-5 md:p-6 ">
		<div v-if="question" class>
			<h2 class="text-left text-xl sm:text-2xl md:text-2xl font-inter dark:text-white mb-4">
				{{ question.text }}
			</h2>
			<ul class="space-y-2 text-left">
				<li v-for="option in question.options" :key="option.text" @click="checkAnswer(option.text)"
					class="p-[5px] border font-inter rounded-md cursor-pointer text-[1.2rem] hover:bg-gray-100 dark:hover:bg-gray-700">
					{{ option.text }}
				</li>
			</ul>
		</div>
	</div>
</template>
