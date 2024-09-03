<template>
  <h4>ТЕСТ</h4>
  <div v-if="num<variants.length" style="margin-bottom: 10px;">
    {{num+1}}. {{ variants[num].question }}
    <div style="margin-bottom: 10px;">Варианты ответов:</div>
    <template v-for="ans of variants[num].answers" :key="ans">
      <p><input type="radio" :value="ans" v-model="answer" >{{ ans }}</p>
    </template>
  </div>
  <div v-else>Количество правильных ответов: {{ counter }}</div>

  <div>
    <button style="padding: 10px;border-radius: 1px;background-color: darkgray;" @click="addCounter">{{num==(variants.length-1)?'Finish':'Next'}}</button>
  </div>


</template>

<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)
const num = ref(0)
const answer = ref('')
const variants = [
  { question: 'Сколько сантиметров метре?', answers: ['100', '200'], correctAnswer: '100' },
  { question: 'Сколько месяцев в году?', answers: ['13', '12'], correctAnswer: '12' }
]

const addCounter = () => {
  if(answer.value == variants[num.value].correctAnswer) counter.value++
  num.value ++
}


</script>


<style scoped>
</style>
