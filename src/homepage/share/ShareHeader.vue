<template>
<header class="layoutHeader">
  <router-link to="/">
    <div class="iconAndTitle">
      <img src="../../assets/logo.png" class="mainLogo" />
      <h2> XING UI</h2>
    </div>
  </router-link>
  <div class="headerRight">
    <ul>
      <li>React版</li>
    </ul>
    <a target="_blank" href="https://github.com/DaozhangChen/Xing-react-ui"><GitHub class="icon"/></a>
  </div>
</header>
</template>

<script setup lang="ts">
import GitHub from '../../assets/github.svg'

</script>

<style lang="scss" scoped>
.layoutHeader{
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  height: 64px;
  align-items: center;
  & .iconAndTitle{
    display: flex;
    align-items: center;
    .mainLogo{
      height: 32px;
      margin-right: 10px;
    }
    h2{
      font-size: 18px;
    }
  }
  & .headerRight{
    display: flex;
    align-items: center;
    & li{
      line-height: 58px;
      cursor: pointer;
      border-top: 3px solid white;
      border-bottom:3px solid white;
      transition: border-top-color 0.25s linear;
      margin: 0 20px;
    }
    li:hover{
      border-top-color:var(--main-color);
    }
    a{
      width: 32px;
      height: 32px;
    }
    .icon{
      height: 32px;
      width: 32px;
      transition: all 0.25s linear;
    }
    .icon:hover{
      transform: scale(1.05);
    }
  }
}


</style>