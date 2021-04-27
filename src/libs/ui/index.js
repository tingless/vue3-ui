import Star from "./components/Star.vue"

const zxxUi ={}

zxxUi.install = function(Vue){
  Vue.component(Star.name,Star)
}

export default zxxUi