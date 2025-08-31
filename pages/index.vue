<script setup lang="ts">
import { onMounted, nextTick, useTemplateRef, ref } from "vue";

const canvas = useTemplateRef("canvas");

const imagePaths = ref([
    "/images/folders.png",
    "/images/chess-knight.png",
    "/images/pad.png",
    "/images/gramophone.png",
    "/images/statue-head.png",
  ]),
  images = ref<HTMLImageElement[]>([]);

const tools = ref([
  { name: "Windows", as: "Operating system" },
  { name: "VScode", as: "IDE/Text editor" },
  { name: "Figma", as: "Design environment" },
  { name: "Arc", as: "Browser" },
  { name: "Nuxt", as: "Frontend development" },
  { name: "SCSS", as: "Styling" },
  { name: "Tailwindcss", as: "Styling" },
  { name: "GSAP", as: "Animations" },
  { name: "Animejs", as: "Animations" },
  { name: "Svelte", as: "Frontend development" },
  { name: "Github", as: "Version control" },
  { name: "Vercel", as: "Hosting" },
  // { name: "Supabase", as: "BaaS" },
  { name: "Coolors", as: "Color picker" },
  { name: "Photoshop", as: "Graphics design" },
]);

let currentIndex = ref(0),
  timer = ref<ReturnType<typeof setInterval> | null>(null);

// interface DrawDotGridParams {
//   ctx: CanvasRenderingContext2D;
//   canvas: HTMLCanvasElement;
//   img: HTMLImageElement;
//   cellSize?: number;
// }

const drawDotGrid = async (
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  img: HTMLImageElement,
  cellSize: number = 4
): Promise<void> => {
  await nextTick();
  const tempCanvas: HTMLCanvasElement = document.createElement("canvas"),
    tempCtx = tempCanvas.getContext("2d") as CanvasRenderingContext2D;

  tempCanvas.width = img?.width;
  tempCanvas.height = img?.height;
  tempCtx.drawImage(img, 0, 0);

  const imageData: ImageData = tempCtx.getImageData(
      0,
      0,
      img?.width,
      img?.height
    ),
    data: Uint8ClampedArray = imageData.data;

  canvas.width = img?.width;
  canvas.height = img?.height;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let y = 0; y < img.height; y += cellSize) {
    for (let x = 0; x < img.width; x += cellSize) {
      const i = (y * img.width + x) * 4;
      const r: number = data[i],
        g: number = data[i + 1],
        b: number = data[i + 2],
        a: number = data[i + 3];

      if (a === 0) continue;

      const brightness: number = 0.299 * r + 0.587 * g + 0.114 * b,
        radius: number = ((255 - brightness) / 255) * (cellSize / 2.2);

      if (radius > 0.5) {
        const cx: number = x + cellSize / 2,
          cy: number = y + cellSize / 2;

        ctx.beginPath();
        ctx.fillStyle = "#367055";
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
};

const transitionToNextImage = async () => {
  await nextTick();

  const img = images.value[currentIndex.value];
  if (!canvas.value) return;
  const ctx = canvas.value.getContext("2d");

  if (ctx) {
    let rect = canvas.value.getBoundingClientRect();

    const dpr = window.devicePixelRatio || 1;
    canvas.value.width = rect.width * dpr;
    canvas.value.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    drawDotGrid(ctx, canvas.value, img);
  }

  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const startTransition = async () => {
  await nextTick();

  transitionToNextImage();
  timer.value = setInterval(transitionToNextImage, 1500);
};

onMounted(async () => {
  await nextTick();

  let loaded = 0;

  imagePaths.value.forEach((src) => {
    const img = new Image();
    img.onload = () => {
      images.value.push(img);
      loaded++;
      if (loaded === imagePaths.value.length) {
        startTransition();
      }
    };
    img.src = src;
  });
});
</script>

<template>
  <div
    class="flex items-start justify-between gap-10 flex-wrap w-full relative"
  >
    <div
      class="flex flex-col justify-between w-full md:w-[60%] lg:w-[40%] items-start gap-4"
    >
      <h2 class="text-2xl text-white">
        I'm Jenrola, a 22 year old frontend developer.
        <span class="text-gray-400">
          Welcome to my website, where I intend to publish & write about the
          things I'm interested in or working on.
        </span>
      </h2>

      <canvas ref="canvas" class="bg-transparent"></canvas>
    </div>

    <div class="w-full md:w-[60%] lg:w-[30%] flex flex-col gap-10">
      <div class="w-full flex flex-col gap-2">
        <h2 class="text-lg text-white">About — 01</h2>
        <p class="text-sm text-gray-400">
          From Lagos, Nigeria. My primary focus is building pixel-perfect web
          experiences that users resonate with. Apart from web development, I
          engage myself in a host of hobbies, chess, reading [mostly fiction],
          learning new things through blogs & articles of other developers or
          designers, and gaming [my current fixation is Blasphemous II]. I also
          really enjoy consuming all forms of macabre media be it art, movies,
          shows e.t.c.
          <span class="text-white">
            If we share similar interests, feel free to connect with me.
          </span>
        </p>
      </div>

      <div class="w-full flex flex-col gap-2">
        <h2 class="text-lg text-white">Tools — 02</h2>
        <ul>
          <li v-for="tool in tools" class="text-sm text-white" :key="tool.name">
            {{ tool.name }} — <span class="text-gray-400">{{ tool.as }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
