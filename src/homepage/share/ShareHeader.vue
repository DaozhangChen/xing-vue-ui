<template>
<header class="layoutHeader">
  <Menu class="icon" v-show="currentPath === 'introduction' && currentWidth<=700"/>
  <router-link to="/">
    <div class="iconAndTitle">
      <img src="../../assets/logo.png" class="mainLogo" />
      <h2 v-show="currentPath !=='introduction' || currentWidth > 700 && currentPath ==='introduction'"> XING UI</h2>
    </div>
  </router-link>
  <div class="headerRight">
    <ul v-show="currentPath !=='introduction' || currentWidth > 700 && currentPath ==='introduction'">
      <li>React版</li>
    </ul>
    <a target="_blank" href="https://github.com/DaozhangChen/Xing-react-ui"><GitHub class="icon"/></a>
  </div>
</header>
</template>

<script setup lang="ts">
import GitHub from '../../assets/github.svg'
import Menu from '../../assets/menu.svg'
import { onMounted, ref, watch} from "vue";
import {useRoute} from "vue-router";
const route = useRoute()
const currentWidth = ref(window.innerWidth)
const currentPath = ref(route.matched[0].path.substring(1))
onMounted(()=>{
  const path = route.matched[0].path.substring(1)
  window.addEventListener('resize',()=>{
    currentWidth.value = window.innerWidth
  })
})

</script>

<style lang="scss" scoped>
.layoutHeader{
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  height: 64px;
  align-items: center;
  @media (max-width: 700px){
    padding: 0 20px;
  }
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
    .icon:hover{
      transform: scale(1.05);
    }
  }
}
.icon{
  height: 32px;
  width: 32px;
  transition: all 0.25s linear;
}



</style>