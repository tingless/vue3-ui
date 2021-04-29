<template>
    <!-- 逻辑不清楚还冗余了 -->
  <TreeMeunSubItem>
    <template #title>
      {{ data.title }}
    </template>
    <template
      v-for="c of data.children"
      :key="c.id"
    >
      <TreeMenuItem
        v-if="!c.children"
      >
        {{ c.title }}
      </TreeMenuItem>
      <reTreeMenuItem
        v-else
        :data="c"
      >
      </reTreeMenuItem>
    </template>
  </TreeMeunSubItem>
  <!-- 逻辑更加清楚,但是前面的template必须一个有名字一个没名字 -->
  <!-- <TreeMeunSubItem>
    <template #title>
      {{ data.title }}
    </template>
    <template
      v-for="c of data.children"
      :key="c.id"
    >
      <TreeMenuItem
        v-if="!c.children"
      >
        {{ c.title }}
      </TreeMenuItem>
      <reTreeMenuItem
        v-else
        :data="c"
      >
      </reTreeMenuItem>
    </template>
  </TreeMeunSubItem> -->
</template>

<script>
export default {
  name:"reTreeMenuItem",
  props:{
    data:Object
  }
}
</script>

<style>

</style>