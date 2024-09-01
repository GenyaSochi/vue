<template>
  <div class="view">
    <div class="journal1">
      <div>Group:</div>

      <select style="width: 110px; height: 24px;" name="Group" text="text" v-model="groupSt">
        <option v-for="el of groups" :value="el" :key="el">{{ el }}</option>
      </select>

      <div class="journal2">Lesson:</div>
      <select style="width: 110px; height: 24px;" name="Lesson" text="text1" v-model="lessonSt">
        <option v-for="el of lessons" :value="el" :key="el">{{ el }}</option>
      </select>

      <button
        style="background-color: #e1e1e1; width: 100px; height: 42px; background-color: gray; border-color: black;"
        @click="addInfo">Select</button>
    </div>
    <hr>

    <div class="journal1">
      <div>Topic: {{ currentSubject }}</div>
      <form v-if="!currentSubject">
        <input style="width: 432px;" type="text" v-model="lessonTopic" text="massageLesson" placeholder="Lesson topic">
        <button
          style="background-color: #e1e1e1; width: 100px; height: 42px;padding: 10px; margin: 10px; background-color: gray; border-color: black;"
          @click.prevent="saveInfo">Save</button>
      </form>
    </div>
    <div><span>Name</span><span>Is present</span></div>
    <hr style="width: 698;">
    <template v-for="el of currentGroup" :key="el.id">
      <div>{{ el.name }}
        <label>
          <input type="checkbox" :disabled="currentState" v-model="el.checked" text="present">
        </label>
      </div>    
    </template>
  </div>
</template>


<script setup lang="ts">
import { computed, ref } from 'vue'

const groupSt = ref('')
const lessonSt = ref('')
const lessonTopic = ref('')

const studentArr = ref([
  { name: 'student1', group: 'group1', id: 1 },
  { name: 'student3', group: 'group1', id: 3 },
  { name: 'student6', group: 'group1', id: 6 },
  { name: 'student2', group: 'group2', id: 2 },
  { name: 'student7', group: 'group2', id: 7 },
  { name: 'student4', group: 'group3', id: 4 },
  { name: 'student5', group: 'group3', id: 5 },
])
const groups = ref([] as string[])
for (let el of studentArr.value) {
  if (!groups.value.includes(el.group)) groups.value.push(el.group)
}
groups.value.sort((a, b) => a.localeCompare(b))
const lessonsArr = ref([
  { number: 2, group: 'group1', id: 1 },
  { number: 3, group: 'group1', id: 3 },
  { number: 4, group: 'group1', id: 6 },
  { number: 4, group: 'group2', id: 2 },
  { number: 5, group: 'group2', id: 7 },
  { number: 1, group: 'group3', id: 4 },
  { number: 2, group: 'group3', id: 5 },
])
const lessons = computed(() => {
  if (!groupSt.value) return []
  const groupLessons = lessonsArr.value.filter(el => el.group == groupSt.value).map(el => el.number)
  groupLessons.sort((a, b) => a - b)
  return groupLessons
})

type JornalLine = {
  lesson: number,
  lessonName: string,
  group: string,
  students: any[],
  disabled: boolean
}

const jornal = ref([] as JornalLine[])

const currentGroup = computed(() => {
  const selected = jornal.value.find(el => el.group == groupSt.value && el.lesson == +lessonSt.value)
  if (selected) {
    return selected.students
  }
  return []
})
const currentState = computed(() => {
  const selected = jornal.value.find(el => el.group == groupSt.value && el.lesson == +lessonSt.value)
  if (selected) {
    return selected.disabled
  }
  return false
})
const currentSubject = computed(() => {
  const selected = jornal.value.find(el => el.group == groupSt.value && el.lesson == +lessonSt.value)
  if (selected) {
    return selected.lessonName
  }
  return ''
})

const addInfo = () => {
  const selected = jornal.value.find(el => el.group == groupSt.value && el.lesson == +lessonSt.value)
  if (!selected) {
    const tempStArr = studentArr.value.filter(el => el.group == groupSt.value).map(el => ({ ...el, checked: false }))
    jornal.value.push({
      lesson: +lessonSt.value,
      lessonName: '',
      group: groupSt.value,
      students: tempStArr,
      disabled: false,
    })
  }
}
const saveInfo = () => {
  const selected = jornal.value.find(el => el.group == groupSt.value && el.lesson == +lessonSt.value)
  if (selected) {
    selected.lessonName = lessonTopic.value
    selected.disabled = true
  } else {
    alert('Select lesson first')
  }
  lessonTopic.value = ''
}
</script>

<style scoped>
.view {
  width: 700px;
  height: 300px;
  margin-top: 20px;
  padding-top: 20px;
  background-color: rgb(223, 216, 216);
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

</style>