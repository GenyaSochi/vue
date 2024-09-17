<template>
  <form class="form" @submit.prevent="">
    <p class="name"><span>Chat</span><span>{{ date }}</span></p>
    <p class="input">Youe name: <input type="text" v-model="name" placeholder="Имя" style="width: 696px; "></p>
    <p class="input">Youe message: <input type="text" v-model="message" placeholder="Сообщение" style="width: 674px;">
    </p>
    <button @click="addSave" style="width: 100%; border: green solid 2px;">Отправить сообщение</button>
    <div v-for="el of arr" :key="el.uuid">
      <p>{{ el.name.toLocaleUpperCase() }}</p>
      <p>{{ el.message.toLocaleLowerCase() }}</p>
      <p class="mess"><span class="sms">Сообщение доставлено:</span> {{ el.time }}</p>
      <button @click="deleteMess(el.uuid)" style="border: red solid 2px;">Удалить сообщение</button>
    </div>

  </form>
</template>

<script setup lang="ts">

import { ref, onMounted, onBeforeUnmount } from 'vue'
import {v4} from 'uuid'

const date = ref(new Date().toLocaleString())
const name = ref('')
const message = ref('')

let timer:any

onMounted(()=>{
  timer = setInterval(()=>{date.value=new Date().toLocaleString()},1000)
})
onBeforeUnmount(()=>{
  clearInterval(timer)
})

const newMessage = localStorage.arr ? JSON.parse(localStorage.arr) : [] as Chat[]
const arr = ref(newMessage as Chat[])

type Chat = {
  uuid: string,
  name:string,
  message:string,
  time: string,
}

const addSave = () => {
  if (message.value == '') {
    alert('Пустое сообщение')
  }else if(name.value == ''){
    alert('Введите имя')
  }else {
    arr.value.push({
      name: name.value, message: message.value, time:new Date().toLocaleString(), uuid:v4()
    })
    localStorage.arr = JSON.stringify(arr.value)
  }
  name.value = ''
  message.value = ''
}

const deleteMess = (uuid:string) => {
  const i = arr.value.findIndex(el=>el.uuid==uuid)
  console.log(i)
  if (i!=-1) arr.value.splice(i,1)
  localStorage.arr = JSON.stringify(arr.value)
}
</script>

<style scoped>
.form {
  background-color: #fbf2e9;
  padding: 20px;
  margin: 20px;
  border: gray solid 1px;
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

.mess {
  color: red;
  font-weight: bold;
  font-style: italic;
}

.sms {
  color: green;
  font-weight: normal;
  font-size: large;
}
</style>