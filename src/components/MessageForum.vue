<template>
  <form class="form" @submit.prevent="">
    <p class="name"><span>Chat</span><span>{{ date }}</span></p>
    <p class="input">Youe name: <input type="text" v-model="name" placeholder="Имя" style="width: 696px; "></p>
    <p class="input">Youe message: <input type="text" v-model="message" placeholder="Сообщение" style="width: 674px;">
    </p>
    <button @click="addSave" style="width: 100%; border: green solid 2px;">Отправить сообщение</button>
    <p>{{ name.toLocaleUpperCase() }}</p>
    <p>{{ message.toLocaleLowerCase() }}</p>
    <p class="mess"><span class="sms">Сообщение доставлено:</span> {{ delivery }}</p>
    <p style="font-weight: lighter;">Время доставки сообщения: {{ date }}</p>
    <button @click="deleteMess" style="border: red solid 2px;">Удалить сообщение</button>

  </form>
</template>

<script setup lang="ts">

import { ref } from 'vue'

let date = new Date().toLocaleString()
const name = ref('')
const message = ref('')
const delivery = ref('')

const newMessage = localStorage.arr ? JSON.parse(localStorage.arr) : [] as Chat[]
const arr = ref(newMessage as any[])

type Chat = {
  name: any[''],
  message: any[''],
}

const addSave = () => {
  if (message.value == '') {
    alert('Пустое сообщение')
  }else if(name.value == ''){
    alert('Введите имя')
  }else {
    arr.value.push({
      name: name.value, message: message.value
    })
    localStorage.arr = JSON.stringify(arr.value)
  }
  delivery.value = message.value
}

const deleteMess = () => {
  name.value = ''
  message.value = ''
  delivery.value = ''

}
</script>

<style scoped>
.form {
  width: 800px;
  height: 400px;
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