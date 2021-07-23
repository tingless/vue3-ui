<template>
  <div class="app">
    <Magnifier
      :imgUrl="imgUrl"
      :imgAlt="imgAlt"
      :imgLink="imgLink"
      :blank="blank"
      :imgWidth="imgWidth"
      :imgHeight="imgHeight"
      :magWidth="magWidth"
      :magHeight="magHeight"
    ></Magnifier>
  </div>
</template>

<script>
// wo shi test 22222
// i am test 1 
// 574 - 406
// 375 - 266
import { reactive,toRefs } from "vue"

export default {
  name: 'App',
  setup(){
    const state = reactive({
      imgUrl:"http://wx2.sinaimg.cn/mw690/005LDy8qgy1gpy903n4bzj30hs0ckdgz.jpg",
      imgAlt:"Leborn James",
      imgLink:"https://www.baidu.com",
      blank:false,
      imgWidth:375,
      imgHeight:266,
      magWidth:100,
      magHeight:100
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
  .app{ 
    width: 375px;
    margin:100px auto;
  }
</style>
