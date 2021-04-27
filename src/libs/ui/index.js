import Star from "./components/Star.vue"
import Magnifier from "./components/Magnifier.vue"

const zxxUi ={}

zxxUi.install = function(Vue){
  Vue.component(Star.name,Star)
  Vue.component(Magnifier.name,Magnifier)
}

export default zxxUi