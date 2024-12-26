<template>
    <h1>Lists</h1>
    <p>[Personal] curation of books, websites, resources e.t.c.</p>

    <ul class="list-items">
        <li v-for="item in listItems" :key="item.item">
            <router-link :to="item.path">
                {{ item.item }}
            </router-link>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const listItems = ref([
    {
        item: 'Websites',
        path: '/lists/websites'
    },
    {
        item: 'Books',
        path: '/lists/books'
    },
    {
        item: 'Films',
        path: '/lists/films'
    }
])
</script>

<style lang="scss" scoped>
h1 {
    font-size: var(--font-size-6);
}

p {
    font-size: 18px;
}

.list-items {
    margin-top: 20px;
    @include flex-layout(center, center, row, wrap, 1em);

    li {
        a {
            text-decoration: underline;
            font-size: 18px;
            &.router-link-active {
                border-radius: var(--radius-round);
                text-decoration: none;
            }
        }
    }
}
</style>