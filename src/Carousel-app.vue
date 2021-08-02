<template>
  <div class="app">
    <!-- <Carousel 
      class="wrap"
      :autoPlay="true"
      :duration="3000"
      :initial="0"
      :hasDot="true"
      :hasArrow="true"
    >
      <CarouselItem
        v-for="(item,i) of carData"
        :key="i"
        class="item"
      >
        <img :src="require(`./assets/${item.img_name}`)">
      </CarouselItem>
    </Carousel>
    <div>123</div> -->
<base-counter v-slot="timeObj" :time="countDown">
  <div class="count-down">
    <div class="icon"></div>
    {{timeObj.d}}天{{timeObj.hh}}小时{{timeObj.mm}}分钟{{timeObj.ss}}秒
  </div>
</base-counter>
  </div>
</template>

<script>
1231123
import CarouselItem from "./libs/ui/Carousel/item"
import carData from "./libs/ui/data/carData"
import Timer from './libs/ui/Timer/Timer.vue'

export default {
  name: 'App',
  components: {
    CarouselItem,
    Timer
  },
  setup(){
    return {
      carData
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrap{
    position: relative;
    width: 520px;
    height: 280px;
    margin: 100px auto;
    overflow: hidden;
    .item{
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>
