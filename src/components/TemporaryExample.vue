<template>
  <h1>Example</h1>
  <h1>Button</h1>
  <h2>Size</h2>
  <Button size="big">bigbig</Button>
  <Button size="normal">normal</Button>
  <Button size="small">small</Button>
  <h2>theme</h2>
  <Button theme="primary">primary</Button>
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
  <h1>Switch</h1>
  <Switch />
  <hr>
  <h1>Dialog</h1>
  <Dialog />
  <hr>
  <h1>Tab</h1>
  <Tab>
    <Tabs />
  </Tab>
</template>

<script setup lang="ts">
import Button from "../lib/Button.vue";
import Switch from "../lib/Switch.vue";
import Dialog from "../lib/Dialog.vue";
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";
</script>

<style lang="scss">
button{
  margin: 5px 5px;
}
.buttonBackground{
  background-color: gray;
}
</style>