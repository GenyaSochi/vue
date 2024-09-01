<template>
  <h4>ТЕСТ</h4>
  <div class="test">
    <div v-for="question in questions">Вопрос: {{ question.question }}
    <div>Выберите один вариант ответа:  {{ question.answers }} 
      <input type="radio"> 
      <input type="radio">
      <input type="radio">
    </div>

    <button>Добавить ответ</button>
  </div>


  </div>

</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const questions = [
  { question: 'Сколько месяцев в году?', answers: [12 , 13, 3], rightAnswer: 12 },
  { question: 'Сколько сантиметров в метре?', answers: [100, 35, 200], rightAnswer: 100 },
]



</script>

<style scoped>
.test {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
}
</style>
