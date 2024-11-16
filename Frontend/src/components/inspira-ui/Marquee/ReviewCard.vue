<template>
	<figure
	  class="relative w-64 cursor-pointer overflow-hidden rounded-xl content-center bg-l-primary p-4 hover:bg-l-primary/[0.7] dark:bg-d-secondary dark:hover:bg-d-accent"
	>
	  <blockquote class="text-[1rem] text-white dark:text-white">{{ body }}</blockquote>
	</figure>
  </template>
  
  <script lang="ts" setup>
  interface Props {
	body: string;
  }
  
  defineProps<Props>();
  </script>
