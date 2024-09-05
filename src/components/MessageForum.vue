<template>
  <form class="form" @submit.prevent="">
    <p class="name"><span>Name</span><span>{{ date }}</span></p>
    <p class="input">Youe name: <input type="text" :value="yourName" @input="inputYourName" placeholder="Имя"
        style="width: 696px;"></p>
    <p class="input">Youe message: <input type="text" :value="yuorMessage" @input="inputYourMessage"
        placeholder="Сообщение" style="width: 674px;"></p>
    <button @click.prevent="addSave" style="width: 100%; background-color: darkgray;">Save</button>
  </form>
</template>


<script setup lang="ts">
import { ref } from 'vue'

const yourName = ref('')
const yuorMessage = ref('')
const newMessage = localStorage
const newName = ref('')
const date = new Date()
date.getFullYear()



const addSave = () => {
  if (yourName.value != '' && yuorMessage.value != '')
    return newMessage
}

const inputYourName = (event: { target: { value: string; }; }) => {
  yourName.value = event.target.value

}

const inputYourMessage = (event: { target: { value: string }; }) => {
  yuorMessage.value = event.target.value
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