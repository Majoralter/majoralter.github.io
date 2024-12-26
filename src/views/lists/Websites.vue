<template>
    <div class="list-container">
        <h2>Well designed, helpful or niche.</h2>

        <div class="sites">
            <div class="site" v-for="site in sites" :key="site.title">
                <a :href="site.url" target="_blank">
                    {{ site.title }}
                    <i class="pi pi-external-link"></i>
                </a>
                <p>
                    {{ site.desc }}
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { websites } from '@/data/websites'
import { ref, onMounted } from 'vue'

const sites = ref<{ title: string; url: string; desc: string; }[]>([]);


onMounted(() => {
    sites.value = websites
})
</script>

<style lang="scss">
.list-container {
    .sites {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 16px;

        .site {
            @include flex-layout(flex-start, flex-start, column, nowrap, .25em);

            a {
                display: flex;
                align-items: center;
                gap: .25em;
                font-weight: 500;
                font-size: 20px;

                i {
                    font-size: 12px;
                }
            }

            p {
                font-size: 16px;
            }
        }
    }
}
</style>