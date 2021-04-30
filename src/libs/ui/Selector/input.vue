<template>
  <div class="wrap">
    <input 
      type="text" 
      class="input" 
      :value="oldvalue"
      @input="itemInput"
      @focus="itemInput"
      ref="InputValue"
      @blur="rememberValue(tttt)"
    >
    <label class="placeholder">{{ placeholder }}</label>
    <span class="icon iconfont icon-sousuo"></span>
  </div>
</template>

<script>

import { getCurrentInstance } from "vue"

export default {
  name:"SelectorInput",
  props:{
    placeholder:{
      type:String,
      default:"请输入选择"
    },
    oldvalue:String
  },
  setup(props,ctx){
    const tttt = '123123'
    const instance = getCurrentInstance()
    // console.log(instance.refs);
    const itemInput = (e)=>{
      ctx.emit('itemInput',e.target.value)
    }
    const rememberValue = (oldValue)=>{
      // _input.value记录的是实时的
      // instance是vue实例，里面其实也有value,但是el里面取得更加直接
      // 这个值其实是props传递过来的！！！
      const _input = instance.refs.InputValue;
      console.log(instance.refs,instance);
      console.dir(instance.refs.InputValue);
      if(_input.value.length>0){
        console.log( _input.value);
        _input.value = oldValue
      }
    }
    return {
      itemInput,
      rememberValue,
      tttt
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrap{
    width: 200px;
    position: relative;

    .input{
      border:1px solid #eee;
      border-radius: 10px;
      outline: none;
      height: 25px;
      padding: 0 15px;
      &:focus{
        border-color: #1890ff;
        box-shadow: 0 0 3px #1890ff;
      }
    }
    .placeholder{
      font-size: 15px;
      color:grey;
      position: absolute;
      top: 4px;
      left: 7px;
    }
    .icon{
      position: absolute;
      top: 6px;
      right: 10px;
    }
  }

  @font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_2168460_h94vq90b2sq.eot?t=1618379387555'); /* IE9 */
  src: url('//at.alicdn.com/t/font_2168460_h94vq90b2sq.eot?t=1618379387555#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMsAAsAAAAABxwAAALeAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqBVIFaATYCJAMQCwoABCAFhG0HSRtNBsgusG14kyKBpCiQLrPP2EEOQDz8/1jtvv/fqKZFTJqfjqdJiLcNiUiCFAmNTZQ0VG+W53/X9K8Zg82bLsshK4SD5Hql3MtlzLadni6qqmlA13aK1NyEbpnQdwnj6Lw2kMDh5PNcjm8EFMj8QLmMsXGMxUe9AOOtgY01KbICCcgbxm4icAjHCXTtZpV3e2BsEoolMC4Qb3VNguKcT0or2RaaNUtTfISGdnlveQc+8O/Hb+4opmhU4KQ7z/tV6PpW+HcVHeYOreoRvJvPDWsVFSeBJF7Wxh5DwmIj3d75LgNtbYW5OqZ/V3M5aWfHEqg19o9XiCZQ2AcX1XjlG1ia6lTNQtWlFijwQ2xtb5R3DlgBxq15tgvR72dr+CSbnf78nMlkptLpZaSeFOKsqOL6renOqZ1plU6Ssh01dB05anpBb4+iNw07qzB6+ILC0PTwREwhZErT8seQh5ZI1HKop0Uih+gAaVItPVp3v+x3fYmugdY/x3r7dna2d/r6Uql67n3H/+Le109AlRAvx6wZAJvfeocwoO6UIMDmoDbXox/+G9NtPrdS1fa/XZZgfTvcszlI6Kfz12S9Zb9X1rMiQwWwZfpKLI0K0xbEfRZ1dfFTU0x9z6Ff9C4ktC1SFC27ULUdJJJ1Eg09F9HUdg1dJwyu7pnhkMgOjjtTEMaSKIY+oxr7IJL1hYalfzSNA6HrUdRt2XM49NJeTiRBVCxvYV1hQYocolQUjxNtzS/xrIJzpgk39SB22Z3F5CAJEj7HDHNdcwtBMeUsgAeU04jfz7DBmZcowu4RwmhxOGjdm+wKC0CpWzhCIhAqTLYF0ymYIEprC6Wlz48jNGv8JLyFMRCeRnAmvXvMxc7ZgxjUBnsx7uUV0zqNmyBQGMUxAdiA4ib8MMZgRv0gL0Ih2HlGRAwtHFo12ldrX18f+MJ10AW2zihRI6Ohuc3WzDVWInHONlRkDZbKbK5rHgEAAAA=') format('woff2'),
  url('//at.alicdn.com/t/font_2168460_h94vq90b2sq.woff?t=1618379387555') format('woff'),
  url('//at.alicdn.com/t/font_2168460_h94vq90b2sq.ttf?t=1618379387555') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_2168460_h94vq90b2sq.svg?t=1618379387555#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-sousuo:before {
  content: "\e612";
}

.icon-arrowdown:before {
  content: "\e638";
}

.icon-arrowright:before {
  content: "\e606";
}

</style>