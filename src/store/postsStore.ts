import { defineStore } from "pinia";
import { ref } from "vue";
import { Post, getPosts } from "@/composables/useGetPosts";

export const usePostsStore = defineStore("posts", () => {
    const posts = ref<Post[]>(getPosts());

    const fetchPosts = () => {  
        posts.value = getPosts();
    }

    return { posts, fetchPosts }
})