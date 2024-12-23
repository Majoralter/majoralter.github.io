<template>
    <main class="blog-main">
        <h1>{{ posts?.length }} {{ posts?.length > 1 ? 'posts' : 'post' }} published</h1>
        <p>
            All opinions are my own. If you think anything written <br> is wrong or in poor taste, please let me know.
        </p>

        <div class="post-list">
            <PostListItem v-for="post in posts"
                :post="{ slug: post.slug, date: new Date(post.date), title: post.title, tags: post.tags, desc: post.desc }" />
        </div>
    </main>
</template>

<script lang="ts" setup>
import { getPosts, Post } from '@/composables/useGetPosts'
import { ref, onMounted } from 'vue'
import PostListItem from '@/components/shared/PostListItem.vue'

const posts = ref<Post[]>([])

onMounted(() => {
    posts.value = getPosts()
})
</script>

<style lang="scss">
.blog-main {
    @include flex-layout(flex-start, flex-start, column, nowrap, .25em);

    h1 {
        font-size: 24px;
    }

    .post-list {
        width: 100%;
        margin-block: 20px;
        @include flex-layout(flex-start, flex-start, column, nowrap, 1em);
    }
}
</style>