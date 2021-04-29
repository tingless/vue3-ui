<template>
  <div class="item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"TreeMenuItem",
  props:{
    title:String
  }
}
</script>

<style lang="scss" scoped>
  .item{
    color:#333;
    height: 55px;
    line-height: 55px;
    text-align: center;
  }
</style>