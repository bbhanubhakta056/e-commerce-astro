<template>
  <button
    ref="button"
    class="px-8 py-4 rounded-full border border-white/20
    hover:bg-white hover:text-black transition"
    @mousemove="move"
    @mouseleave="reset"
  >
    <slot />
  </button>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";

const button = ref(null);

const move = (e) => {
  const rect = button.value.getBoundingClientRect();

  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  gsap.to(button.value, {
    x: x * 0.3,
    y: y * 0.3,
    duration: 0.3
  });
};

const reset = () => {
  gsap.to(button.value, {
    x: 0,
    y: 0,
    duration: 0.5
  });
};
</script>