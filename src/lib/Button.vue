<template>
<button class="xing-ui-button" :class="classes"><slot /></button>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  size?:'normal'|'big'|'small'
  theme?:'primary'|'default'|'dashed'|'text'|'link'
}>()
const {size,theme} = props

const classes=computed(()=>{
  return {
    [`xing-ui-button-size-${size}`]:size,
    [`xing-ui-button-theme-${theme}`]:theme
  }
})

</script>

<style lang="scss">
.xing-ui-button{
  background: #fff;
  color: black;
  border:1px solid #d9d9d9;
  box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
  font-size: 14px;
  line-height: 24px;
  height: 32px;
  padding: 4px 15px;
  border-radius: 6px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s linear;
  &:hover{
    border-color: var(--main-color);
    color: var(--main-color);
  }
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
  &-theme-default{
    background: #fff;
    border:1px solid #d9d9d9;
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    color: black;
  }
  &-theme-default:hover{
    background: #fff;
    border-color: var(--main-color);
    color: var(--main-color);
  }
  &-theme-primary{
    background-color:var(--main-color) ;
    color: white;
    border: 1px solid var(--main-color);
    box-shadow: 0 2px 0 rgb(5 145 255 / 10%);
  }
  &-theme-primary:hover{
    background-color: var(--main-color-light);
    border-color: var(--main-color-light);
    color: white;
  }
  &-theme-dashed{
    background: #fff;
    border-style: dashed;
    border-color:rgb(217,217,217);
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    color: black;
  }
  &-theme-dashed:hover{
    background: #fff;
    border-color: var(--main-color);
    color: var(--main-color);
  }
  &-theme-text{
    border-color: transparent;
  }
  &-theme-text:hover{
    border-color: transparent;
    background-color: rgba(0,0,0,0.06);
  }
  &-theme-link{
    background: transparent;
    border: transparent;
    color: var(--main-color);
  }
  &-theme-link:hover{
    color: var(--main-color-light);
  }

}
//.xing-ui-button:hover{
//  background-color: var(--main-color-light);
//}
</style>