<template>
  <div class="app">
    <Selector
      placeholder="请输入内容"
      :data="inputData"
      @getValue="getValue"
    ></Selector>
  </div>
</template>

<script>

import inputData from "./libs/ui/data/inputData"

export default {
  name: 'App',
  components: {},
  setup(){
    const getValue = (itemValue) =>{
      console.log('value',itemValue);
    }
    return {
      inputData,
      getValue
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrap{
    width: 300px;
    margin: 100px auto;
  }
</style>
