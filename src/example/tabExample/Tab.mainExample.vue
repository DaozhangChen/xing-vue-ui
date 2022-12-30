<template>
  <h1>Tab 组件</h1>
  <p>Tab组件可以帮助你简单的创建一个导航栏组件，并且这个导航栏拥有互动动画，可以很轻松的实现切换导航时内容的改变，下面时组件演示</p>
  <h2>组件演示</h2>
  <p>Tab组件必须放在一个Tabs的组件中，并且Tabs组件中只能包含Tab组件，不然会报错，你可以通过设置title来规定导航的标题名，并且在Tab中放置任何内容</p>
  <p>Tabs上必须要有一个selected选项，这个选项也可以帮助你知道当前选择的导航名</p>
  <Tabs v-model:selected="selected">
    <Tab title="导航1">这里是导航一</Tab>
    <Tab title="导航2">这里是导航二</Tab>
    <Tab title="导航3">这里是导航三</Tab>
  </Tabs>
</template>

<script setup lang="ts">
import Tabs from "../../lib/Tabs.vue";
import {ref} from "vue";
import Tab from "../../lib/Tab.vue";

const selected=ref("导航1")
</script>

<style lang="scss">

</style>