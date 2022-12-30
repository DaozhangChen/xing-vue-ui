<template>
<header>
  <router-link to="/">
    <div>
      <MainLogo class="main-icon"/>
      XING UI
    </div>
  </router-link>
  <div>
    <ul>
      <li>React版</li>
    </ul>
    <a target="_blank" href="https://github.com/DaozhangChen/Xing-react-ui"><GitHub /></a>
  </div>
</header>
</template>

<script setup lang="ts">
import MainLogo from '../../assets/mainLogo.svg'
import GitHub from '../../assets/github.svg'

</script>

<style lang="scss" scoped>
.main-icon{
}

</style>