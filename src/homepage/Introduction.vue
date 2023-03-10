<template>
  <ShareHeader v-model:aside-visible="isVisible" @currentWidth="listenWidth" />
  <div class="mainWrapper">
    <aside v-show="isVisible || asideVisible" class="mainAside">
      <ul>
        <RouterLink to="/introduction/usage">
          <li :class="{ ['selected']: selected === 'usage' }">如何使用</li>
        </RouterLink>
      </ul>
      <div>所有组件</div>
      <ul>
        <template v-for="{ eName, text } in componentLists">
          <RouterLink :to="/introduction/ + eName">
            <li :class="{ ['selected']: selected === eName }">
              <span>{{ eName.charAt(0).toUpperCase() + eName.substring(1) }}</span>
              <span class="text">{{ ' ' + text }}</span>
            </li>
          </RouterLink>
        </template>
      </ul>
    </aside>
    <main class="mainContent" @click="navClose" ref="refContent">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import ShareHeader from "./share/ShareHeader.vue";
import { componentLists } from "./share/componentLists";
import { useRoute } from "vue-router";
import { computed, ref, watch } from "vue";
const route = useRoute()
const isVisible = ref(false)
const refContent = ref()
const selected = computed(() => {
  const result = route.fullPath.match(/\/introduction\/(.+)/)
  return result?.[1]
})
const currentWidth = ref(window.innerWidth)
const listenWidth = (value: number) => {
  currentWidth.value = value
}
const asideVisible = computed(() => {
  if (route.path.substring(1, 13) === 'introduction' && currentWidth.value > 700) {
    return true
  }
})
const navClose = () => {
  if (currentWidth.value < 700 && isVisible.value) {
    isVisible.value = false
  }
}
watch(selected, () => {
  refContent.value.scrollTop = 0
})
</script>

<style lang="scss" scoped>
.mainWrapper {
  display: flex;

  .mainAside {
    width: 25%;
    height: calc(100vh - 64px);
    background: white;

    & .selected {
      background-color: var(--main-color);
    }

    & ul:first-child {
      padding-top: 40px;
      height: 80px;
    }

    & div {
      font-size: 18px;
      width: 100%;
      padding-left: 30px;
      line-height: 40px;
      font-weight: 600;
      flex-wrap: nowrap;
      overflow: hidden;
    }

    & li {
      line-height: 40px;
      height: 40px;
      padding-left: 30px;
      border-radius: 6px;
      overflow: hidden;

      & .text {
        color: rgba(0, 0, 0, 0.6);
      }

      transition: 0.25s background-color linear;
    }

    & li:hover {
      background-color: var(--main-color-hover);
    }

    @media (max-width: 700px) {
      position: absolute;
      width: 50%;
      z-index: 1;
      box-shadow: 5px 0 5px -3px rgba(0, 0, 0, 0.2);
    }
  }

  .mainContent {
    width: 75%;
    height: calc(100vh - 64px);
    overflow: scroll;
    padding: 40px 32px 32px 64px;

    @media (max-width: 700px) {
      width: 100%;
      padding: 32px 20px;
    }
  }
}
</style>