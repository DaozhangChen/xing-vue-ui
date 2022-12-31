<template>
  <h1>Button 组件</h1>
  <p>拥有各种样式的Button，让你能够方便的使用我们提供的Button组件，Button组件可以选择大小、样式、以及是否处于Loading状态，具体请看下面的组件演示</p>
  <Button1Example />
  <Button2Example />
  <Button3Example />
  <Button4Example />
  <Button5Example />
  <h2>API说明</h2>
  <ul>
    <li><strong>Size</strong>：用于控制Button的大小，有三个选项分别是 'big'|'normal'|'small'，分别对应大、中、小按钮</li>
    <li><strong>Theme</strong>：用于控制Button的样式，一共有五个选项分别是 'primary'|'default'|'dashed'|'text'|'link'，样式可以查看上面的说明</li>
    <li><strong>Type</strong>：用于选择危险按钮，目前只有一个danger选项，用于把Button变为红色的Button</li>
    <li><strong>Disable</strong>：用于控制Button是否可以被用户交互，当disable的值为true时，则Button不可交互</li>
    <li><strong>Loading</strong>：用于控制Button是否处于加载状态，loading值为true时，则处于Loading状态</li>
  </ul>
</template>

<script setup lang="ts">
import Button1Example from './Button1.example.vue'
import Button2Example from './Button2.example.vue'
import Button3Example from './Button3.example.vue'
import Button4Example from './Button4.example.vue'
import Button5Example from './Button5.example.vue'

</script>

<style lang="scss">

</style>