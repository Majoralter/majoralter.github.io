<script setup lang="ts">
const { data: posts } = await useAsyncData("blog", () =>
  queryCollection("blog").order("pubDate", "DESC").all()
);

useHead({
  title: 'Blog | Jenrola Jackson'
})
</script>

<template>
    <div class="flex flex-col w-full md:w-[60%] lg:w-[40%] items-start gap-2 mx-auto">
      <h1 class="text-2xl text-white">
        <span class="text-gray-500">
          Notes on stuff I'm learning, my general thoughts or books
          reviews.</span
        >
        No fixed schedule, so keep expectations low.
      </h1>

      <div class="w-full flex flex-col gap-2 mt-4">
        <ul class="w-full flex flex-col gap-2">
          <li v-for="post in posts" :key="post.id" class="w-full">
            <NuxtLink
              :to="post.path"
              class="w-full flex items-center justify-between p-2 hover:bg-[#222] rounded-lg"
            >
              <span class="truncate text-white">{{ post.title }}</span>

              <hr class="flex-1 border-dashed border-gray-600 mx-4" />

              <span class="text-gray-400">
                {{ useDateFormat(post.pubDate, "MMM DD, YYYY") }}
              </span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
</template>
