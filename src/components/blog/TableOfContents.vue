<template>
    <nav class="toc">
        <ul>
            <li v-for="heading in headings" :key="heading.text" :class="'toc-depth-' + heading.depth">
                <a :href="'#' + generateAnchor(heading.text)">{{ heading.text }}</a>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

const props = defineProps({
    headings: {
        type: Array as PropType<{ depth: number, text: string }[]>,
        required: true
    }
})

const generateAnchor = (text: string): string => {
    return text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]/g, "");
}
</script>

<style lang="scss">
.toc {
    width: 100%;
    padding: var(--size-2);

    ul {
        @include flex-layout(flex-start, flex-start, column, nowrap, 0);
        padding-left: 0;

        li {
            margin: 0.25em 0;

            a {
                font-size: 14px;
            }

            &.toc-depth-1 {
                font-weight: bold;
            }

             &.toc-depth-2 {
                margin-left: 1em;
            }

             &.toc-depth-3 {
                margin-left: 2em;
            }
        }
    }
}
</style>