<template>
  <input @keyup.enter="changeName" v-model="name" placeholder="Введите имя пользователя" />
<p>{{ name }}</p>
</template>


<script setup lang="ts">
import {ref} from 'vue'
const name = ref('')
const changeName = (e:any) => {
  const target = e.target as HTMLInputElement
  const notNeed = '01234546789+-*|'
  let name = ''
  for (let el of target.value) {
    if (notNeed.includes(el)) continue
    name+=el
  }
  target.value = name
}
</script>


<style scoped>

</style>