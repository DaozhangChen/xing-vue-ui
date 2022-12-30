<template>
  <ShareHeader />
<main class="mainWrapper">
  <video src="../assets/background.mp4" class="backgroundVideo" autoplay="autoplay" loop="loop" muted="muted" />
  <div class="outerMainText">
    <div class="mainSlogan">
      <h1>Xing UI</h1>
      <p>&#12300; 一款基于Vue的UI组件，简化您的开发流程 &#12301;</p>
      <RouterLink to="/introduction">
        <Button theme="primary">开始使用</Button>
      </RouterLink>
    </div>
  </div>
    <div class="cardItem">
      <div class="card">
            <span>
            <Vue style="height: 36px;width: 36px"/>
            </span>
        <h3>基于Vue3开发</h3>
        <p>使用了最新的Vue3框架进行开发，组件完美与Vue3配合</p>
      </div>
      <div class="card">
            <span>
            <Component style="height: 36px;width: 36px"/>
            </span>
        <h3>多种组件选择</h3>
        <p>具有多种实用组件选择，包含Button、Dialog、Tabs等组件</p>
      </div>
      <div class="card">
            <span>
            <Bag style="height: 36px;width: 36px"/>
            </span>
        <h3>便携化使用</h3>
        <p>简单易用的API，让使用者不需要花太多时间就能够使用</p>
      </div>
  </div>
</main>
</template>

<script setup lang="ts">
import ShareHeader from "./share/ShareHeader.vue";
import Button from "../lib/Button.vue";
import Bag from '../assets/bag.svg'
import Vue from '../assets/vue.svg'
import Component from '../assets/component.svg'
</script>

<style lang="scss" scoped>
.mainWrapper{
  margin-bottom: 50px;

  .backgroundVideo{
    object-fit: fill;
    width: 100%;
    height: 40vh;
    filter:hue-rotate(270deg);
  }
  .outerMainText{
    padding: 80px 0;
    .mainSlogan {
      display: flex;
      align-items: center;
      flex-direction: column;
      & h1 {
        font-size: 64px;
        font-weight: 1000;
        margin-bottom: 20px;
      }
      & p {
        font-size: 24px;
        line-height: 1.5;
        color: rgba(0, 0, 0, 0.85);
        word-break: break-word;
        margin-bottom: 20px;
      }
    }
  }
  .cardItem{
    display: flex;
    @media (min-width: 700px){
      column-gap: 40px;
      padding-inline: 48px ;
      align-items: stretch;
      text-align: start;
    }
    @media (max-width: 699px) {
      flex-direction: column;
    }
    & .card{
      display: flex;
      flex: 1 1 0;
      flex-direction: column;
      padding-inline: 24px;
      padding-block:20px ;
      border: 1px solid rgb(240,240,240);
      transition: box-shadow 0.25s;
      @media (min-width: 700px){
        width: 33%;
      }
      @media (max-width: 699px) {
        align-items: center;
        width: 100%;
      }
      & h3{
        font-size: 20px;
        line-height: 1.5;
        font-weight: 600;
        text-align: center;
        margin-bottom: 0.5em;
      }
      & span{
        text-align: center;
        margin: 15px 0;
      }
      & p{
        color: rgba(0,0,0,0.45);
      }
    }
    & .card:hover{
      box-shadow: rgb(0 0 0 / 16%) 0 1px 2px -2px , rgb(0 0 0 / 12%) 0px 3px 6px 0px,rgb(0 0 0 / 9%) 0px 5px 12px 4px;
    }
  }
}

</style>