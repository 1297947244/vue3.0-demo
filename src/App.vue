<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <div id="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </div>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

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
  color: #2c3e50;
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
