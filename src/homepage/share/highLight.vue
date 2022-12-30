<template>
  <component class="style" :is="'highlightjs'" language="typescript" :code="code"/>
</template>

<script setup lang="ts">
import 'highlight.js/styles/atom-one-light.css'
const props = defineProps<{
   code:string
}>()

</script>

<style lang="scss" scoped>
.style{
  font-size: 16px;
  font-weight: 300;
  border: 2px solid var(--main-color);
  border-radius: 3px;
  margin: 20px 0;
}
</style>