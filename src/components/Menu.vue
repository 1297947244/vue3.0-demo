<template>
  <div class="menu">
    <router-link class="menu_item" to="/">首页</router-link>
    <router-link class="menu_item" to="/my_center">个人中心</router-link>
    <router-link class="menu_item" to="/">消息中心</router-link>
    <router-link class="menu_item" to="about">关于</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Menu',
  setup () {
    // 获取路由，判断选中哪个路由
    const name = ref('hello')
    return {
      name
    }
  }
})
</script>
<style lang="scss" scoped>
.menu {
  height: 60px;
  line-height: 60px;
  float: right;
  margin-right: 20px;
  .menu_item {
    float: left;
    padding: 0 20px;
    height: 60px;
    line-height: 60px;
    margin: 0;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    color: #fff;
    position: relative;
    box-sizing: border-box;
    white-space: nowrap;
    transition: border-color .3s,background-color .3s,color .3s;
    text-decoration: none;
  }
}
</style>
