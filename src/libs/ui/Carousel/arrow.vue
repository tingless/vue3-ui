<template>
  <div class="wrap-arrow">
    <span class="right" @click="setDir('next')">&nbsp;&gt;</span>
    <span class="left" @click="setDir('prev')">&lt;</span>
  </div>
</template>

<script>
export default {
  name:"CarouselArrow",
  setup(props,ctx){
    const setDir =(dir)=>{
      ctx.emit('setDir',dir)
    }

    return {
      setDir
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrap-arrow{
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 5;
    color: #fff;

    .right,.left{
      cursor: pointer;
      position: absolute;
      top: 50%;
      margin-top: -13px;
      display: inline-block;
      width: 20px;
      height: 26px;
      background-color: rgba(0,0,0,.1);
      &:hover{
        color:red;
      }
    }

    .right{
      right: 0;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
    }

    .left{
      left: 0;
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
    }
  }
</style>