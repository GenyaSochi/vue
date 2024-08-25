<template>
  <div class="journal">
    <div class="journal1">
      <div>Group:</div>
      <select style="width: 110px; height: 24px;" name="Group" text="groupStudent" id="1" v-model="select">
        <option value="Group1">Group 1</option>
        <option value="Group2">Group 2</option>
        <option value="Group3">Group 3</option>
      </select>
      <div class="journal2">Lesson:</div>
      <select style="width: 110px; height: 24px;" name="Lesson" text="lessonStudent" id="2" v-model="select1">
        <option value="Lesson1">1</option>
        <option value="Lesson2">2</option>
        <option value="Lesson3">3</option>
        <option value="Lesson4">4</option>
        <option value="Lesson5">5</option>    
      </select>
      <button style="background-color: #e1e1e1; width: 100px; height: 42px;" @click="">Select</button>
    </div>
    <hr>
    <div class="journal1">
      <div>Topic:</div>
      <input style="width: 432px;" type="text" v-model="message" text="massageLesson" placeholder="Lesson topic">
    </div>
    <div><span>Name</span><span>Is present</span>
    </div>
    <hr>
    <div>Student 1</div>
    <label>
      <input type="checkbox" v-model="checkbox1">
    </label>
    <hr>
    <div>Student 2</div>
    <label>
      <input type="checkbox" v-model="checkbox2">
    </label>
    <hr>
    <div>Student 3</div>
    <label>
      <input type="checkbox" v-model="checkbox3">
    </label>
    <hr>
    <button style="background-color: #e1e1e1; width: 500px; height: 42px;" @click="">Save</button>
  </div>
</template>


<script setup lang="ts">
import { computed, ref } from 'vue'

const message = ref('JS.Document object model')
const select = ref('')
const select1 = ref('')
const checkbox1 = ref('')
const checkbox2 = ref('')
const checkbox3 = ref('')
const localArr = localStorage.arr ? JSON.parse(localStorage.arr) : []
const studentArr = ref(localArr as any[])

const addArr = () => {
  if (!message.value) return
  studentArr.value.push(
    {}
  )
}



</script>

<style scoped>
.journal {
  display: contents;
  width: 600px;
  height: 400px;
}

.journal1 {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.journal2 {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

hr {
  width: 500px;
}
</style>