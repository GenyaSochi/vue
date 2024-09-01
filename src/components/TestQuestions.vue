<template>
  <div>ТЕСТ</div>
    <input type="radio" name="radio" v-model="questions">    
    <input type="radio" name="radio" v-model="questions">
  

</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const questions = [
  {order: 1, question: 'Сколько сантиметров в метре?', answer:[100, 200], correctAnswer: 100},
  {order: 2, question: 'Сколько месяцев в году?', answer:[13, 12], correctAnswer: 12},
  {order: 3, question: 'Спутник планеты Земля это:?', answer:['Марс', 'Луна'], correctAnswer: 'Луна'}
]


</script>


<style scoped>

</style>