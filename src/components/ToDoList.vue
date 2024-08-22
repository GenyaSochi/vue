<template>
  <div style="display: flex; justify-content: center; gap: 10px;">
    <form @submit.prevent="add">
      <input style="height: 21px;" v-model="message" type="text" placeholder="todo" />
    </form>
    <input style="height: 21px;" v-model="textSearch" type="text" placeholder="search">
    <select id="todo" v-model="select">
      <option value="All">Все</option>
      <option value="1">Выполненные</option>
      <option value="2">Отмененные</option>
      <option value="3">Удаленные</option>
    </select>
  </div>
  <ul>
    <li :data-check="el.check" v-for="el of compArr" :key="el.id">{{ el.text }}
      <span v-if="el.check == 0">
        <button @click="check(el.id, 1)">✔</button>
        <button @click="check(el.id, 2)">🤢</button>
        <button @click="check(el.id, 3)">remove</button>
      </span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const select = ref('All')
const message = ref('')
const localArr = localStorage.arr ? JSON.parse(localStorage.arr) : []
const arr = ref(localArr as any[])
const textSearch = ref('')

const add = () => {
  if (!message.value) return
  arr.value.push(
    { text: message.value, id: arr.value.length, check: 0 }
  )
  localStorage.arr = JSON.stringify(arr.value)
  message.value = ''
}

const check = (id: number, check: number) => {
  const el = arr.value.find(el => el.id == id)
  el.check = check
  localStorage.arr = JSON.stringify(arr.value)
}

const compArr = computed(() => {
  if (select.value == 'All') {
    if (textSearch.value) {
      return arr.value.filter(el => el.text.toLowerCase().includes(textSearch.value.toLowerCase()))
    }
    return arr.value
  }
  if (textSearch.value) {
    return arr.value.filter(el => el.text.toLowerCase().includes(textSearch.value.toLowerCase()) && el.check == parseInt(select.value))
  }
  return arr.value.filter(el => el.check == parseInt(select.value))
})
</script>


<style scoped>
[data-check="1"] {
  text-decoration: line-through;
}

[data-check="2"] {
  background-color: red;
}

[data-check="3"] {
  background-color: green;
}
</style>
