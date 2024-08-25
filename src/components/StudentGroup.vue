<template>
  <div class="journal">
    <div>Group:</div>
    <select style="width: 110px; height: 24px;" name="Group" id="1" v-model="select">
      <option value="Group1">Group 1</option>
      <option value="Group2">Group 2</option>
      <option value="Group3">Group 3</option>
    </select>
    <div>Lesson:</div>
    <select style="width: 110px; height: 24px;" name="Lesson" id="2" v-model="select1">
      <option value="Lesson1">1</option>
      <option value="Lesson2">2</option>
      <option value="Lesson3">3</option>
      <option value="Lesson4">4</option>
      <option value="Lesson5">5</option>
      <option value="Lesson6">6</option>
    </select>
    <button style="background-color: #e1e1e1; width: 100px; height: 42px;">Select</button>
  </div>
  <hr>
  <div class="journal">
    <div>Topic:</div>
<input style="width: 400px;" type="text" v-model="message" placeholder="Lesson topic">
  </div>
  <div><span>Name</span><span>Is present</span>
  </div>
</template>


<script setup lang="ts">
import { computed, ref } from 'vue'

const message = ref('JS.Document object model')
const select = ref('')
const select1 = ref('')
</script>

<style scoped>
.journal {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
hr {
  width: 470px;
}


</style>