<script setup>
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

  function isOverlapping(top, left, existingPositions, buffer = 10) {
    return existingPositions.some(pos => {
      const dx = pos.left - left;
      const dy = pos.top - top;
      return Math.sqrt(dx * dx + dy * dy) < buffer;
    });
  }

  onMounted(() => {
    const existingPositions = [];
    icons.value.forEach(icon => {
      let randomTop, randomLeft;

      // Retry generating positions until no overlap is found
      do {
        randomTop = Math.random() * 100; // Adjust to stay within viewport
        randomLeft = Math.random() * 100;
      } while (isOverlapping(randomTop, randomLeft, existingPositions, 10)); // Adjust buffer for spacing

      // Store the non-overlapping position
      existingPositions.push({ top: randomTop, left: randomLeft });

      // Assign styles with the calculated position and random duration
      const randomDuration = Math.random() * 5 + 9; // Between 9s and 14s
      icon.style = {
        top: `${randomTop}%`,
        left: `${randomLeft}%`,
        animationDuration: `${randomDuration}s`,
      };
    });
  });
</script>

<template>
  <section class="bg-l-bg min-h-screen py-36 mb-4 dark:bg-d-bg flex items-center">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center" style="z-index: 1;">
      <h1 class="dark:text-white text-fission-1 text-4xl font-extrabold sm:text-6xl md:text-[6rem]">
        Trivia Time
      </h1>

    </div>
    <div class="icons">
      <img v-for="(icon, index) in icons" :key="index" :src="icon.src" :style="icon.style" />
    </div>
  </section>
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

  .icons img {
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
</style>