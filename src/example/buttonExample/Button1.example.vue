<template>
<h2>Size</h2>
  <p>有大中小三种样式可以选择，分别在Button组件上使用size选项就可以使用</p>
  <Button size="big">大大大</Button>
  <Button size="normal">中中中</Button>
  <Button size="small">小小小</Button>
  <HighLight :code="code" />
</template>

<script setup lang="ts">
import Button from "../../lib/Button.vue";
import HighLight from "../../homepage/share/highLight.vue";

const code = `<template>
  <Button size="big"> 大大大 </Button>
  <Button size="normal"> 中中中 </Button>
  <Button size="small"> 小小小 </Button
</template>
`
</script>

<style lang="scss">
button{
  margin: 0 10px ;
}

</style>