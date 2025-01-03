<template>
    <div class="list-container">
        <h2>
            Books that I am reading, plan to read, or have read.
            <a target="_blank" href="https://tellonym.me/user.40396356">Suggest a book</a>
        </h2>

        <div class="books">
            <div v-for="book in bookList" :key="book.title" class="book">
                <img :src="book.coverUrl" :alt="`Cover of ${book.title}`">
                <h3>
                    {{ book.title }}
                    <span>{{ book.status }}</span>
                </h3>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { books } from '@/data/books'
import { ref, onMounted } from 'vue'

const bookList = ref<{ title: string; status: string; coverUrl: string }[]>([])

onMounted(() => {
    bookList.value = books
})
</script>

<style lang="scss">
.list-container {
    .books {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 16px;

        .book {
            @include flex-layout(center, center, column, nowrap, .25em);

            img {
                height: 300px;
                width: auto;
                border-radius: var(--radius-2);
            }

            h3 {
                font-size: var(--font-size-3);
                font-weight: 500;
                display: flex;
                align-items: center;
                flex-direction: column;
                gap: .1em;
                text-align: center;

                span {
                    display: inline-block;
                    font-size: 14px;
                    color: #662E9B;
                }
            }
        }
    }
}

@media (max-width: 530px) {
    .list-container {
        .books {
            .book {
                img {
                    width: 75%;
                    height: auto;
                }
            }
        }
    }
}
</style>