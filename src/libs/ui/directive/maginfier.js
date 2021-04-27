
import { getStyle } from "../tools/ustils"

export default{
  mounted(){
    // 获得el
    const oImgWrap = document.querySelector(".wrapper"),
          oMagWrap = document.querySelector('.magWrap'),
          oMagImg = document.querySelector(".magImg");
    // 获得必要的宽高
    const imgWidth = getStyle(oImgWrap,'width'),
          imgHeight = getStyle(oImgWrap,'height'),
          magWidth = getStyle(oMagWrap,'width'),
          magHeight = getStyle(oMagWrap,'height'),
          imgX = oImgWrap.offsetLeft,
          imgY = oImgWrap.offsetTop;
    //console.log(imgX,imgY);

    const bindEvent =()=>{
      oImgWrap.addEventListener('mouseenter',function(e){
        oMagWrap.className += ' show'
        showMag(getXY(e).x,getXY(e).y)
        document.addEventListener('mousemove',handlerMousemove,false)
      },false)
      oImgWrap.addEventListener('mouseleave',function(){
        oMagWrap.className = 'magWrap'
        document.removeEventListener('mousemove',handlerMousemove,false)
      },false)
    }

    function handlerMousemove(e){
      const {x,y,limitX,limitY} = getXY(e)
      showMag(x,y,limitX,limitY)
    }

    function showMag(x,y,limitX,limitY){
      // console.log(x,y);
      oMagWrap.style.top = y + 'px'
      oMagWrap.style.left = x + 'px'
      oMagImg.style.top = -y + 'px'
      oMagImg.style.left = -x + 'px'
      console.log(limitX,limitY);
      if(limitX < 0|| limitY < 0 || limitX > imgWidth || limitY > imgHeight){
        oMagWrap.className = 'magWrap'
        document.removeEventListener('mousemove',handlerMousemove,false)
      }
    }
    
    function getXY(e){
      return {
        // 算出鼠标的距离，再减去mag/2得到mag的左上角的坐标
        x:e.pageX - imgX - magWidth/2,
        y:e.pageY - imgY - magHeight/2,
        limitX:e.pageX - imgX,
        limitY:e.pageY - imgY
      }
    }


    const init = ()=>{
      bindEvent()
    }

    init()
  }
}