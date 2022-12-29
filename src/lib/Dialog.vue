<template>
<template v-if="visible">
  <Teleport to="body">
    <div class="xing-ui-dialog-mask"></div>
    <div class="xing-ui-dialog-wrapper">
      <header>
        <slot name="title" />
        <Close class="xing-ui-dialog-close"/>
      </header>
      <main>
        <slot name="context" />
      </main>
      <footer>
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
    background: rgba(0,0,0,0.66);
    z-index: 1;
  }
  &-wrapper{
    position: fixed;
    border: 1px solid white;
    background: white;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 2;
    & .xing-ui-dialog-close{
      width: 15px;
      height: 15px;
    }
  }
}

</style>