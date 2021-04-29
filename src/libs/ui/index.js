import Star from "./components/Star.vue"
import Magnifier from "./components/Magnifier.vue"

import TreeMenu from "./TreeMenu"
import TreeMenuItem from "./TreeMenu/item.vue"
import TreeMenuSubItem from "./TreeMenu/subItem.vue"
import reTreeMenuItem from "./TreeMenu/resubItem"

const zxxUi ={}

zxxUi.install = function(Vue){
  Vue.component(Star.name,Star)
  Vue.component(Magnifier.name,Magnifier)

  Vue.component(TreeMenu.name,TreeMenu)
  Vue.component(TreeMenuItem.name,TreeMenuItem)
  Vue.component(TreeMenuSubItem.name,TreeMenuSubItem)
  Vue.component(reTreeMenuItem.name,reTreeMenuItem)

}

export default zxxUi