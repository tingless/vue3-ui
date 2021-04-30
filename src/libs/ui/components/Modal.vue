<template>
  <div
    class="modal-mask"
    v-show="showModal"
  >
    <div 
      class="ui-modal"
      ref="uiModal"
      :style="{
        width:width + 'px',
        borderRadius:borderRadius + 'px',
        marginLeft: - width / 2 + 'px',
        top: position === 'center' ? '50%' :'50px',
        marginTop:position === 'center' ? -uiModalHeight/2+'px':''
      }"
    >
      <header 
        class="header"
        :style="{
          color:headerTextColor,
          backgroundColor:headerColor
        }"
      >
        <h1>{{ headerText }}</h1>
        <a 
          href="javascript:;"
          :style="{
            color:headerTextColor
          }"
          @click="close"
        >&times;</a>
      </header>
      <article class="content">
        <p>{{ contentText }}</p>
      </article>
      <div
        class="btn-group"
        v-if="btnGroupShow"
      >
        <button class="btn btn-confirm" @click="confirm">{{ confirmText }}</button>
        <button class="btn btn-cancel" @click="close">{{ cancelText }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref,reactive, onMounted,toRefs,getCurrentInstance } from 'vue';


export default {
  name:'Modal',
  props:{
    show:{
      type:Boolean,
      default:false
    },
    width:{
      type:Number,
      default:300
    },
    borderRadius:{
      type:Number,
      default:12
    },
    headerColor:{
      type:String,
      default:"#000"
    },
    headerText:{
      type:String,
      default:""
    },
    headerTextColor:{
      type:String,
      default:"#fff"
    },
    contentText:{
      type:String,
      default:""
    },
    contentTextColor:{
      type:String,
      default:"#fff"
    },
    position:{
      type:String,
      default:"top"
    },
    btnGroupShow:{
      type:Boolean,
      default:false
    },
    confirmText:{
      type:String,
      default:"确定"
    },
    cancelText:{
      type:String,
      default:"取消"
    }
  },
  setup(props,ctx){
    const state = reactive({
      uiModalHeight:0,
      showModal:props.show
    })
    // const instance = getCurrentInstance()
    // onMounted(()=>{
    //   state.uiModalHeight = instance.refs.uiModal.offsetHeight;
    // })

    const instance = getCurrentInstance()
    // const uiModal = ref(null)
    onMounted(()=>{
      state.uiModalHeight = instance.refs.uiModal.offsetHeight;
      console.log(instance.refs.uiModal);
    })
    const confirm = ()=>{
      state.showModal = false;
      ctx.emit('confirm','hhh')
    }
    const close =()=>{
      state.showModal = false
      ctx.emit('close','hhh')
    }
    return {
      confirm,
      close,
      ...toRefs(state),
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal-mask{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.3);

    a {
      text-decoration: none;
      outline: none;
      color:#333;
    }
    
    h1,
    p{
      font-weight: normal;
      margin: 0;
    }
    
    button{
      outline: none;
      border:none;
    }

    .ui-modal{
      position: fixed;
      left: 50%;
      overflow: hidden;
      background-color: #fff;
      box-shadow: 1px 2px 3px #333;

      .header{
        height: 44px;
        padding: 0 15px;
        box-sizing: border-box;

        h1{
          display: inline-block;
          font-size: 18px;
          line-height: 44px;
        }

        a{
          float: right;
          font-size: 18px;
          margin-top: 11px;
        }
      }

      .content{
        p{
          padding:15px;
          box-sizing: border-box;
        }
      }

      .btn-group{
        height: 30px;
        padding: 10px 15px;
        border-top:1px solid #ddd;

        .btn{
          float: right;
          min-width: 80px;
          height: 30px;
          font-size: 14px;
          border-radius: 3px;
          cursor: pointer;

          &.btn-confirm{
            //color:#fff;
            margin-left: 15px;
          }

          &.btn-cancel{
            background-color: #ddd;
            color:#666;
          }
        }
      }
    }
  }
</style>