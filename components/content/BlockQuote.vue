<template>
  <blockquote v-bind="$attrs" class="font-serif text-center my-10">
    <slot />
  </blockquote>
</template>


<style scoped lang="scss">
:slotted(p) {
        font-size: 2rem;
        color: #b3c1c2;
        line-height: 1.2;
        font-style: italic;

        &::before {
            content: "❝";
            margin-right: .2em;
            color: #222;
            font-size: 3rem;
        }
    }
</style>