<template>
  <div class="app">
    <Carousel 
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
  </div>
</template>

<script>

import CarouselItem from "./libs/ui/Carousel/item"
import carData from "./libs/ui/data/carData"

export default {
  name: 'App',
  components: {
    CarouselItem
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
