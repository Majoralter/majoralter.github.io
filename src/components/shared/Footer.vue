<template>
    <footer>
        <p>
            &copy; {{ new Date().getFullYear() }} <b>Jenrola Jackson</b> | All Rights Reserved.
        </p>
        <p>
            Vue & Github pages. Source code: <a style="text-decoration: underline;"
                href="https://github.com/Majoralter/majoralter.github.io"
                target="_blank">gh/Majoralter/majoralter.github.io</a>
        </p>
        <p>The design of this site is inspired, in parts, by <a href="https://degreat.co.uk/">degreat</a> & <a
                href="https://trulyao.dev/">Ayodeji</a>
        </p>
    </footer>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
footer {
    @include flex-layout(center, center, column, nowrap, .5em);
    width: calc(100dvw - ($page-padding--left / 2) - ($page-padding--right / 2));
    margin-inline: auto;
    max-width: 1024px;
    padding-block: var(--size-4);
    text-align: center;
}
</style>