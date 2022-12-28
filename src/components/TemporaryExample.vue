<template>
  <h1>Example</h1>
  <h1>Button</h1>
  <h2>Size</h2>
  <Button size="big">bigbig</Button>
  <Button size="normal">normal</Button>
  <Button size="small">small</Button>
  <hr>
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