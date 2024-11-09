<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  question: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: Number,
    default: null,
  },
});

const emit = defineEmits(['update:modelValue']);

const selectOption = (optionId) => {
  emit('update:modelValue', optionId);
};
</script>

<template>
  <div class="border p-4 rounded-lg shadow-md bg-white">
    <h3 class="text-xl font-semibold mb-4">{{ question.text }}</h3>
    <div v-for="option in question.options" :key="option.id" class="mb-2">
      <label class="flex items-center">
        <input
          type="radio"
          :value="option.id"
          :checked="modelValue === option.id"
          @change="selectOption(option.id)"
          class="mr-2"
        />
        <span>{{ option.text }}</span>
      </label>
    </div>
  </div>
</template>