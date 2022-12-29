<template>
  <h1>Example</h1>
  <h1>Button</h1>
  <h2>Size</h2>
  <Button size="big">bigbig</Button>
  <Button size="normal">normal</Button>
  <Button size="small">small</Button>
  <h2>theme</h2>
  <Button theme="primary" >primary</Button>
  <Button theme="default">default</Button>
  <Button theme="dashed">dashed</Button>
  <Button theme="text">text</Button>
  <Button theme="link">link</Button>
  <hr>
  <h2>type</h2>
  <div class="buttonBackground">
  <Button theme="primary" type="danger">primary</Button>
  <Button theme="default" type="danger">default</Button>
  <Button theme="dashed" type="danger">dashed</Button>
  <Button theme="text" type="danger">text</Button>
  <Button theme="link" type="danger">link</Button>
  </div>
  <hr />
  <h2>disable</h2>
  <Button :disabled="true">button</Button>
  <Button theme="primary" :disabled=true>primary</Button>
  <Button theme="default" :disabled=true>default</Button>
  <Button theme="dashed" :disabled=true>dashed</Button>
  <Button theme="text" :disabled=true>text</Button>
  <Button theme="link" :disabled=true>link</Button>
  <Button theme="primary" type="danger" :disabled=true>primary</Button>
  <Button theme="default" type="danger" :disabled=true>default</Button>
  <Button theme="dashed" type="danger" :disabled=true>dashed</Button>
  <Button theme="text" type="danger" :disabled=true>text</Button>
  <Button theme="link" type="danger" :disabled=true>link</Button>
  <hr>
  <h2>loading</h2>
  <Button :loading="true">你好</Button>
  <Button size="big" :loading="true">bigbig</Button>
  <Button size="normal" :loading="true" type="danger">normal</Button>
  <Button size="small" :loading="true">small</Button>
  <Button theme="primary" size="big" :disabled=true :loading="true">primary</Button>
  <Button theme="default" :disabled=true :loading="true">default</Button>
  <hr>
  <h1>Switch</h1>
  <Switch :value="switchStatus" />
  <Switch v-model:value="switchStatus" />
  <Switch v-model:value="switchStatus" :disabled="true"/>
  <button @click="controlSwitch">321</button>
  <hr>
  <h1>Dialog</h1>
  <Dialog v-model:visible="switchStatus" :close-on-mask="true">
    <template #title>
      这是一个标题654654645654654654654654654654654464654
    </template>
    <template #content>
      这里面是内容3213213121321comecomecomecomecome4654654654654654666546465446
    </template>
  </Dialog>
  <Button @click="clickDialog">openDialog</Button>
  <hr>
  <h1>Tab</h1>
  <Tabs v-model:selected="x">
    <Tab title="导航一">这是</Tab>
    <Tab title="导航二">一个</Tab>
    <Tab title="导航三">Tabs</Tab>
  </Tabs>
</template>

<script setup lang="ts">
import Button from "../lib/Button.vue";
import Switch from "../lib/Switch.vue";
import Dialog from "../lib/Dialog.vue";
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";
import {ref} from "vue";
import {openDialog} from "../lib/openDialog";
const switchStatus=ref(false)
const x =ref()
const controlSwitch=()=>{
  switchStatus.value=!switchStatus.value
}
const clickDialog=()=>{
  openDialog({
    title:'这是函数式调用',
    content:'这是内容',
    closeOnMask:true
  })
}
</script>

<style lang="scss">
button{
  margin: 5px 5px;
}
.buttonBackground{
  background-color: gray;
}
</style>