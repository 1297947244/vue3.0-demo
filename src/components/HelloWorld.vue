<template>
  <div class="hello">
    <el-table
      :data="list"
      stripe
      style="width: 100%">
      <el-table-column
        prop="createdTime"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容">
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { MOCK_LIST } from '@/api/index'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    const list = ref([])
    MOCK_LIST().then(res => {
      list.value = res
    })
    return {
      list
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
