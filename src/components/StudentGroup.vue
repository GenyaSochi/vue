<template>
  <div class="inform">
    <select name="Group" id="1">
      <option value="Group1">Group 1</option>
      <option value="Group2">Group 2</option>
      <option value="Group3">Group 3</option>
    </select>
    <select name="Lesson" id="2">
      <option value="Lesson1">1</option>
      <option value="Lesson2">2</option>
      <option value="Lesson3">3</option>
      <option value="Lesson4">4</option>
      <option value="Lesson5">5</option>
      <option value="Lesson6">6</option>
    </select>
    <button>Select</button>
  </div>
</template>


<script setup lang="ts">
import { computed, ref } from 'vue'


</script>

<style scoped>
.inform {
  display: flex;
  justify-content: center;
  gap: 10px;
  height: 500px;
  background-color: #f8f3ea;
}
select {
  height: 30px;
  border-radius: 5px;
}
button {
  height: 30px;
  width: 80px;
  border-radius: 5px;
  background-color: #e1e1e1; 
}

</style>