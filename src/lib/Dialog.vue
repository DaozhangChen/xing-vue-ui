<template>
<template v-if="visible">
  <Teleport to="body">
    <div class="xing-ui-dialog-mask"></div>
    <div class="xing-ui-dialog-wrapper">
      <header class="xing-ui-dialog-header">
        <slot name="title" />
        <Close class="xing-ui-dialog-close"/>
      </header>
      <main class="xing-ui-dialog-main">
        <slot name="context" />
      </main>
      <footer class="xing-ui-dialog-footer">
        <Button theme="primary">OK</Button>
        <Button>Cancel</Button>
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
}>()

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
    & .xing-ui-dialog-close{
      position: absolute;
      top: 20px;
      right: 20px;
      width: 20px;
      height: 20px;

    }
    & .xing-ui-dialog-header{
      font-weight: 600;
      font-size: 16px;
      line-height: 1.5;
      word-break: break-word;
      margin-bottom: 10px;
    }
    & .xing-ui-dialog-main{
      word-break: break-word;
      margin-bottom: 10px;
    }
    & .xing-ui-dialog-footer{
      text-align: right;
    }

  }
}

</style>