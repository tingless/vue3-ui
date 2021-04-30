<template>
  <div 
    ref="dot"
    class="dot"
    :style="{
      marginLeft: -dotWidth/2+'px'
    }"
  >
    <span 
      :class="['dot-item',activeIndex === item-1 ? 'active':'']"
      v-for="item of amount"
      :key="item"
      @click="setPic(item)"
    ></span>
  </div>
</template>

<script>

import { ref,onMounted,reactive,toRefs } from "vue"

export default {
  name:"CarouselDot",
  props:{
    amount:Number,
    activeIndex:{
      type:Number,
      default:0
    }
  },
  setup(props,ctx){
    const dot = ref(null)
    const state = reactive({
      dotWidth:0
    })
    onMounted(()=>{
      state.dotWidth = dot.value.offsetWidth
    })
    const setPic = (value)=>{
      ctx.emit('setPic',value)
    }
    return {
      dot,
      ...toRefs(state),
      setPic
    }
  }
}
</script>

<style lang="scss" scoped>
  .dot{
    position: absolute;
    bottom: 10px;
    left: 50%;
    background-color: rgb(0,0,0,.1);
    border-radius: 10px;
    padding-right: 5px;
    
    .dot-item{
      cursor: pointer;
      display: inline-block;
      margin-bottom: 3px;
      margin-left: 5px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #fff;
      &.active{
        background-color: red !important;
      }
    }
  }
</style>