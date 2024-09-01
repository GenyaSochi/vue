<template>
  <h4>ТЕСТ</h4>
  <div style="margin-bottom: 10px;" v-for="variant in variants">{{ variant.question }}
    <div style="margin-bottom: 10px;">Варианты ответов:</div>
    <p><input type="radio" name="radio">{{ variant.answer1 }}</p>
    <br>
    <p><input type="radio">{{ variant.answer2 }}</p>
  </div>
  <br>

  <div>
    <button style="padding: 10px;" @click="addCounter">Ответить</button>
  </div>
  <div>Количество правильных ответов: {{ counter }}</div>


</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const counter = ref(0)



const variants = [
  { id: 1, question: 'Сколько сантиметров метре?', answer1: 100, answer2: 200, correctAnswer: 100 },
  { id: 2, question: 'Сколько месяцев в году?', answer1: 13, answer2: 12, correctAnswer: 12 }
]
const addCounter = () => {
  counter.value++
}

let answer = (answers: any[]) => {
  answers.join(', ')
}

const correctAnswer = () => {
  if (answer = correctAnswer)
    counter.value += 1
}
</script>


<style scoped>
* {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
