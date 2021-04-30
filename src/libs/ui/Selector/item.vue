<template>
  <div class="wrap-item">
    <template v-if="filterData.length > 0">
      <div
        v-for="item of filterData"
        :key="item.id"
        class="item"
        @click="setItemValue(item)"
      >
      {{ item.text }}
    </div>
    </template>
    <noDataTip v-else></noDataTip>
  </div>
</template>

<script>

import { reactive,toRefs, watch,onMounted } from "vue"
import noDataTip  from "./no-data-tip"

export default {
  name:"SelectorItem",
  props:{
    data:Array,
    itemValue:String
  },
  components:{
    noDataTip
  },
  setup(props,ctx){
    const state = reactive({
      filterData:[]
    })
    const setItemValue = (item)=>{
      ctx.emit("setItemValue",item)
    }
    watch(()=>{
      return props.itemValue
    },(value)=>{
      // 改变data
      filer(value)
    })

    const filer = (value)=>{
      console.log(value);
      // 这里必须要个return
      state.filterData = props.data.filter(item=>{
        return item.text.toLowerCase().includes(value.toLowerCase())
      })
    }
    onMounted(()=>{
      state.filterData = props.data
    })
    return {
      setItemValue,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
 .wrap-item{
   width: 200px;
   background-color: #fff;
   display: none;
   margin-top: 5px;
   border-radius: 5px;
   box-shadow: 0 0 4px #ddd;
   overflow: hidden;
   .item{
     height: 28px;
     line-height: 28px;
     text-align: center;
     cursor: pointer;
     &:hover{
       background-color: royalblue;
     }
   }
 }
</style>