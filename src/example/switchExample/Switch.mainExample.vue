<template>
  <h1>Switch 组件</h1>
  <p>Switch组件是一个非常小巧的组件，能够让你有一个可视化的开关，使你更清楚当前的状态，这个组件与Dialog配合也能起到不错的效果</p>
  <Switch v-model:value="value"/>
  <p>现在你就可以控制这个Switch了</p>
  <h2>disable</h2>
  <p>也可以使用disable来使这个开关变得不可交互，当然，你可以主动控制这个不可交互Switch的状态</p>
  <Switch v-model:value="disabledValue" :disabled="true" />
  <Button theme="primary" @click="controlValue">主动控制</Button>
</template>

<script setup lang="ts">
import {ref} from "vue";
import Switch from "../../lib/Switch.vue";
import Button from "../../lib/Button.vue";
const value=ref(false)
const disabledValue=ref(false)
const controlValue=()=>{
  disabledValue.value=!disabledValue.value
}
</script>

<style lang="scss">

</style>