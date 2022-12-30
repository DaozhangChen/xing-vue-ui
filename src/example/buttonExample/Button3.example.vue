<template>
<h2>Type</h2>
  <p>这个选项可以选择Button为危险按钮，可以与其他的样式共同使用</p>
  <Button theme="primary" type="danger">primary</Button>
  <Button theme="default" type="danger">default</Button>
  <Button theme="dashed" type="danger">dashed</Button>
  <Button theme="text" type="danger">text</Button>
  <Button theme="link" type="danger">link</Button>
</template>

<script setup lang="ts">

import Button from "../../lib/Button.vue";
</script>

<style lang="scss">

</style>