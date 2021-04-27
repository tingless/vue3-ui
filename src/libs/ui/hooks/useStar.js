import { ref } from "vue"

export function useStar(originNum,callback){

  const starNum = ref(originNum)

  const setStarNum = (num) =>{
    starNum.value = num
    callback(num)
  }

  return [
    starNum,
    setStarNum
  ]
} 