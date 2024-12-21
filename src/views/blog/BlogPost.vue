<template>
    <main class="post-wrapper">
        <article class="post">
            <div class="post-details">
                <h1 class="post-title">{{ post.title }}</h1>
                <span class="post-date">
                    Published:
                    <b>
                    {{ new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}
                    </b>
                </span>
            </div>
            <div class="post-content" v-html="processedContent"></div>
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

const addLanguageNameToCodeBlocks = () => {
    document.querySelectorAll('pre code').forEach((codeBlock) => {
        const className = codeBlock.className || ''; // Get the class of the code block
        const languageMatch = className.match(/language-(\w+)/); // Extract the language
        if (languageMatch) {
            const language = languageMatch[1]; // The language name
            const languageLabel = document.createElement('span'); // Create a new div
            languageLabel.className = 'code-language'; // Add a class for styling
            languageLabel.textContent = language; // Set the text to the language name
            codeBlock?.parentNode?.insertBefore(languageLabel, codeBlock); // Append after <code>
        }
    });

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
                addLanguageNameToCodeBlocks()
            })
        }
    }
})

</script>

<style lang="scss">
.post-wrapper {
    @include flex-layout(flex-start, flex-start, row, wrap, 1em);
    width: calc(100dvw - ($page-padding--left / 2) - ($page-padding--right / 2));
    max-width: 1024px;
    margin-block: 30px;

    .post {
        flex: 3;
        max-width: 100%;
        @include flex-layout(flex-start, flex-start, column, nowrap, 2em);

        .post-details {
            @include flex-layout(flex-start, flex-start, column, nowrap, .25em);

            .post-title {
                font-size: var(--font-size-5)
            }

            .post-date {
                font-size: 14px;
            }
        }

        .post-content {
            @include flex-layout(flex-start, flex-start, column, nowrap, 1em);
            width: 100%;

            ul {
                li {
                    margin-top: .5em;
                    list-style-type: disc;
                }
            }

            pre {
                width: 100%;

                .code-language {
                    padding: var(--size-1) var(--size-2);
                    border-radius: var(--radius-2) var(--radius-2) 0 0;
                }
            }
        }
    }

    .table-of-contents-container {
        @include flex-layout(flex-start, flex-start, column, nowrap, .5em);
        flex: 1;
        max-width: 100%;
        position: sticky;
        top: 20px;

        button {
            width: 100%;
            padding: var(--size-2);
            border: none;
            outline: solid var(--border-size-1) #aaa;
            background: transparent;
            cursor: pointer;
            font-size: 16px;
            @include flex-layout(space-between, center, row, nowrap, 0);
            border-radius: var(--radius-2);
        }
    }
}

@media (max-width: 925px) {
    .post-wrapper {
        flex-wrap: wrap-reverse;

        .table-of-contents-container {
            position: static;
        }
    }
}
</style>