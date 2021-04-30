<template>
  <div class="wrap-index" v-selector>
    <SelectorInput
      :placeholder="placeholder"
      :oldvalue="inputValue"
      @itemInput="itemInput"
    ></SelectorInput>
    <SelectorItem
      :data="data"
      @setItemValue="setItemValue"
      :itemValue="itemValue"
    ></SelectorItem>
  </div>
</template>

<script>
import { reactive,toRefs } from "vue"
import { selector } from "../directive"

import SelectorInput from "./input"
import SelectorItem from "./item"

export default {
  name:'Selector',
  components:{
    SelectorInput,
    SelectorItem
  },
  directives:{
    selector
  },
  props:{
    placeholder:String,
    data:Array
  },
  setup(props,ctx){
    const state = reactive({
      inputValue:"",
      itemValue:""
    })
    const itemInput = (itemValue)=>{
      state.itemValue = itemValue
    }
    const setItemValue =(item)=>{
      ctx.emit('getValue',item.value)
      state.inputValue = item.text
    }

    return {
      setItemValue,
      itemInput,
      ...toRefs(state)
    }
  }
}
</script>

<style>

</style>