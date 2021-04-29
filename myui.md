# vue3-myUI

## 前期部署

- main.js

```
// 引入组件库
import plwui from "@/libs/plwui"
// 链式调用use, 原因是调用方法会返回Vue
createApp(App).use(plwui).mount('#app')
```

- plwui-index.js

```
// 引入
import Magnifier from "./components/Magnifier.vue"

const plwui ={}
// Vue进行全局注册
plwui.install = function(Vue) {
  Vue.component(Magnifier.name,Magnifier)
}

export default plwui
```

#### modal

- 在app.vue里面，确定要传入的属性，尽可能的细致
  1. 除了字符串，别的数字类型和boolean类型都要加 :
  2. 监听的事件要setup中return

```
    <Modal
      width="350"
      :show="true"
      :borderRadius="50"
      position="top"
      headerColor='blue'
      headerText="this is a modal"
      headerTextColor="#fff"
      contentText="this is a modal aaaa!!!!"
      contentTextColor="#fff"
      :btnGroupShow="false"
      confirmText="确定"
      cancelText="取消"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    >
    </Modal>
    
```

- 在Modal组件页面里面写上props
- 写Modal的div
  1. 模态框一般会套mask，position:fixed的最外层
- 难点: vue3里动态获取el的高度

需要：之前未定义高度，但是要垂直居中，必须要知道此事el的高度

```
https://www.cnblogs.com/fsg6/p/14486080.html
思路：我们要在setup拿到el,同时通过reactive包裹一个响应式数据来监听el的offsetHeight

- 采用ref来拿到对象
    <div 
      ref="modal"
      class="modal"
      :style="{
        borderRadius:borderRadius+'px',
        width:width+'px',
        marginLeft:-width/2 +'px',
        top: position === 'center' ?'50px':'50%',
        marginTop: - marginTopHeight /2 +'px'
      }"
- ref的modal其实就是将对象和div联系起来
- 从vue引入ref，reactive，onMounted，toRefs
import { ref,reactive,onMounted,toRefs } from 'vue'
- setup创建一个ref对象
- 然后将这个监听对象暴露出去，从而实现 setup 函数中和 节点modal 的绑定。
- 设置一个值(marginTopHeight)来达到监听的目的
- modal.value会有很多el的属性,offsetTop等四个属性最有用
- 这个值来监听modal.value.offsetHeight(el的高度)，因为这个属性无法直接在html渲染
- 这个值要在onMounted的回调里面拿，因为setup执行早于html渲染，不然的话会拿不到
  setup(props,ctx){
    const modal = ref(null)
    const state = reactive({
      marginTopHeight:0,
      showModal:props.show
    })
    console.log(modal);
    onMounted(()=>{
      console.log(modal);
      state.marginTopHeight = modal.value.offsetHeight
    })
    return {
      modal,
      ...toRefs(state)
    }
  }
// 位置图：https://blog.csdn.net/zh_rey/article/details/78967174
- offsetTop,offsetLeft:距离相对父元素的border内部到自身元素border最外层的距离
- offsetHeight,offsetWidth:自身的宽度，包括padding和border
```

#### magnifier

- 原理：div盒子有2个a标签（同级），一个是放大镜图片，一个是显示图片，放大镜图片scale放大，并且通过放大镜显示出来，放大镜正常移动，图片反移。放大镜的图片正常大小+缩放 和 放大镜的大小不一样。

- a的属性

```
target:_blank代表再新页面打开，默认同个页面打开
```

- box-shadow的属性

```
box-shadow: 10px(必需的。水平阴影的位置。允许负值) 10px(必需的。垂直阴影的位置。允许负值) 10px(可选。模糊距离) color
```

- mouseover,mouseout  && mouseenter,mouseleave

```
https://blog.csdn.net/sinat_36521655/article/details/80237213
```

![image-20210419131223828](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210419131223828.png)

- window.getComputedStyle(el,null)[prop]

```
用于获取元素的样式,第一个参数为el,第二个参数对于普通元素为null或者省略（用来获取伪元素）
result = getComputedStyle(h3, '::after').content;

getComputedStyle 返回的对象是 CSSStyleDeclaration 类型的对象。
取数据的时候可以直接按照属性的取法去取数据，例如 style.backgroundColor。需要注意的是，返回的对象的键名是 css 的驼峰式写法，background-color -> backgroundColor。

可以获取元素的长宽
parseInt(window.getComputedStyle(el,null)[prop])
// 返回的是带单位的字符串，因为后续改变style.top用到数字，所以可以用parsetInt提前处理，转为话数字

```

![image-20210412110320068](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210412110320068.png)

- 注意事项：
  1. document.querySeletor可以拿到元素下面所有层级的目标el
  2. 元素style.top和left移动一定要有position的属性
  3.  oMagWrap.className += " show"; 给el添加新class一定要有个空格

- 传入一张图片，配置可以修改的属性

- 写好props,再写html结构，和style
- 因为考虑到双向绑定更麻烦，所以应directive直接操作dom来实现功能，主要因为有鼠标事件的处理

#### star

- icon的使用

```
// 组件的css一般写在style里面，或者单独的css文件里，这样别人下载就不用重新写下icon了
// 前面还有个@font-face别忘记
// 要注意格式 iconfont和@font-face 是平级关系
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // 这里设置icon的颜色，必须
  color:#eee;
  // 这里放进去便于css管理，就是真实icon的地方
  &.icon-star:before {
    content: "\e650";
  }
  // 可以写变化的颜色
  &.icon-star{
    transform: color 0.3s;
  }
  // 改变颜色
  &.active{
    color:pink;
  }
}
```

- vue的v-for多种使用

```
v-for="（person, index） in persons"
v-for="index in 5"
v-for="（val, key,  index） in persons"
你也可以用 of 替代 in 作为分隔符，因为它更接近 JavaScript 迭代器的语法// in和of没区别
```

- hook集合：需求：用户点击哪个星星，从0-这颗星星就变亮

```
// 一般组件会把自己的内部的方法都放到hook里面，类似于directive
// 最大的作用简化setup的函数，类似于vuex
```

- hook.js

```
import { ref } from "vue"

// 传入2个参数,一个是用户设置的num,一个是回调函数
export function useStar(num,callback){
  // 用ref来包装starNum,因为要在页面使用，必须用ref包装
  const starNum = ref(num)
	// 创建一个函数，用户点击就触发这个函数
  const setStarNum = (setNum)=>{
  	// 改变数字
    starNum.value = setNum
    // 触发回调
    callback()
  }

  return [
    starNum,
    setStarNum
  ]
}
```

- Star.vue

```
  
 <span @click="setStarNum(index)"><span/>
  
  setup(props,ctx){
  	// 解构出变量和函数
    const [starNum,setStarNum] = useStar(props.num,function(){
      ctx.emit('getStarNum',starNum.value)
    })

    return {
      starNum,
      setStarNum
    }
  }
```

#### treemenu

- 原理：利用vue递归组件，实现无限菜单，三个组件，难点还是在于ui的实现。
- item
- ![image-20210429143453164](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210429143453164.png)
- subitem
- ![image-20210429143433425](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20210429143433425.png)
- 具名插槽的语法糖

```
<template v-slot:title> == <template #title>
```

- 不具名插槽可以v-for，具名插槽无法使用v-for
- template可以做占位符的效果，不会被渲染，https://www.cnblogs.com/tu-0718/p/11177236.html，在多个el需要v-for并且不希望增加额外的el的情况下载template使用v-for可以减少dom
- v-show的位置

```
<template>
  <div class="wrap" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <slot name='title'></slot>
    <span class="icon">&gt;</span>
    <div class="sub-item" v-show="detailShow">
      <slot></slot>
    </div>
  </div>
</template>
// mouseenter和mouseleave不应该写在icon，应该要写在wrap上面，不然的话一移动sub-item，整个div就会消失
// mouseenter和mouseleave一对，mouseover和mouseout为一对，一般用enter
```

