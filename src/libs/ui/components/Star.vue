<template>
  <div class="wrapper">
    <span
      v-for="i of 5"
      :key="i"
      :class="['iconfont','icon-star', i <= starNum ? 'active' : '']"
      :style="{
        fontSize:size + 'px'
      }"
      @click="setStarNum(i)"
    >
    </span>
  </div>
</template>

<script>

// import { ref } from "vue"
import { useStar } from "../hooks/useStar"

export default {
  name:"Star",
  props:{
    num:{
      type:Number,
      default:3
    },
    size:{
      type:Number,
      default:20
    }
  },
  setup(props,ctx){ 
    // const starNum = ref(props.num)
    // const setStar =(i)=>{
    //   starNum.value = i
    //   ctx.emit("getStarNum",i)
    // }
    const [starNum,setStarNum] = useStar(props.num,(num)=>{
      ctx.emit('getStarNum',num)
    })

    return {
      //setStar,
      starNum,
      setStarNum
    }
  }
}
</script>

<style lang="scss" scoped>
@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_2425448_nrg3d3rgag.eot?t=1618798380376'); /* IE9 */
  src: url('//at.alicdn.com/t/font_2425448_nrg3d3rgag.eot?t=1618798380376#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAK0AAsAAAAABmgAAAJmAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAp0gQoBNgIkAwgLBgAEIAWEbQcuG64FEdWTDWQ/EzK55HaThLE93WwT7UfjmSCe7L7qTff87Z1ZQRFxMKL74ZmRqAyKHNLZzeJUjU2QAMqDoX38ch/53ERR263sxAPAJ+6d/t8ACmQ+oFzGGLTGoC6gLg6kgPbGKLIiibxh7AKX8BgCOKRQhLReu/fHoLFWCSDT46QxmJwXjWYJg+CrOaiRddgYa7l1H1gbfl8+USEGLGyFVdJ7Ytt4Gt/2tlPUPG8ew30CHwjouA0ooAjQIP1roz1RCGMonKgmA/ZVKPC2t+f5FmSvRoT9dVZ+EABJUHRPYldyqwkL4LZGkgWUj5oAkjVz8+WcgQO9i1ZcjOvff+/FrdvyB/Tf+sRdmTtowD562bOUgYOO7Ki59VNP//2UYbcPHCo7dIDyk43+nv+Py/pNmc8H1ebFVJ8dZ4fWmLzaQXl++ZfkOI0AeDfUPdUoBBBIPPPvqNDaP8bVALzaY4pCt3dD088OZsc2gR8k7tmldalltrQqru23yDpxg4MDeGBnBG/G6qLvJikYokfYA0hOnQozU1xjKIKwcamCD0MDHArpOO4SyQwUogOBAhYDCGGcgEUIN6AI4wGp6a9hE8MX+AgTBYeBEnmhS45YUZ4IFaMF/Q/R9OYcK8uo8I7+UxRlpSHzjXTEAMzDVEzcsCHNseX4+oXZgaNe4Qqew1I6bNQTGh4C87aOo6t702B6FZIWQsVoQf9DNL05fzDL0ufv6D9FUUtHjfeNdMTxYR6mHuRN1Xp13Msrx9cvzA4c9QpXMA9L6bDVz0toeAgjwts62r1cX9WwvqZ+3SHAwdJbYlcqtJ8VCQEAAAA=') format('woff2'),
  url('//at.alicdn.com/t/font_2425448_nrg3d3rgag.woff?t=1618798380376') format('woff'),
  url('//at.alicdn.com/t/font_2425448_nrg3d3rgag.ttf?t=1618798380376') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_2425448_nrg3d3rgag.svg?t=1618798380376#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #eee;

  &.icon-star:before {
  content: "\e650";
  transition: color 0.2s;
  }

  &.active{
    color:red;
  }
}



</style>