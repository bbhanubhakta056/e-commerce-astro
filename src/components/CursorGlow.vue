<template>
  <div
    ref="glow"
    class="fixed top-0 left-0 w-64 h-64
    rounded-full pointer-events-none
    bg-white/10 blur-3xl z-50"
  ></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

const glow = ref(null);

onMounted(() => {
  window.addEventListener("mousemove", (e) => {
    gsap.to(glow.value, {
      x: e.clientX - 120,
      y: e.clientY - 120,
      duration: 0.6,
      ease: "power3.out"
    });
  });
});
</script>