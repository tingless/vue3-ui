<template>
  <div class="app">
    <Star
      :num="3"
      :size="25"
      @getStarNum="getStarNum"
    ></Star>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  setup(){
    const getStarNum = (num) =>{
      console.log('num',num);
    }

    return {
      getStarNum
    }
  }
}
</script>

<style lang="scss">

</style>
