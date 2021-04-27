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

#### 模态框

```

```

