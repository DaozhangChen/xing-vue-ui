<template>
  <h1>Dialog 组件</h1>
  <p>Dialog组件能够帮助你在不离开本页面的情况下进行事件的通知与确认，这里提供了两种使用Dialog组件的方式，分别是组件式与函数调用式，来看下面的例子</p>
  <Dialog1Example />
  <Dialog2Example />
  <h2>API说明</h2>
  <ul>
    <li><strong>visible</strong>：这个选项用于控制Dialog的开启与关闭状态，通常与v-model指令一起使用，当visible值为true时则Dialog开启，false为关闭，在函数式调用中不必设置该选项。</li>
    <li><strong>okClick</strong>：这个选项用于控制在Dialog点击ok按钮后执行的回调函数</li>
    <li><strong>cancelClick</strong>：这个选项用于控制在Dialog点击cancel按钮后执行的回调函数</li>
    <li><strong>closeOnMask</strong>：这个选项用于控制是否可以通过点击黑色浮层使Dialog关闭，当closeOnMask值为true时则允许通过点击浮层使Dialog关闭</li>
    <li><strong>children</strong>：这个选项是为了说明使用组件式调用的自定义标题以及内容，需要用Vue3的具名插槽的方式使用自定义title和content，使用示例如上</li>
    <li><strong>title</strong>：这个选项是函数式调用Dialog时的自定义title选项，通常填入一个字符串</li>
    <li><strong>content</strong>：这个选项是函数式调用Dialog时自定义content的选项，通常填入一个字符串</li>
  </ul>
</template>

<script setup lang="ts">
import Dialog1Example from './Dialog1.example.vue'
import Dialog2Example from './Dialog2.example.vue'

</script>

<style lang="scss">

</style>