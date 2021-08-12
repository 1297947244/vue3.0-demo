<template>
  <div class="home">
   我是首页1111-{{name}}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Home',
  setup () {
    const name = ref('你好')

    return {
      name
    }
  }
})
</script>
