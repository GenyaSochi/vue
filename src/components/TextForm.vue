<template>
  <div class="box">
    <input type="checkbox" value="font-weight: bold;" v-model="font"><span>Bold</span>
    <input type="checkbox" value="text-decoration: underline;" v-model="font"><span>Underline</span>
    <input type="checkbox" value="font-style: italic;"  v-model="font"><span>Italics</span>
    <input type="radio" value="text-align: left;" v-model="align"><span>Left</span>
    <input type="radio" value="text-align: right;" v-model="align"><span>Right</span>
    <input type="radio" value="text-align: justify;" v-model="align"><span>Jastify</span>
    <textarea :style="'width: 90%; height: 200px; resize:none'+font.join('')+align" type="text" v-model="text"></textarea>
    <div>
      <button @click="addText" class="show">Show text</button>
     
    </div>
  </div>
  <div v-for="el of arr" :key="el.text" :style="el.style">{{ el.text }}</div>
  
</template>

<script setup lang="ts">
import { ref } from 'vue'

const font = ref([])
const align = ref('')
const text = ref('')

const texts = localStorage.textArr ? JSON.parse(localStorage.textArr) : [] as newText[]
const arr = ref(texts as newText[])

type newText = {
  text: string,
  style: string,
}

const addText = ()=>{
  if(!text.value){
    alert('Введите текст')
  }else {
    arr.value.push({
      text: text.value, style: font.value.join('') + align.value
    })
  }
  localStorage.textArr = JSON.stringify(arr.value)
  text.value = ''
  align.value = ''
  font.value = []
}

</script>

<style scoped>
.box {
  background-color: #f8f3ea; 
  margin: 20px;
  border: 1px solid rgb(177, 172, 172);
}

.show {
  margin: 20px;
  color: rgb(122, 9, 9);
  background-color: #f8f3ea;
  border: 2px solid rgb(122, 9, 9);
}
</style>