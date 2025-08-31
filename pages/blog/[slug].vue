<script lang="ts" setup>
import type { SetupContext } from "vue";
import type { HeadingProps } from "~/types/heading";
import Heading from "~/components/content/Heading.vue";
import Paragraph from "~/components/content/Paragraph.vue";
import Emphasis from "~/components/content/Emphasis.vue";
import ExternalLink from "~/components/content/ExternalLink.vue";
import Image from "~/components/content/Image.vue";
import BlockQuote from "~/components/content/BlockQuote.vue";
import UlList from "~/components/content/UlList.vue";
import LiList from "~/components/content/LiList.vue";
import Pre from "~/components/content/Pre.vue";

const slug = useRoute().params.slug;
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection("blog").path(`/blog/${slug}`).first();
});

const renderHeading = (level: number) => {
  return (props: HeadingProps, ctx: SetupContext) =>
    h(Heading, { ...props, level }, ctx.slots);
};

const components = {
  h1: renderHeading(1),
  h2: renderHeading(2),
  h3: renderHeading(3),
  h4: renderHeading(4),
  h5: renderHeading(5),
  h6: renderHeading(6),
  p: Paragraph,
  Emphasis,
  a: ExternalLink,
  img: Image,
  blockquote: BlockQuote,
  ul: UlList,
  li: LiList,
  pre: Pre,
};

const title = computed(
  () => post.value?.title || "Blog post from Jenrola Jackson"
);

useHead({
  title,
});

defineOgImageComponent("OGImage", {
  title: post.value?.title,
  date: useDateFormat(post.value?.pubDate, "MMM DD, YYYY"),
});
</script>

<template>
  <div
    class="flex flex-col justify-between w-full md:w-[60%] lg:w-[50%] items-start gap-2 mx-auto"
  >
    <div class="flex flex-col items-start gap-0.5 mb-8">
      <span class="text-2xl font-serif text-cyan-50">
        {{ post?.title }}
      </span>
      <span class="text-gray-500 text-sm">
        {{ useDateFormat(post?.pubDate, "MMM DD, YYYY") }}
      </span>
    </div>
    <ContentRenderer
      v-if="post"
      :value="post"
      :components="components"
      tag="article"
      class="max-w-full w-full"
    />
    <BlogFooter />
  </div>
</template>
