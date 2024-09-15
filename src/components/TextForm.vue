<template>
  <div class="box">
    <input type="checkbox" value="bold" name="fontStyle" v-model="message"><span>Bold</span>
    <input type="checkbox" value="underline" name="fontStyle" v-model="message"><span>Underline</span>
    <input type="checkbox" value="italics" name="fontStyle" v-model="message"><span>Italics</span>
    <input type="radio" value="left" name="fontStyle" v-model="message"><span>Left</span>
    <input type="radio" value="right" name="fontStyle" v-model="message"><span>Right</span>
    <input type="radio" value="jastify" name="fontStyle" v-model="message"><span>Jastify</span>

    <input style="width: 600px; height: 200px;" type="text">
    <div>
      <button class="show">Show text</button>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
const message = ref('')

const addText = ()=>{
  if(message.value != ''){
    
  }
}


</script>

<style scoped>
.box {
  background-color: #f8f3ea;
  width: 840px;
  height: 400px;
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