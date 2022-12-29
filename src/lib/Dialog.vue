<template>
<div>
  <Teleport to="body">
    <div></div>
    <div>
      <header>
        <Close />
      </header>
      <main></main>
      <footer></footer>
    </div>
  </Teleport>
</div>
</template>

<script setup lang="ts">
import Close from '../assets/close.svg'

</script>

<style lang="scss">

</style>