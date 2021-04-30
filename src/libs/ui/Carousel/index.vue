<template>
  <div class="wrapper">
    <div class="inner">
      <slot class="item"></slot>
    </div>
    <CarouselDot 
      v-if="hasDot"
      :amount="childrenLen"
      :activeIndex="currentIndex"
      @setPic="setPic"
    ></CarouselDot>
    <CarouselArrow
      v-if="hasArrow"
      @setDir="setDir"
    ></CarouselArrow>
  </div>
</template>

<script>

import { reactive,toRefs,onMounted,onBeforeUnmount,getCurrentInstance } from "vue"
import CarouselDot from "./dot"
import CarouselArrow from "./arrow"

export default {
  name:"Carousel",
  components:{
    CarouselDot,
    CarouselArrow
  },
  props:{
    autoPlay:{
      type:Boolean,
      default:true
    },
    duration:{
      type:Number,
      default:2000
    },
    initial:{
      type:Number,
      default:0
    },
    hasDot:{
      type:Boolean,
      default:true
    },
    hasArrow:{
      type:Boolean,
      default:true
    }
  },
  setup(props){
    const instance = getCurrentInstance()
    // console.dir(instance.slots.default()[0].children.length);
    const state = reactive({
      currentIndex:props.initial,
      childrenLen:instance.slots.default()[0].children.length,
      dir:"next"
    })
    // 自动播放
    let t;
    const autoplay = (dir)=>{
      // 改变currentIndex 来实现autoplay
      switch(dir){
        case 'next':
          state.currentIndex += 1;
          if(state.currentIndex === state.childrenLen){
            state.currentIndex = 0
          }
          // console.log(state.currentIndex,'123');
          break;
        case 'prev':
          state.currentIndex -= 1;
          if(state.currentIndex === -1){
            state.currentIndex = state.childrenLen - 1 
          }
          break;
        default:
          break;
      }
    }
    onMounted(()=>{
      if(props.autoPlay){
        t = setInterval(()=>{
          autoplay(state.dir)
        },props.duration)
      }
    })

    onBeforeUnmount(()=>{
      clearInterval(t)
      t = null;
    })

    const setPic = (value)=>{
      state.currentIndex = value -1 
    }
    const setDir = (dir) =>{
      autoplay(dir)
    }
    return {
      setPic,
      setDir,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper{
    position: relative;
  }
</style>