<script setup>
import { useTemplateRef, onMounted, nextTick } from "vue";

const canvasRef = useTemplateRef("canvas"),
  containerRef = useTemplateRef("container");

onMounted(async () => {
  await nextTick();

  const canvas = canvasRef.value,
    context = canvas.getContext("2d"),
    rect = canvas.getBoundingClientRect();

  const accountForDPI = () => {
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    context.scale(dpr, dpr);

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
  };

  accountForDPI();

  const drawGrid = (lw, cw, ch, color) => {
    context.strokeStyle = color;
    context.lineWidth = lw;

    let width = canvas.width,
      height = canvas.height;

    for (let x = 0; x <= width; x += cw) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, height);
      context.stroke();
    }
    for (let y = 0; y <= height; y += ch) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(width, y);
      context.stroke();
    }
  };

  drawGrid(0.4, 40, 40, "#222");

  window.addEventListener("resize", () => {
    requestAnimationFrame(() => {
      canvas.style.width = `100%`;
      canvas.style.height = `100%`;
      accountForDPI();
      drawGrid(0.4, 40, 40, "#222");
    });
  });
});
</script>

<template>
  <div
    ref="container"
    class="-z-1 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-screen min-h-screen flex items-center justify-center origin-center [mask-image:radial-gradient(circle_at_center,white_40%,transparent_100%)] [--tw-mask-image:radial-gradient(circle_at_center,white_40%,transparent_100%)]"
  >
    <canvas ref="canvas" style="width: 100%; height: 100%"> </canvas>
  </div>
</template>
