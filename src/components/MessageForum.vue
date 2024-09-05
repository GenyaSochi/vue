<template>
  <form class="form" @submit.prevent="">
    <p class="name"><span>Name</span><span>{{ date }}</span></p>
    <p class="input">Youe name: <input type="text" v-model="name" placeholder="Имя"
        style="width: 696px;"></p>
    <p class="input">Youe message: <input type="text"  v-model="message"
        placeholder="Сообщение" style="width: 674px;"></p>
    <button @click.prevent="addSave" style="width: 100%; background-color: darkgray;">Save</button>
  </form>
</template>


<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const message = ref('')

type chat = {
  name:string,
  message:string,
}

const newMessage = localStorage.arr ? JSON.parse(localStorage.arr) : [] as chat[]
const arr = ref(newMessage)

const date = new Date().toLocaleString()




const addSave = () => {
  if 
  
}



</script>

<style>
.form {
  width: 800px;
  height: 400px;
  background-color: #fbf2e9;
  padding: 20px;
  margin: 20px;
}

.name {
  display: flex;
  justify-content: space-between;
}

.input {
  display: flex;
  gap: 10px;
  width: 100%;

}
</style>