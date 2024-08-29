<template>
  <div>ТЕСТ</div>
    <input type="radio" name="radio" id="1" v-model="questions">
    <label for="" ></label>
    <input type="radio" name="radio" id="2" v-model="questions">
  

</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const questions = ref([
  {}

])

</script>


<style scoped>

</style>