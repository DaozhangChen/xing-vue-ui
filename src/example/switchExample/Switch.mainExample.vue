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
  <h2>API说明</h2>
  <ul>
    <li><strong>visible</strong>：这个选项用于控制Switch组件的开启与关闭状态，通常与v-model一起使用，当visible值为true时则为开启状态，反之为关闭状态</li>
    <li><strong>disabled</strong>：这个选项用于控制Switch是否与用户交互，当disabled值为true时，则为不可交互状态</li>
  </ul>
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