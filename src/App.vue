<template>
  <form @submit.prevent="add">
    <input v-model="message" placeholder="todo" />
  </form>
  <ul>
    <li :data-check="el.check" v-for="el of arr" :key="el.id">{{ el.text }} <button @click="check(el.id,1)">✔</button><button  @click="check(el.id,2)">🤢</button></li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const message = ref('')
const arr = ref([] as any[]) 

const add = () => {
  arr.value.push(
    { text: message.value, id: arr.value.length, check: 0 },
  )
  message.value = ''
}

const check = (id:number, check:number) => {
  const el = arr.value.find(el=>el.id==id)
  el.check = check
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
