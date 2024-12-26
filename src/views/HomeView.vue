<template>
    <main class="home__layout">
        <div class="home__layout--hero-section">
            <section class="hero-intro">
                <img :src="require(`@/assets/home/hero-image.jpg`)" alt="hero image">
                <div class="content">
                    <h1>Jenrola Jackson</h1>

                    <div class="contact-links">
                        <a target="_blank" href="https://x.com/MajorAlter"><i class="pi pi-twitter"></i></a>
                        <a target="_blank" href="https://github.com/Majoralter?tab=repositories"><i
                                class="pi pi-github"></i></a>
                    </div>

                    <p class="bio">
                        I'm a frontend developer and an intending software engineer (yes, there's a difference).
                        When I'm not working, you'll find me cheering Liverpool, oogling at
                        beautifully designed components, or reading slower than a turtle. 
                        I also love playing chess & Apex legends. I intend to write 
                        about stuff I'm learning or that I find interesting enough on this site.
                    </p>
                </div>
            </section>
        </div>
        <div class="home__layout--blog-section">
            <h2>
                Blog Posts
            </h2>
            <p v-if="posts.length < 1">No posts yet...</p>
            <div class="post-list" v-else>
                <MinimalPostListItem v-for="post in posts"
                    :post="{ slug: post.slug, date: new Date(post.date), title: post.title }" />
                <router-link class="ext" to="/blog">
                    View all posts
                </router-link>
            </div>

        </div>
    </main>
</template>

<script lang="ts" setup>
import { getPosts, Post } from '@/composables/useGetPosts'
import { ref, onMounted } from 'vue'
import MinimalPostListItem from '@/components/shared/MinimalPostListItem.vue'

const posts = ref<Post[]>([])

onMounted(() => {
    posts.value = getPosts()
})

</script>

<style lang="scss">
.home__layout {
    @include flex-layout(center, center, column, nowrap, 3em);

    &--hero-section {
        width: 100%;

        .hero-intro {
            @include flex-layout(flex-start, flex-start, column, wrap, 1.5em);
            width: 100%;

            img {
                height: 100px;
                width: auto;
                border-radius: var(--radius-2);
            }

            .content {
                @include flex-layout(flex-start, flex-start, column, nowrap, .5em);
                width: 60%;

                h1 {
                    font-size: var(--font-size-6);
                }

                p {
                    font-size: var(--font-size-3);
                }

                .contact-links {
                    @include flex-layout(center, center, row, nowrap, 1em);

                    a {
                        i {
                            font-size: var(--font-size-2);
                        }
                    }
                }
            }
        }
    }

    &--blog-section {
        width: 100%;
        @include flex-layout(flex-start, flex-start, column, nowrap, 1em);

        h2 {
            font-size: var(--font-size-5);
        }

        .post-list {
            width: 100%;
            max-width: 650px;

            .ext {
                display: block;
                text-decoration: underline;
                margin-top: 20px;
                width: fit-content;
                font-size: 16px;
            }
        }
    }
}

@media (max-width: 700px) {
    .home__layout {
        .hero-intro {
            .content {
                width: 100%;
                p {
                    &.bio {
                        br {
                            display: none;
                        }
                    }
                }
            }
        }
    }
}
</style>
