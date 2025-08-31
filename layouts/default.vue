<script setup>
import { useTemplateRef, onMounted, nextTick } from "vue";
import { animate } from "animejs";

const layout = useTemplateRef("layout");

const animateLayout = async () => {
  await nextTick();

  animate(layout.value, {
    y: {
      from: "2rem",
    },
    opacity: {
      from: 0,
    },
    ease: "inBack",
    duration: 500,
  });
};

onMounted(() => {
  requestAnimationFrame(() => {
    animateLayout();
  });
});
</script>

<template>
  <Canvas />

  <div class="p-4 pt-10 w-full min-h-screen flex flex-col gap-4">

    <main ref="layout" class="flex-1 pb-20 flex flex-col gap-4 max-sm:mt-5">
      <slot />
    </main>

    <Footer />
  </div>
</template>
