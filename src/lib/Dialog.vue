<template>
<template v-if="visible">
  <Teleport to="body">
    <div class="xing-ui-dialog-mask" @click="clickMask"></div>
    <div class="xing-ui-dialog-wrapper">
      <header class="xing-ui-dialog-header">
        <slot name="title" />
        <Close class="xing-ui-dialog-close" @click="close"/>
      </header>
      <main class="xing-ui-dialog-main">
        <slot name="content" />
      </main>
      <footer class="xing-ui-dialog-footer">
        <Button theme="primary" @click="okClick">OK</Button>
        <Button @click="cancelClick">Cancel</Button>
      </footer>
    </div>
  </Teleport>
</template>
</template>

<script setup lang="ts">
import Close from '../assets/close.svg'
import Button from "./Button.vue";

const props=defineProps<{
  visible?:boolean
  closeOnMask?:boolean
  okClick?:()=>void
  cancelClick?:()=>void
}>()
const emit = defineEmits<{
  (e:'update:visible',visible:boolean):void
}>()
const close=()=>{
  emit('update:visible',false)
}
const okClick=()=>{
  close()
}
const cancelClick=()=>{
  close()
}
const clickMask=()=>{
  if (props.closeOnMask){
    close()
  }
}
</script>

<style lang="scss">
.xing-ui-dialog{
  &-mask{
    position: fixed;
    top:0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 1;
  }
  &-wrapper{
    position: fixed;
    border: 1px solid white;
    background: white;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 520px;
    padding: 20px 24px;
    border-radius: 8px;
    z-index: 2;
    @media (max-width: 700px) {
      width: 80%;
    }
    & .xing-ui-dialog-close{
      position: absolute;
      top: 20px;
      right: 20px;
      width: 20px;
      height: 20px;
      cursor: pointer;
      &:hover{
        background: rgba(220,220,220,0.5);
      }
    }
    & .xing-ui-dialog-header{
      font-weight: 600;
      font-size: 16px;
      line-height: 1.5;
      word-break: break-word;
      margin-bottom: 10px;
    }
    & .xing-ui-dialog-main{
      color: rgba(0,0,0,0.88);
      word-break: break-word;
      margin-bottom: 10px;
    }
    & .xing-ui-dialog-footer{
      text-align: right;
    }

  }
}

</style>