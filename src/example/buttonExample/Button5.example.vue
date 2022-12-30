<template>
<h2>Loading</h2>
  <p>该选项可以控制Button是否为Loading状态</p>
  <Button theme="primary" :loading="true">primary</Button>
  <Button theme="default" :loading="true">default</Button>
  <Button theme="dashed" :loading="true">dashed</Button>
  <Button theme="text" :loading="true">text</Button>
  <Button theme="link" :loading="true">link</Button>
</template>

<script setup lang="ts">

import Button from "../../lib/Button.vue";
</script>

<style lang="scss">

</style>