<template>
    <div class="list-item-long">
        <router-link :to="`/blog/${post?.slug}`">
            {{ post?.title }}

            <time datetime="post?.date.toISOString()">
                {{ post?.date.toLocaleDateString("en-GB") }}
            </time>
        </router-link>

        <p>{{ post?.desc }}</p>
        <div class="tags">
            <span class="tag" v-for="tag in post?.tags">
                {{ tag }}
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

type Post = {
    slug: string
    date: Date
    title: string
    tags: Array<string>
    desc: string
}

const props = defineProps({
    post: {
        type: Object as PropType<Post>
    }
})
</script>

<style lang="scss">
.list-item-long {
    width: 100%;
    @include flex-layout(flex-start, flex-start, column, nowrap, .25em);
    border-top: dashed var(--border-size-1) #aaa;
    padding: var(--size-2);

    a {
        width: 100%;
        @include flex-layout(space-between, center, row, nowrap, 1em);
        font-weight: bold;
        font-size: var(--font-size-2);

        time {
            font-size: 14px;
            font-weight: lighter;
        }
    }

    p {
        font-size: 14px;
    }

    .tags {
        @include flex-layout(center, center, row, wrap, .5em);

        .tag {
            padding: var(--size-1) var(--size-2);
            border-radius: var(--radius-round);
            font-size: 14px;
        }
    }
}
</style>