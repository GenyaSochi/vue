<template>
  <h1 v-if="bool" @click="str += '!'">{{ str }}</h1>
  <h1 v-else @click="str += '!'">{{ str.split('').reverse().join('') }}</h1>
  <button v-on:click="myFunc" :style="'color:' + color">Reverse</button>
  <p></p>
  <input v-model="message" />
</template>

<script setup lang="ts">
import { ref } from 'vue'


const str = ref('Learn vue')
const bool = ref(true)
const color = ref('red')
const message = ref('')


const myFunc = () => {
  bool.value = !bool.value
  color.value += 500
  console.log(message.value)
  message.value = '' 
}
</script>

<style scoped>
h1 {
  user-select: none;
}


</style>
