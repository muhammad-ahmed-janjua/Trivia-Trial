<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
	question: {
		type: Object,
		required: true,
	},
	index: {
		type: Number,
		required: true,
	},
});

const emit = defineEmits(['answer-selected']);

function selectAnswer(answer) {
	emit('answer-selected', answer);
}
</script>

<template>
	<div class="questions-view max-w-xl mx-auto p-4 sm:p-5 md:p-6 ">
		<div v-if="question">
			<h2 class="text-left text-xl sm:text-2xl md:text-2xl font-inter dark:text-white mb-4 ">
				{{ question.text }}
			</h2>
			<ul class="space-y-2 text-left">
				<li v-for="option in question.options" :key="option.text" @click="selectAnswer(option.text)"
					class="cursor:pointer dark:text-white px-3 py-2 border font-inter rounded-md cursor-pointer text-[1.2rem] hover:bg-gray-100 dark:hover:bg-gray-700">
					{{ option.text }}
				</li>
			</ul>
		</div>
	</div>
</template>