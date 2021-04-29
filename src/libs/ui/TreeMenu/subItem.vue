<template>
  <div class="wrap" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <slot name='title'></slot>
    <span class="icon">&gt;</span>
    <div class="sub-item" v-show="detailShow">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import { ref } from "vue"

export default {
  name:'TreeMeunSubItem',
  props:{
    title:String
  },
  setup(){
    let detailShow = ref(false)
    const mouseenter = ()=>{
      console.log(123456);
      detailShow.value = true
    }
    const mouseleave = ()=>{
      detailShow.value = false
    }
    return {
      detailShow,
      mouseenter,
      mouseleave
    }
  }
}
</script>

<style lang="scss" scoped> 
  .wrap{
    position: relative;
    width: 100%;
    height: 55px;
    line-height: 55px;
    text-align: center;
    color:#333;
    .icon {
      position: absolute;
      right: 13px;
      top: -3px;
      cursor: pointer;
    }
    .sub-item{
      position: absolute;
      top: 0;
      left: 100%;
      width: 100%;
      background-color: #eee;
    }
  }
</style>