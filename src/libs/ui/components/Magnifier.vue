<template>
  <div 
    v-maginfier
    class="wrapper"
    :style="{
      width:imgWidth + 'px',
      height:imgHeight + 'px'
    }"
  >
    <a 
      :href="imgLink"
      :target="blank ? '_blank':''"
      class="magWrap"
      :style="{
        width:magWidth + 'px',
        height:magHeight + 'px'
      }"
    >
      <img 
        class="magImg"
        :src="imgUrl" 
        :alt="imgAlt"
        :style="{
          width:imgWidth + 'px',
          height:imgHeight + 'px'
        }"
      >
    </a>
    <a 
      :href="imgLink"
      :target="blank ? '_blank':''"
      class="static"
    >
      <img 
        :src="imgUrl" 
        :alt="imgAlt"
        class="static-img"
      >
    </a>
  </div>
</template>

<script>

import { maginfier } from "../directive"

export default {
  name:"Magnifier",
  props:{
    imgUrl:String,
    imgAlt:String,
    imgLink:String,
    blank:Boolean,
    imgWidth:Number,
    imgHeight:Number,
    magWidth:Number,
    magHeight:Number
  },
  directives:{
    maginfier
  }
}
</script>

<style lang="scss" scoped>
  .wrapper{
    position: relative;

    .magWrap{
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      z-index: 2;
      box-shadow: 1px 2px 2px #eee;
      display: none;
      border-radius: 50%;
      &.show{
        display: block;
        transform: scale(1.5);
      }

      .magImg{
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    .static{
      width: 100%;
      height: 100%;

      .static-img{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>