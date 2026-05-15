<template>
  <div ref="el">
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

const el = ref(null);

onMounted(() => {
  gsap.from(el.value, {
    opacity: 0,
    y: 80,
    duration: 1.2,
    ease: "power3.out"
  });
});
</script>