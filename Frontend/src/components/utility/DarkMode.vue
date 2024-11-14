<script setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
	<button @click="toggleDark()" :class="[!isDark ? 'dark-mode-toggle' : 'light-mode-toggle']">
		<svg width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496">
			<path fill="currentColor"
				d="M8,256C8,393,119,504,256,504S504,393,504,256,393,8,256,8,8,119,8,256ZM256,440V72a184,184,0,0,1,0,368Z"
				transform="translate(-8 -8)" />
		</svg>
	</button>
</template>

<style scoped>
.dark-mode-toggle {
  position: absolute;
  z-index: 100;
  top: 1em;
  right: 1em;
  color: black;
  border: 2px solid currentColor;
  padding: 4px;
  background: transparent;
  cursor: pointer;
  border-radius: 5px;
  width: 30px;
  height: 30px;
}

.light-mode-toggle {
  position: absolute;
  z-index: 100;
  top: 1em;
  right: 1em;
  color: white;
  border: 2px solid currentColor;
  padding: 4px;
  background: transparent;
  cursor: pointer;
  border-radius: 5px;
  width: 30px;
  height: 30px;
}
</style>
