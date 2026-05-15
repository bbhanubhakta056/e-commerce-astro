<template>
  <slot />
</template>

<script setup>
import { onMounted } from "vue";
import Lenis from 'lenis';

onMounted(() => {
  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    smoothTouch: false
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
</script>