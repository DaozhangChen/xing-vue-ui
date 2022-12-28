<template>
<button class="xing-ui-button" :class="classes"><slot /></button>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  size?:'normal'|'big'|'small'
}>()
const {size} = props

const classes=computed(()=>{
  return {
    [`xing-ui-button-size-${size}`]:size
  }
})

</script>

<style lang="scss">
.xing-ui-button{
  background-color:var(--main-color) ;
  color: white;
  box-shadow: 0 2px 0 rgb(5 145 255 / 10%);
  font-size: 14px;
  line-height: 24px;
  height: 32px;
  padding: 4px 15px;
  border-radius: 6px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s linear;
  &-size-normal{
    height: 32px;
  }
  &-size-big{
    height: 40px;
    font-size: 18px;
    line-height: 32px;
    padding: 4px 18px;
  }
  &-size-small{
    height:24px;
    font-size: 12px;
    line-height: 16px;
    padding: 4px 13px;
  }
}
.xing-ui-button:hover{
  background-color: var(--main-color-light);
}
</style>