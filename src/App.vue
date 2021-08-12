<template>
  <Menu />
  <div class="router_view">
  <router-view/>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Menu from '@/components/Menu.vue'

export default defineComponent({
  name: 'App',
  components: {
    Menu
  }
})
</script>

<style lang="scss">
html, body {
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
.router_view {
  padding-top: 60px;
  height: calc(100% - 60px);
  width: 100%;
  background-color: #6E92D0;
  background-image: url(./assets/home_bg.jpeg);
  background-size: 100% 100%;
}

#nav {
  a {
    display: block;
    height: 48px;
    line-height: 48px;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.el-container {
  &.is-vertical {
    height: 100%;
  }
  height: calc(100% - 60px);
}
.el-header {
  line-height: 60px;
  background-color: #B3C0D1;
}
.el-aside {
  background-color: #D3DCE6;
}
.el-main {
  background-color: #E9EEF3;
}
</style>
