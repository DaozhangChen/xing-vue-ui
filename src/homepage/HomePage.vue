<template>
  <ShareHeader />
<main>
  <video src="../assets/background.mp4" class="backgroundVideo" autoplay="autoplay" loop="loop" muted="muted" />
</main>
</template>

<script setup lang="ts">

import ShareHeader from "./share/ShareHeader.vue";
</script>

<style lang="scss" scoped>
.backgroundVideo{
  object-fit: fill;
  width: 100%;
  height: 40vh;
  filter:hue-rotate(270deg);
}
</style>