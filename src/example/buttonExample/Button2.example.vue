<template>
<h2>Theme</h2>
  <p>这里提供了五种样式选择，分别是primary、default、dashed、text、link</p>
  <Button theme="primary">primary</Button>
  <Button theme="default">default</Button>
  <Button theme="dashed">dashed</Button>
  <Button theme="text">text</Button>
  <Button theme="link">link</Button>
  <HighLight :code="code" />
</template>

<script setup lang="ts">
import Button from "../../lib/Button.vue";
import HighLight from "../../homepage/share/highLight.vue";

const code = `<template>
  <Button theme="primary"> primary </Button>
  <Button theme="default"> default </Button>
  <Button theme="dashed"> dashed </Button>
  <Button theme="text"> text </Button>
  <Button theme="link"> link </Button>
</template>`
</script>

<style lang="scss">

</style>