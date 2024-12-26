<template>
    <div class="list-container">
        <h2>
            Some of my favorite shows and movies.
            <a target="_blank" href="https://tellonym.me/user.40396356">Recommend a movie or show.</a>
        </h2>

        <div class="films">
            <div v-for="film in filmsList" :key="film.title" class="film">
                <h3>
                    {{ film.title }}
                </h3>
                <p>
                    {{ film.desc }}
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { films, FilmObject } from '@/data/films'
import { ref, onMounted } from 'vue'

const filmsList = ref<FilmObject[]>([])

onMounted(() => {
    filmsList.value = films
})
</script>

<style lang="scss">
.list-container {
    .films {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 16px;

        .film {
            @include flex-layout(flex-start, flex-start, column, nowrap, .25em);

            h3 {
                font-size: var(--font-size-3);
            }

            p {
                font-size: 18px;
            }
        }
    }
}
</style>