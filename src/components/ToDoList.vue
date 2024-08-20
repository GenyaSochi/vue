<template>
  <div style="display: flex; justify-content: center; gap: 10px;">
    <form @submit.prevent="add">
      <input style="height: 21px;" v-model="message" placeholder="todo" />    
    </form>
    <select id="todo" v-model="select">
      <option value="All">Все</option>
      <option value="Completed">Выполненные</option>
      <option value="Cancelled">Отмененные</option>
      <option value="Deleted">Удаленные</option>
    </select>   
  </div>
  <ul>
    <li :data-check="el.check" v-for="el of arr" :key="el.id">{{ el.text }} 
      <span v-if="el.check == 0">
        <button @click="check(el.id,1)">✔</button>
        <button @click="check(el.id,2)">🤢</button>
        <button @click="check(el.id,3)">remove</button>      
      </span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const select = ref('All')
const message = ref('')
const localArr = localStorage.arr ? JSON.parse(localStorage.arr) : []
const arr = ref(localArr as any[]) 

const add = () => {
  arr.value.push(
    { text: message.value, id: arr.value.length, check: 0 }
  )

  localStorage.arr = JSON.stringify(arr.value)
  message.value = '' 
}

const check = (id:number, check:number) => {  
  const el = arr.value.find(el=>el.id==id) 
  el.check = check
  localStorage.arr = JSON.stringify(arr.value)   
}



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
