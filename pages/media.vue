<script lang="ts" setup>
const { data: media } = await useAsyncData("media", () => {
  return queryCollection("media").all();
});
useHead({
  title: 'Media | Jenrola Jackson'
})
</script>

<template>
  <div class="w-full flex flex-col items-start gap-5">
    <h2 class="text-2xl text-white">
      <span class="text-gray-500">
        A log of books, shows & films as I read/watch them.</span
      >
      Don't take ratings personal.
    </h2>
    <div class="w-full grid gap-3 grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1">
      <div
        v-for="m in media"
        :key="m.title"
        class="group flex gap-4 items-end border border-[#1a1a1a] bg-gradient-to-br from-[#111] via-[#111] to-[#1e1e1e] p-4 rounded-lg cursor-alias relative"
      >
        <NuxtImg
          :src="m.coverUrl"
          :alt="`Cover image for ${m.title}`"
          class="rounded-sm w-1/2 transition-transform duration-200 ease-initial object-contain group-hover:-rotate-2 group-hover:scale-[1.01]"
          loading="lazy"
          format="webp"
        />
        <div class="flex flex-col items-start gap-2">
          <span
            class="inline-block absolute top-4 right-4 text-sm leading-4 text-blue-500 self-start text-center bg-gradient-to-b from-[#111] to-[#1e1e1e] border border-[#1f1f1f] p-1 rounded-sm"
            >{{ m.type }}</span
          >
          <StarRating :value="m.rating" />  
          <h2 class="capitalize text-lg leading-5 text-white">{{ m.title }}</h2>
          <p class="text-gray-400 text-base capitalize">{{ m.author }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
