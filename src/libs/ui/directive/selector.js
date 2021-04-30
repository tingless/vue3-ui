export default {
  mounted(el){
    const oInput = document.querySelector('.input'),
          oPlaceholder = document.querySelector('.placeholder'),
          oIcon = document.querySelector(".icon"),
          oMenu = document.querySelector('.wrap-item');
    //console.log(oInput,oPlaceholder,oIcon);

    oInput.addEventListener('focus',function(){
      oPlaceholder.style.display = 'none'
      oIcon.className = 'icon iconfont icon-sousuo'
      oMenu.style.display = 'block'
    },false)
    oInput.addEventListener('blur',function(){
      oIcon.className = 'icon iconfont icon-arrowdown'
      setTimeout(()=>{
        oMenu.style.display = 'none'
        if(this.value.length === 0){
          oPlaceholder.style.display = 'block'
        } 
      },150)
    },false)
  }
}