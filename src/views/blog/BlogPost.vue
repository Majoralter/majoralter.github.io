<template>
    <main class="post-wrapper">
        <article class="post">
            <h1>{{ post.title }}</h1>
            <div @mounted="addAnchorsToHeadings" class="post-content" v-html="processedContent"></div>
        </article>
        <div class="table-of-contents-container">
            <button @click="toggleTOC">
                Table of contents <i class="pi" :class="{ 'pi-chevron-up': showTOC, 'pi-chevron-down': !showTOC }"></i>
            </button>
            <TableOfContents v-if="post && showTOC" :headings="post.headings" />
        </div>

    </main>
</template>

<script lang="ts" setup>
import { usePostsStore } from '@/store/postsStore';
import { useRoute } from 'vue-router'
import { computed, onMounted, ref, nextTick } from 'vue'
import { processMdx } from '@/utils/extend';
import TableOfContents from '@/components/blog/TableOfContents.vue';

const processedContent = ref(''),
    showTOC = ref(true)

const route = useRoute()
const postsStore = usePostsStore()

const { posts, fetchPosts } = postsStore

const post = computed(() =>
    posts.find((p) => p.slug === route.params.slug) || { headings: [], title: '', date: '' }
)

const addAnchorsToHeadings = () => {
    const headings = document.querySelectorAll(".post-content h1, .post-content h2, .post-content h3");
    // console.log(headings)
    headings.forEach((heading) => {
        const text = heading.textContent || ""
        heading.id = text
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w\-]/g, "");
    })
}

const toggleTOC = () => {
    showTOC.value = !showTOC.value
}

onMounted(async () => {
    if (!posts.length) fetchPosts()
    else {
        if (post && 'content' in post.value && typeof post.value.content === 'string') {
            processedContent.value = await processMdx(post.value.content)
            console.log(post.value)

            nextTick(() => {
                addAnchorsToHeadings()
            })
        }
    }
})

</script>

<style lang="scss">
.post-wrapper {
    @include flex-layout(flex-start, flex-start, row, wrap, 1em);
    width: calc(100dvw - ($page-padding--left / 2) - ($page-padding--right / 2));
    max-width: 1200px;
    margin-top: 30px;

    .post {
        flex: 3;
        max-width: 100%
    }

    .table-of-contents-container {
        @include flex-layout(flex-start, flex-start, column, nowrap, 1em);
        flex: 1;
        border: solid var(--border-size-1) #aaa;
        max-width: 100%;

        button {
            width: 100%;
            padding: var(--size-2);
            border: none;
            outline: solid var(--border-size-1) #aaa;
            background: transparent;
            cursor: pointer;
            font-size: 16px;
            display: flex;
            align-items: center;
            gap: 3px;
        }
    }
}

@media (max-width: 925px) {
    .post-wrapper {
        flex-wrap: wrap-reverse;
    }
}
</style>