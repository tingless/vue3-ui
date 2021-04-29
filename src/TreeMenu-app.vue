<template>
  <div class="app">
    <TreeMenu class="wrap">
      <template 
        v-for="item of menuData"
        :key="item.id"
      >
        <TreeMenuItem
          v-if="!item.children"
        >
          {{ item.title }}
        </TreeMenuItem>
        <reTreeMenuItem
          v-else
          :data="item"
        >
        </reTreeMenuItem>
      </template>
    </TreeMenu>
  </div>
</template>

<script>

import menuData from "./libs/ui/data/treemenu-data"

export default {
  name: 'App',
  components: {},
  setup(){
    return {
      menuData
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrap{
    width: 300px;
    background-color: #eee;
  }
</style>
