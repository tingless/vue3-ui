<template>
  <div class="app">
    <Modal
      width="350"
      :show="true"
      :borderRadius="50"
      position="center"
      headerColor='blue'
      headerText="this is a modal"
      headerTextColor="#fff"
      contentText="this is a modal aaaa!!!!"
      contentTextColor="#fff"
      :btnGroupShow="true"
      confirmText="确定"
      cancelText="取消"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    ></Modal>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {},
  setup(){
    const handleConfirm =()=>{

    }
    const handleCancel =()=>{
      
    }
    return {
      handleConfirm,
      handleCancel
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrap{
    width: 300px;
    margin: 100px auto;
  }
</style>
