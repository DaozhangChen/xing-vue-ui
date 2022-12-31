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
  <HighLight :code="code" />
  <h2>API说明</h2>
  <ul>
    <li><strong>selected</strong>：这个选项用于给用户展示当前的选择的Tab标题，这里通常与v-model一起使用，并且当值与一个ref关联时，建议ref的初始值为当前Tab的其中一个title的值，否则会出现错误</li>
    <li><strong>title</strong>：这个选项用于自定义导航栏的标题，只能为字符串</li>
    <li><strong>children</strong>：这个选项是用于控制Tab的自定义内容</li>
  </ul>
</template>

<script setup lang="ts">
import Tabs from "../../lib/Tabs.vue";
import {ref} from "vue";
import Tab from "../../lib/Tab.vue";
import HighLight from "../../homepage/share/highLight.vue";
const selected=ref("导航1")
const code = `<template>
  <Tabs v-model:selected="selected">
    <Tab title="导航1">这里是导航一</Tab>
    <Tab title="导航2">这里是导航二</Tab>
    <Tab title="导航3">这里是导航三</Tab>
  </Tabs>
</template>

<script setup lang="ts">
  const selected=ref("导航1")
<script>
`
</script>

<style lang="scss">

</style>