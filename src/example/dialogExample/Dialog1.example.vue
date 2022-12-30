<template>
<h2>组件式使用Dialog</h2>
  <p>这里是组件式调用Dialog的例子，你需要以组件的方式写一个Dialog，叫函数式调用相比，这种方式会使你的Dialog组件结构更加清晰</p>
  <Button theme="primary" @click="controlDialog">打开Dialog</Button>
  <Dialog v-model:visible="visible"
          :okClick="okClick"
          :cancelClick="cancelClick"
          :close-on-mask="true" >
    <template #title>
      这是自定义标题
    </template>
    <template #content>
      <p>这里面是内容1</p>
      <p>里面是内容2</p>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from "../../lib/Dialog.vue";
import Button from "../../lib/Button.vue";
import {ref} from "vue";
const visible=ref(false)
const controlDialog=()=>{
  visible.value=!visible.value
}
const okClick=()=>{
  console.log('组件式调用ok')
}
const cancelClick=()=>{
  console.log('组件式调用cancel')
}
</script>

<style lang="scss">

</style>