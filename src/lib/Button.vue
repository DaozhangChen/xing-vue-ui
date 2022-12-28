<template>
<button class="xing-ui-button" :class="classes" :disabled="disabled"><slot /></button>
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  size?:'normal'|'big'|'small'
  theme?:'primary'|'default'|'dashed'|'text'|'link'
  type?:'danger'
  disabled?:boolean
}>()
const {size,theme,type} = props

const classes=computed(()=>{
  return {
    [`xing-ui-button-size-${size}`]:size,
    [`xing-ui-button-theme-${theme}`]:theme,
    [`xing-ui-button-type-${type}`]:type,
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
  height: 32px;
  padding: 4px 15px;
  border-radius: 6px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s linear;
  &[disabled]{
    cursor: not-allowed;
    filter: grayscale(100%);
    &:hover{
      background: #fff;
      color: black;
      border-color: #d9d9d9;
    }
  }
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
    padding: 4px 18px;
  }
  &-size-small{
    height:24px;
    font-size: 12px;
    padding: 4px 13px;
  }
  &-theme-default{
    background: #fff;
    border:1px solid #d9d9d9;
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    color: black;
    &[disabled]{
      cursor: not-allowed;
      filter: grayscale(100%);
      &:hover{
        background: #fff;
        color: black;
        border:1px solid #d9d9d9;
      }
    }
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
    &[disabled]{
      cursor: not-allowed;
      filter: grayscale(100%);
      &:hover{
        background-color:var(--main-color);
        color:white;
        border: 1px solid var(--main-color);
      }
    }
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
    &[disabled]{
      cursor: not-allowed;
      filter: grayscale(100%);
      &:hover{
        background: #fff;
        color:black;
        border:1px dashed rgb(217,217,217);
      }
    }
  }
  &-theme-dashed:hover{
    background: #fff;
    border-color: var(--main-color);
    color: var(--main-color);
  }
  &-theme-text{
    border-color: transparent;
    &[disabled]{
      cursor: not-allowed;
      filter: grayscale(100%);
      &:hover{
        border-color: transparent;
      }
    }
  }
  &-theme-text:hover{
    border-color: transparent;
    background-color: rgba(0,0,0,0.06);
  }
  &-theme-link{
    background: transparent;
    border: transparent;
    color: var(--main-color);
    &[disabled]{
      cursor: not-allowed;
      filter: grayscale(100%);
      &:hover{
        background: transparent;
        color:var(--main-color);
        border:none
      }
    }
  }
  &-type-link:hover{
    color: var(--main-color-light);
  }
  &-type-danger{
    background-color: var(--danger-color);
    box-shadow:0 2px 0 rgb(255 38 5 / 6%);
    border-color: var(--danger-color);
    &[disabled]{
      cursor: not-allowed;
      filter: grayscale(100%);
      &:hover{
        border-color:var(--danger-color);
        background-color:var(--danger-color) ;
      }
    }
  }
  &-type-danger.xing-ui-button-theme-default,
  &-type-danger.xing-ui-button-theme-dashed{
    color: var(--danger-color);
    background-color: white;
  }
  &-type-danger.xing-ui-button-theme-text{
    color: var(--danger-color);
    background-color: white;
    border: transparent;
  }
  &-type-danger.xing-ui-button-theme-link{
    color: var(--danger-color);
    background-color: transparent;
  }
  &-type-danger:hover{
    background-color:  var(--danger-color-light);
    box-shadow:0 2px 0 rgb(255 38 5 / 6%);
    border-color: var(--danger-color-light);
  }
  &-type-danger:hover.xing-ui-button-theme-default:hover,
  &-type-danger:hover.xing-ui-button-theme-dashed:hover{
    background-color: white;
    color: var(--danger-color-light);
    border-color: var(--danger-color-light);
    &[disabled]{
      cursor: not-allowed;
      filter: grayscale(100%);
      &:hover{
        color: var(--danger-color);
        border-color:var(--danger-color);
      }
    }
  }
  &-type-danger:hover.xing-ui-button-theme-text:hover{
    background-color: #fff2f0;
    color: var(--danger-color-light);
    border-color: #fff2f0;
    &[disabled]{
      cursor: not-allowed;
      filter: grayscale(100%);
      &:hover{
        background: white;
        color: var(--danger-color);
        border: none;
      }
    }
  }
  &-type-danger:hover.xing-ui-button-theme-link:hover{
    color: var(--danger-color-light);
    background-color: transparent;
    &[disabled]{
      cursor: not-allowed;
      filter: grayscale(100%);
      &:hover{
        color: var(--danger-color);
      }
    }
  }
}

</style>