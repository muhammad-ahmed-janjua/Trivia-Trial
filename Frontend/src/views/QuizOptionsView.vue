<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/shad-cn-ui/ui/card';
import { Input } from '@/components/shad-cn-ui/ui/input';
import { Label } from '@/components/shad-cn-ui/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
  SelectGroup,
} from '@/components/shad-cn-ui/ui/select';
import { Button } from '@/components/shad-cn-ui/ui/button';

// Predefined categories
const categories = ref([
  'Animals',
  'Movies',
  'Science',
  'Video Games',
  'Sports',
]);

const selectedCategory = ref('');
const questionLimit = ref(10);

const emit = defineEmits(['start-quiz']);

const applyOptions = () => {
  let category = selectedCategory.value === '' ? null : selectedCategory.value;

  if (selectedCategory.value === "All Categories") {
	category = null;
  }

  emit('start-quiz', {
    category,
    limit: questionLimit.value,
    random: true,
  });
};

const startRandomQuiz = () => {
  emit('start-quiz', {
    category: null,
    limit: questionLimit.value,
    random: true, 
  });
};
</script>

<template>
	<div class="flex items-center justify-center min-h-screen">
	  <Card class="w-full max-w-md mx-auto p-6 dark:border-none">
		<CardHeader>
		  <CardTitle class="3xl">Select Quiz Options</CardTitle>
		  <CardDescription>Customize your quiz preferences below.</CardDescription>
		</CardHeader>
		<CardContent>
		  <form @submit.prevent="applyOptions" class="space-y-4">
			<!-- Category Selection -->
			<div>
			  <Select v-model="selectedCategory">
				<SelectTrigger class="w-full">
				  <SelectValue placeholder="Select a Category" class="text-xl" />
				</SelectTrigger>
				<SelectContent class="dark:border-black ">
				  <SelectGroup class="text-2xl">
					<SelectItem value="All Categories">All Categories</SelectItem>
					<SelectItem value="Animals">Animals</SelectItem>
					<SelectItem value="Movies">Movies</SelectItem>
					<SelectItem value="science technology">Science</SelectItem>
					<SelectItem value="Video Games">Video Games</SelectItem>
					<SelectItem value="Sports">Sports</SelectItem>
					<SelectItem value="brain teasers">Brain Teasers</SelectItem>
					<SelectItem value="for kids">For Kids</SelectItem>
					<SelectItem value="geography">Geography</SelectItem>
					<SelectItem value="celebrities">celebrities</SelectItem>
					<SelectItem value="literature">literature</SelectItem>
					<SelectItem value="entertainment">Entertainment</SelectItem>
					<SelectItem value="music">Music</SelectItem>
					<SelectItem value="religion faith">Religion/Faith</SelectItem>
					<SelectItem value="television">Television</SelectItem>
					<SelectItem value="world">World</SelectItem>
					<SelectItem value="people">People</SelectItem>
				  </SelectGroup>
				</SelectContent>
			  </Select>
			</div>
  
			<!-- Question Limit -->
			<div>
			  <Label for="limit" class="text-xl">Number of Questions:</Label>
			  <Input
				type="number"
				v-model="questionLimit"
				id="limit"
				min="1"
				placeholder="Enter number of questions"
				class="text-xl"
			  />
			</div>

		  </form>
		</CardContent>
		<CardFooter class="flex justify-between p-2">
			<Button
          @click="startRandomQuiz"
          class="bg-l-accent text-md dark:text-white text-white dark:bg-l-primary hover:bg-l-accent/[0.8]"
        >
          Start Random Quiz
        </Button>
		  <Button @click="applyOptions" class="dark:bg-d-accent text-md dark:text-white bg-l-primary hover:bg-l-primary/[0.8]">Start Quiz</Button>
		</CardFooter>
	  </Card>
	</div>
</template>
