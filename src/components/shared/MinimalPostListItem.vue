<template>
    <div class="list-item">
        <router-link :to="`/blog/${post?.slug}`">
            {{ post?.title }}

            <time datetime="post?.date.toISOString()">
                {{ post?.date.toLocaleDateString("en-GB") }}
            </time>
        </router-link>
    </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

type Post = {
    slug: string
    date: Date
    title: string
}

const props = defineProps({
    post: {
        type: Object as PropType<Post>
    }
})
</script>

<style lang="scss">
.list-item {
    width: 100%;

    a {
        width: 100%;
        @include flex-layout(space-between, center, row, nowrap, 1em);
        padding: var(--size-1);
        font-weight: bold;
        font-size: 20px;

        time {
            font-size: 18px;
            font-weight: lighter;
        }
    }
}
</style>