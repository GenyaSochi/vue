<template>
  <div class="journal">
    <div class="journal1">
      <div>Group:</div>
      <select style="width: 110px; height: 24px;" name="Group" text="text" v-model="groupSt">
        <option value="Group1">Group 1</option>
        <option value="Group2">Group 2</option>
        <option value="Group3">Group 3</option>
      </select>

      <div class="journal2">Lesson:</div>
      <select style="width: 110px; height: 24px;" name="Lesson" text="text1" v-model="lessonSt">
        <option value="Lesson1">1</option>
        <option value="Lesson2">2</option>
        <option value="Lesson3">3</option>
        <option value="Lesson4">4</option>
        <option value="Lesson5">5</option>
      </select>

      <button style="background-color: #e1e1e1; width: 100px; height: 42px;" @click="addInfo">Select</button>
    </div>
    <hr>

    <div class="journal1">
      <div>Topic:</div>
      <form>
        <input style="width: 432px;" type="text" v-model="lessonTopic" text="massageLesson" placeholder="Lesson topic">
      </form>
    </div>
    <div><span>Name</span><span>Is present</span>
    </div>
    <hr>
    <div @submit.prevent="addStudentArr">
      <div>Student 1
        <label>
          <input type="checkbox" v-model="checkbox1" text="present">
        </label>
      </div>
      <hr>
      <div>Student 2
        <label>
          <input type="checkbox" v-model="checkbox2" text="present">
        </label>
      </div>
      <hr>
      <div>Student 3
        <label>
          <input type="checkbox" v-model="checkbox3" text="prersent">
        </label>
      </div>
    </div>
    <hr>
    <button style="background-color: #e1e1e1; width: 500px; height: 42px;" @click="saveInfo">Save</button>
  </div>
</template>


<script setup lang="ts">
import { computed, ref } from 'vue'

const groupSt = ref('')
const lessonSt = ref('')
const lessonTopic = ref('JS.Document object model')
const checkbox1 = ref('present')
const checkbox2 = ref('')
const checkbox3 = ref('')
const localArr = localStorage.arr ? JSON.parse(localStorage.arr) : []
const studentArr = ref(localArr as any[])

const addInfo = () => {

}

const saveInfo = () => {

}

const compInfo = computed(() => {

})



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