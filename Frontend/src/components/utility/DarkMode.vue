<script setup>
import { useDark, useToggle } from '@vueuse/core';

// Use VueUse's dark mode composables
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <button 
    @click="toggleDark()" 
    :class="[!isDark ? 'dark-mode-toggle' : 'light-mode-toggle']" 
    class="floating-dark-toggle"
  >
    <svg width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496">
      <path fill="currentColor"
        d="M8,256C8,393,119,504,256,504S504,393,504,256,393,8,256,8,8,119,8,256ZM256,440V72a184,184,0,0,1,0,368Z"
        transform="translate(-8 -8)" />
    </svg>
  </button>
</template>

<style scoped>
/* Base styles for the toggle button */
.floating-dark-toggle {
  position: fixed;
  bottom: 2rem; /* Distance from the bottom */
  right: 2rem; /* Distance from the right */
  z-index: 100; /* Ensure it appears above other elements */
  padding: 4px;
  cursor: pointer;
  border-radius: 50%; /* Makes the button circular */
  width: 50px; /* Circle size */
  height: 50px; /* Circle size */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  border: 2px solid currentColor; /* Border color matches the text */
  background: transparent; /* Transparent background */
}

/* Dark mode styles */
.dark-mode-toggle {
  color: black;
}

/* Light mode styles */
.light-mode-toggle {
  color: white;
  background: black; /* Optional: Add a black background in light mode */
}

/* Hover effect */
.floating-dark-toggle:hover {
  transform: scale(1.1); /* Enlarge slightly on hover */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .floating-dark-toggle {
    width: 40px; /* Smaller size on small screens */
    height: 40px;
    bottom: 1.5rem; /* Adjust spacing */
    right: 1.5rem;
  }
}
</style>