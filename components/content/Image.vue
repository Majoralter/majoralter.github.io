<script setup lang="ts">
import { createScope, animate, utils } from "animejs";
import { ref, nextTick, computed, watch } from "vue";

const scaled = ref(false);
const imgWrapperRef = ref<HTMLElement | null>(null);
const toContainerRef = ref<HTMLElement | null>(null);
const fromContainerRef = ref<HTMLElement | null>(null);

const props = defineProps<{
  src: string;
  alt: string;
  info?: string;
  scalable?: boolean;
}>();

const scaleImg = async () => {
  if (props.scalable) {
    scaled.value = !scaled.value;
    await nextTick();

    const destination = scaled.value
      ? toContainerRef.value
      : fromContainerRef.value;
    const source = imgWrapperRef.value;

    if (source && destination) {
      const rect = source.getBoundingClientRect();

      if (scaled.value) {
        if (fromContainerRef.value) {
          fromContainerRef.value.style.width =
            destination.style.width = `${rect.width}px`;
          fromContainerRef.value.style.height =
            destination.style.height = `${rect.height}px`;
        }
      }

      const fragment = document.createDocumentFragment();
      fragment.appendChild(source);
      destination.appendChild(fragment);

      createScope({
        mediaQueries: {
          isSmall: "(max-width: 560px)",
          isLarge: "(min-width: 851px)",
          reduceMotion: "(prefers-reduced-motion)",
        },
      }).add((self) => {
        const { isSmall, isLarge, reduceMotion } = self.matches;

        animate(source, {
          scale: !scaled.value ? 1 : isLarge ? 1.45 : 1,
          ease: "outElastic",
        });
      });
    }
  }
};

watch(scaled, () => {
  scaled.value
    ? (document.documentElement.style.overflowY = "hidden")
    : (document.documentElement.style.overflowY = "");
});
</script>

<template>
  <div class="mb-5">
    <div ref="fromContainerRef" class="relative">
      <div
        ref="imgWrapperRef"
        :class="
          !scalable
            ? 'cursor-auto'
            : scaled
              ? 'cursor-zoom-out'
              : 'cursor-zoom-in'
        "
        class="backface-hidden w-full"
        @click="scaleImg"
      >
        <NuxtImg
          :src="`/images/content/${src}`"
          :alt="alt"
          class="rounded-lg w-full object-contain"
          aspect
          placeholder
          loading="lazy"
          format="webp"
        />
      </div>
      <Annotation v-if="scalable && !scaled" text="Click image to scale" />
    </div>
    <p class="text-sm text-gray-500 mt-2" v-if="info" v-html="info" />
  </div>

  <Teleport to="body">
    <div
      v-if="scaled"
      class="fixed z-9999 py-32 inset-0 flex flex-col items-center justify-center gap-4 overflow-y-auto cursor-zoom-out"
    >
      <button
        @click="scaleImg"
        class="backdrop-blur-3xl bg-gray-900 border border-gray-700 absolute right-10 top-10 text-2xl py-1.5 flex items-center justify-center px-2.5 leading-none rounded-full z-999 cursor-pointer hover:scale-[1.1]"
      >
        ×
      </button>

      <div
        ref="toContainerRef"
        class="flex flex-col items-center justify-center z-999 rounded-lg p-2 relative"
      ></div>
      <div
        class="absolute inset-0 w-full h-full backdrop-blur-2xl"
        @click="scaleImg"
      ></div>
    </div>
  </Teleport>
</template>
