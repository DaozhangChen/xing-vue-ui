<template>
    <h1>如何安装</h1>
    <HighLight :code="installCode" />
    <h1>如何使用</h1>
    <HighLight :code="useCode" />
    <h1>提示</h1>
    <strong>由于显示代码块的插件存在bug，于是里面所有的script标签均无闭合。大家使用代码时需要注意</strong>
</template>

<script setup lang="ts">
import HighLight from '../homepage/share/highLight.vue';
const installCode = `//使用npm安装
npm install xing-vue-ui

//使用yarn安装
yarn add xing-vue-ui

//使用pnpm安装
pnpm install xing-vue-ui
`
const useCode = `<script setup>
  import {Button} from 'xing-vue-ui'
<script>

<template>
    <Button>按钮</Button>
</template>
`
</script>

<style lang="scss">

</style>