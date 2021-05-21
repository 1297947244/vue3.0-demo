<template>
  <dl>
    <dd>{{state.name}}</dd>
    <dd>性别：{{state.sex}}--{{count}}</dd>
    <dd>地址：{{state.address}}</dd>
  </dl>
  <button @click="addressChange">更新地址</button>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  data () {
    return {
      city: '北京'
    }
  },
  setup () {
    const count = ref(0)
    // reactive 用来创建一个响应式的对象和数组
    // 定义一个响应式的数据状态，并赋值
    const state = reactive({
      name: 'FungLeo',
      sex: 'boy',
      address: '上海'
    })
    console.log(state)
    // 定义一个函数，修改 state 的值。
    const addressChange = () => {
      state.address += '浦东'
      count.value++
    }
    // 导出一些内容给上面的模板区域使用
    return {
      count,
      state,
      addressChange
    }
  }
})

</script>
