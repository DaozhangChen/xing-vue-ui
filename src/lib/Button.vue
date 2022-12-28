<template>
<button class="xing-ui-button"><slot /></button>
</template>

<script setup lang="ts">

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
}
.xing-ui-button:hover{
  background-color: var(--main-color-light);
}
</style>