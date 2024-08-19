<template>
  <form @submit.prevent="add">
    <input v-model="message" placeholder="todo" />
    <button @click="">remove</button>   
  </form>
  <ul>
    <li :data-check="el.check" v-for="el of arr" :key="el.id">{{ el.text }} 
      <span v-if="el.check == 0">
        <button @click="check(el.id,1)">✔</button>
        <button @click="check(el.id,2)">🤢</button>
      
      </span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref('')
const localArr = localStorage.arr ? JSON.parse(localStorage.arr) : []
const arr = ref(localArr as any[]) 


const add = () => {
  arr.value.push(
    { text: message.value, id: arr.value.length, check: 0 },
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
</style>
