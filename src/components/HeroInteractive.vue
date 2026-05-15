<template>
    <section class="relative min-h-screen overflow-hidden flex items-center" @mousemove="handleMouseMove">

        <!-- Background -->
        <div class="absolute inset-0 scale-110 transition-transform duration-300" :style="bgStyle">
            <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop"
                class="w-full h-full object-cover" />

            <div class="absolute inset-0 bg-black/60"></div>
        </div>

        <!-- Floating Blur -->
        <div class="absolute w-96 h-96 bg-white/10 blur-3xl rounded-full" :style="orbStyle"></div>

        <!-- Content -->
        <div class="relative z-10 max-w-7xl mx-auto px-6" :style="contentStyle">

            <p class="uppercase tracking-[0.4em] text-zinc-300 mb-6">
                Luxury Interior Studio
            </p>

            <h1 class="text-7xl md:text-9xl font-light leading-none">
                Timeless
                <br />
                Spaces
            </h1>

            <p class="mt-8 text-zinc-300 text-lg max-w-xl">
                Designing immersive living experiences with modern elegance.
            </p>
            <div class="mt-10 flex gap-4">

            <MagneticButton>
                View Projects
            </MagneticButton>

            <MagneticButton>
                Contact Studio
            </MagneticButton>

        </div>

        </div>

        

    </section>
</template>

<script setup>
import { ref, computed } from "vue";
import MagneticButton from "./MagneticButton.vue";

const mouseX = ref(0);
const mouseY = ref(0);

const handleMouseMove = (e) => {
    mouseX.value = (e.clientX / window.innerWidth - 0.5) * 20;
    mouseY.value = (e.clientY / window.innerHeight - 0.5) * 20;
};

const bgStyle = computed(() => ({
    transform: `translate(${mouseX.value * -0.5}px, ${mouseY.value * -0.5}px) scale(1.1)`
}));

const contentStyle = computed(() => ({
    transform: `translate(${mouseX.value * 0.5}px, ${mouseY.value * 0.5}px)`
}));

const orbStyle = computed(() => ({
    transform: `translate(${mouseX.value * 2}px, ${mouseY.value * 2}px)`,
    top: "20%",
    left: "70%"
}));
</script>