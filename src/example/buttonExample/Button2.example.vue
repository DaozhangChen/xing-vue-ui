<template>
<h2>Theme</h2>
  <p>这里提供了五种样式选择，分别是primary、default、dashed、text、link</p>
  <Button theme="primary">primary</Button>
  <Button theme="default">default</Button>
  <Button theme="dashed">dashed</Button>
  <Button theme="text">text</Button>
  <Button theme="link">link</Button>
</template>

<script setup lang="ts">

import Button from "../../lib/Button.vue";
</script>

<style lang="scss">

</style>