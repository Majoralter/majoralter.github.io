<script lang="ts" setup>
import { MoveHorizontal } from "lucide-vue-next";

const props = defineProps<{
  imgSrcTop: string;
  imgSrcBottom: string;
}>();

const container = templateRef("container"),
  topImage = templateRef("topImage"),
  sliderLine = templateRef("sliderLine"),
  sliderHandle = templateRef("sliderHandle");

const setClip = async (x: number) => {
  await nextTick();
  const rect = container.value.getBoundingClientRect(),
    relativeX = Math.max(0, Math.min(x - rect.left, rect.width)),
    percentX = relativeX / rect.width;

  const percent = percentX * 100;
  topImage.value.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
  sliderLine.value.style.left = `${percent}%`;
  sliderHandle.value.style.left = `${percent}%`;
};

const startDrag = (e: any) => {
  setClip(e.clientX);
  window.addEventListener("pointermove", onDrag);
  window.addEventListener("pointerup", stopDrag);
};

const onDrag = (e: any) => {
  setClip(e.clientX);
};

const stopDrag = () => {
  window.removeEventListener("pointermove", onDrag);
  window.removeEventListener("pointerup", stopDrag);
};

onMounted(async () => {
  await nextTick();
  container.value.addEventListener("pointerdown", startDrag);
});
</script>

<template>
  <div
    ref="container"
    class="relative w-full h-[400px] cursor-ew-resize touch-none rounded-lg my-8"
  >
    <img
      class="absolute top-0 left-0 w-full h-full object-cover select-none pointer-events-none rounded-lg"
      :src="`/images/content/${imgSrcBottom}`"
      alt="Before"
    />

    <img
      ref="topImage"
      class="absolute top-0 left-0 w-full h-full backface-hidden object-cover select-none rounded-lg pointer-events-none img-top"
      :src="`/images/content/${imgSrcTop}`"
      alt="After"
    />

    <div
      ref="sliderLine"
      class="absolute top-0 bottom-0 w-0.5 bg-white/40 left-1/2 -translate-x-0.5 pointer-events-none"
    ></div>

    <div
      ref="sliderHandle"
      class="absolute flex items-center justify-center top-1/2 left-1/2 w-8 h-8 backdrop-blur-2xl border rounded-lg -translate-1/2 z-10 pointer-events-none"
    >
      <MoveHorizontal :size="18" />
    </div>
    <Annotation text="Drag to compare" />
  </div>
</template>

<style scoped>
.img-top {
  clip-path: inset(0 50% 0 0);
}
</style>
