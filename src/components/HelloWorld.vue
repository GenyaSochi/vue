<template>
  <h1>{{ msg }}{{ 1+1 }}</h1>

  <div class="card">
    <button type="button" :style="'color:#'+ color" @click="myClickFunc">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank">Vue Docs Scaling up Guide</a>.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const color = ref(555555)
const count = ref(0)
function myClickFunc(){
  count.value++
  color.value+=500
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
