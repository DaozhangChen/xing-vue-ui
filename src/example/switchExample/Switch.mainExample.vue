<template>
  <h1>Switch 组件</h1>
  <p>Switch组件是一个非常小巧的组件，能够让你有一个可视化的开关，使你更清楚当前的状态，这个组件与Dialog配合也能起到不错的效果</p>
  <Switch v-model:value="value"/>
  <p>现在你就可以控制这个Switch了</p>
  <HighLight :code="code1" />
  <h2>disable</h2>
  <p>也可以使用disable来使这个开关变得不可交互</p>
  <p>当然，你也可以主动控制这个Switch的状态</p>
  <div class="switchAndButton">
  <Switch v-model:value="disabledValue" :disabled="true" />
  <Button theme="primary" @click="controlValue">主动控制</Button>
  </div>
  <HighLight :code="code2" />
</template>

<script setup lang="ts">
import {ref} from "vue";
import Switch from "../../lib/Switch.vue";
import Button from "../../lib/Button.vue";
import HighLight from "../../homepage/share/highLight.vue";
const value=ref(false)
const disabledValue=ref(false)
const controlValue=()=>{
  disabledValue.value=!disabledValue.value
}
const code1 = `<template>
  <Switch v-model:value="value"/>
</template>

<script setup lang="ts">
  const value=ref(false)
<script>
`

const code2 = `<template>
  <Switch v-model:value="disabledValue" :disabled="true" />
  <Button theme="primary" @click="controlValue">主动控制</Button>
</template>

<script setup lang="ts">
  const disabledValue=ref(false)
  const controlValue=()=>{
    disabledValue.value=!disabledValue.value
  }
<script>
`
</script>

<style lang="scss">
.switchAndButton{
  display: flex;
  align-items: center;
}

</style>