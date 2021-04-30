<template>
  <transition>
    <div v-if="currentIndex === selfIndex" class="carousel-item">
      <slot></slot>
    </div>
  </transition>
</template>

<script>

import { getCurrentInstance,reactive,toRefs,watch } from "vue"

export default {
  name:"CarouselItem",
  setup(){
    const instance = getCurrentInstance()
    const state = reactive({
      selfIndex: instance.vnode.key,
      currentIndex: instance.parent.ctx.currentIndex
    })
    //console.log(instance);
    watch(()=>{
      return instance.parent.ctx.currentIndex
    },(value)=>{
      state.currentIndex = value
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-enter-active,
  .v-leave-active{
    transition: all .2s linear;
  }
  .v-enter-active{
    transform: translateX(100%);
  }
  .v-enter-to{
    transform: translateX(0);
  }
  .v-leave-active{
    transform: translateX(0);
  }
  .v-leave-to{
    transform: translateX(-100%);
  }
</style>