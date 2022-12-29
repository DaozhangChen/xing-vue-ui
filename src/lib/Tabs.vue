<template>
<div v-for="(t,index) in titles">
  {{t}}
</div>
</template>

<script setup lang="ts">
import {Component, useSlots} from "vue";
import Tab from "./Tab.vue";

const props=defineProps<{selected:string}>()
const slots = useSlots()
const defaults = slots.default?.()
defaults?.forEach((tag)=>{
  if (tag.type!==Tab){
    throw new Error('Tabs子标签必须是Tab')
  }
})
const titles = defaults?.map((tag)=>{
  return tag.props?.title
})
</script>

<style lang="scss">

</style>