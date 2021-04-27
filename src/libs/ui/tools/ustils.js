function getStyle(el,props){
  return parseInt(window.getComputedStyle(el,null)[props])
}

export {
  getStyle
}