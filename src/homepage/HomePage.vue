<template>
  <ShareHeader />
<main>
  <video src="../assets/background.mp4" class="backgroundVideo" autoplay="autoplay" loop="loop" muted="muted" />
  <div class="outerMainText">
    <div class="mainSlogan">
      <h1>Xing UI</h1>
      <p>&#12300; 一款基于Vue的UI组件，简化您的开发流程 &#12301;</p>
      <RouterLink to="/introduction">
        <Button theme="primary">开始使用</Button>
      </RouterLink>
    </div>
  </div>
</main>
</template>

<script setup lang="ts">

import ShareHeader from "./share/ShareHeader.vue";
import Button from "../lib/Button.vue";
</script>

<style lang="scss" scoped>
.backgroundVideo{
  object-fit: fill;
  width: 100%;
  height: 40vh;
  filter:hue-rotate(270deg);
}
.outerMainText{
  padding: 80px 0;
  .mainSlogan {
    display: flex;
    align-items: center;
    flex-direction: column;
    & h1 {
      font-size: 64px;
      font-weight: 1000;
      margin-bottom: 20px;
    }
    & p {
      font-size: 24px;
      line-height: 1.5;
      color: rgba(0, 0, 0, 0.85);
      word-break: break-word;
      margin-bottom: 20px;
    }
  }
}
</style>