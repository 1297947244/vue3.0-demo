<template>
  <div class="my_center">
   <h4>个人中心-{{name}}</h4>
   <div><span class="label">姓名：</span><span class="value">{{name}}</span></div>
   <div><span class="label">年龄：</span><span class="value">{{age}}</span></div>
   <div><span class="label">职业：</span><span class="value">{{job}}</span></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Home',
  setup () {
    const name = ref('熊超')
    const age = ref(30)
    const job = ref('前端工程师')

    return {
      name,
      age,
      job
    }
  }
})
</script>

<style lang="scss" scoped>
.my_center {
  width: 300px;
  margin: 0 auto;
  background: #ddd;
  border-radius: 16px;
  text-align: center;
  padding: 20px;
  h4 {
    font-size: 18px;
  }
}
.label {
  display: inline-block;
  width: 100px;
  text-align: right;
}
.value {
  display: inline-block;
  width: 100px;
  text-align: left;
}
</style>
