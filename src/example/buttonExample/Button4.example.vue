<template>
<h2>Disable</h2>
  <p>这个选项可以控制Button为不可选定状态，可以与各种theme搭配使用</p>
  <Button theme="primary" :disabled="true">primary</Button>
  <Button theme="default" :disabled="true">default</Button>
  <Button theme="dashed" :disabled="true">dashed</Button>
  <Button theme="text" :disabled="true">text</Button>
  <Button theme="link" :disabled="true">link</Button>
  <HighLight :code="code" />
</template>

<script setup lang="ts">
import Button from "../../lib/Button.vue";
import HighLight from "../../homepage/share/highLight.vue";

const code =`<template>
  <Button theme="primary" :disabled="true"> primary </Button>
  <Button theme="default" :disabled="true"> default </Button>
  <Button theme="dashed" :disabled="true"> dashed </Button>
  <Button theme="text" :disabled="true"> text </Button>
  <Button theme="link" :disabled="true"> link </Button>
</template>`
</script>

<style lang="scss">

</style>