<template>
<h2>函数式调用</h2>
  <p>这是函数式调用Dialog，这种方式相较于组件式相比，更为常用，也更方便，只需要填入选项即可使用</p>
  <Button theme="primary" @click="callDialog">函数式调用</Button>
  <HighLight :code="code" />
</template>

<script setup lang="ts">
import Button from "../../lib/Button.vue";
import {openDialog} from "../../lib";
import HighLight from "../../homepage/share/highLight.vue";

const callDialog=()=>{
  openDialog({
    title:'这是函数式调用',
    content:'这里是内容，你可以写内容',
    okClick:()=>{console.log('函数式调用 ok')},
    cancelClick:()=>{console.log('函数式调用 cancel')},
    closeOnMask:true
  })
}

const code = `<template>
  <Button theme="primary" @click="callDialog">函数式调用</Button>
</template>

<script setup lang="ts">
  const callDialog=()=>{
    openDialog({
      title:'这是函数式调用',
      content:'这里是内容，你可以写内容',
      okClick:()=>{console.log('函数式调用 ok')},
      cancelClick:()=>{console.log('函数式调用 cancel')},
      closeOnMask:true
    })
  }
<script>
`
</script>

<style lang="scss">

</style>