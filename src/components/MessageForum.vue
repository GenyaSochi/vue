<template>
  <form class="form">
    <p class="name"><span>Name</span><span>Time</span></p>
      <p class="input">Youe name: <input type="text" v-model="youeName" style="width: 696px;"></p>
      <p class="input">Youe message: <input type="text" v-model="yuorMessage" style="width: 674px;"></p>
      <button @click="addSave" style="width: 796px; background-color: darkgray;">Save</button>
  </form>
</template>


<script setup lang="ts">
import { ref } from 'vue'

const youeName = ref('')
const yuorMessage = ref('')
const newMessage = localStorage 


const addSave = () =>{
  if(youeName.value != '' && yuorMessage.value != '')
return newMessage

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

.name{
  display: flex;
  justify-content: space-between;
}

.input {
  display: flex;
  gap: 10px;
}

</style>