<script lang="ts" setup>
import { useTemplateRef, onMounted } from "vue";

const dockItems = [
  { name: "Home", icon: "home", to: "/" },
  { name: "Blog", icon: "chatbubble-ellipses", to: "/blog" },
  { name: "Media", icon: "file-tray-full", to: "/media" },
];

const socials = [
  { name: "Twitter", icon: "logo-twitter", href: "https://x.com/MajorAlter" },
  {
    name: "Github",
    icon: "logo-github",
    href: "https://github.com/Majoralter",
  },
  {
    name: "Email",
    icon: "ios-mail",
    href: "mailto:jenrolajackson210@gmail.com",
  },
];

const dockContainer = useTemplateRef<HTMLDivElement>("dockContainer");
const items = useTemplateRef<HTMLDivElement[]>("items");

const defaultScale = 1;
const hoverScale = 1.75;
const siblingScale = 1.5;
const defaultMargin = "5px";
const scaledMargin = "20px";

let animationFrame: number | null = null;

const applyDockStyles = (hoveredIndex: number | null) => {
  if (animationFrame) cancelAnimationFrame(animationFrame);

  animationFrame = requestAnimationFrame(() => {
    items.value?.forEach((el, index) => {
      let scale = defaultScale;
      let margin = defaultMargin;

      if (hoveredIndex === index) {
        scale = hoverScale;
        margin = scaledMargin;
      } else if (
        hoveredIndex !== null &&
        Math.abs(index - hoveredIndex) === 1
      ) {
        scale = siblingScale;
        margin = scaledMargin;
      }

      el.style.transform = `scale(${scale})`;
      el.style.margin = `0 ${margin}`;
    });
  });
};

onMounted(() => {
  items.value?.forEach((el, index) => {
    el.addEventListener("mousemove", () => {
      applyDockStyles(index);
    });
  });

  dockContainer.value?.addEventListener("mouseleave", () => {
    applyDockStyles(null);
  });
});
</script>

<template>
  <footer
    class="fixed w-max bottom-8 left-1/2 -translate-x-1/2 mx-auto flex justify-center border border-[#202020] rounded-full origin-center bg-[#121212] cursor-pointer"
    ref="dockContainer"
  >
    <div class="flex items-center justify-around px-1 py-2">
      <div
        v-for="item in dockItems"
        :key="item.name"
        :data-tooltip="item.name"
        ref="items"
        class="dock-item active:scale-[0.75] transition active:duration-700 active:ease-out"
      >
        <NuxtLink
          :to="item.to"
          class="leading-0 w-full h-full flex items-center justify-center"
        >
          <Icon :name="`ion:${item.icon}`" size="24" />
        </NuxtLink>
      </div>

      <hr class="h-6 w-0.5 bg-[#202020] shrink-0 border-0 vt-rule" />

      <div
        v-for="item in socials"
        :key="item.name"
        :data-tooltip="item.name"
        ref="items"
        class="dock-item"
      >
        <a
          :href="item.href"
          target="_blank"
          class="leading-0 w-full h-full flex items-center justify-center"
        >
          <Icon :name="`ion:${item.icon}`" size="24" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.dock-item {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 1px solid #222;
  background: linear-gradient(to bottom left, #202020, #161616, #121212);
  margin: 0 5px;
  transition: 700ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, margin;
  transform-origin: bottom;
  cursor: pointer;
  touch-action: none;
  color: white;

  &::before {
    content: attr(data-tooltip);
    position: absolute;
    top: -28px;
    z-index: -1;
    padding: 5px 8px 1px;
    white-space: nowrap;
    font-size: 8px;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.04);
    background-color: #202020;
    opacity: 0;
    pointer-events: none;
    transition:
      transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
      opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    transform: translateY(100%);
    color: white;
  }

  &:hover::before {
    opacity: 1;
    transform: translateY(0);
  }
}

.vt-rule {
  mask-image: linear-gradient(
    0deg,
    transparent,
    white 16px,
    white calc(100% - 16px),
    transparent
  );
}
</style>
