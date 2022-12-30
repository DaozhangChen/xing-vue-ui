<template>
  <ShareHeader />
  <div class="mainWrapper">
<aside class="mainAside">
  <ul>
    <li>如何使用</li>
  </ul>
  <div>所有组件</div>
  <ul>
    <template v-for="{eName,text} in componentLists">
      <RouterLink :to="/introduction/ + eName">
      <li :class="{['selected']:selected===eName}" @click="selectList(eName)">
        <span>{{eName.charAt(0).toUpperCase() + eName.substring(1)}}</span>
        <span class="text">{{' ' + text}}</span>
      </li>
      </RouterLink>
    </template>
  </ul>
</aside>
<main class="mainContent">
  {{selected}}
    <RouterView />
</main>
  </div>
</template>

<script setup lang="ts">
import ShareHeader from "./share/ShareHeader.vue";
import {componentLists} from "./share/componentLists";
import {useRoute} from "vue-router";
import {computed, ref} from "vue";

const selected = computed(()=>{
  const route = useRoute()
  const result =route.fullPath.match(/\/introduction\/(.+)/)
  return result?.[1]
})
const selectedTag=ref(selected.value)

const selectList=(name:string)=>{
  selectedTag.value=name
}

</script>

<style lang="scss" scoped>
.mainWrapper{
  display: flex;
  .mainAside{
    width: 25%;
    height: calc(100vh - 64px);
    background: white;
    & .selected{
      background-color:var(--main-color);
    }
    & ul:first-child{
      padding-top: 40px;
      height: 80px;
    }
    & div{
      font-size: 18px;
      width: 100%;
      padding-left:30px;
      line-height: 40px;
      font-weight: 600;
      flex-wrap: nowrap;
      overflow: hidden;
    }
    & li{
      line-height: 40px;
      height: 40px;
      padding-left:30px;
      border-radius: 6px;
      overflow: hidden;
      & .text{
        color: rgba(0,0,0,0.6);
      }
      transition: 0.25s background-color linear;
    }
    & li:hover{
      background-color:var(--main-color-hover);
    }
  }
  .mainContent{
    width: 75%;
    height: calc(100vh - 64px);
    overflow: scroll;
    padding: 40px 32px 32px 64px;
  }
}
</style>