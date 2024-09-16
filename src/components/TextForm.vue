<template>
  <div class="box">
    <input type="checkbox" value="bold" name="fontStyle" v-model="bold" style="font-weight: bold;" ">{{ styleText }}<span>Bold</span>
    <input type="checkbox" value="underline" name="fontStyle" v-model="underline" style="text-decoration: underline;"><span>Underline</span>
    <input type="checkbox" value="italics" name="fontStyle" v-model="italics" style="font-style: italic;"><span>Italics</span>
    <input type="radio" value="left" name="fontStyle" v-model="left" style="text-align: left;"><span>Left</span>
    <input type="radio" value="right" name="fontStyle" v-model="right" style="text-align: right;"><span>Right</span>
    <input type="radio" value="jastify" name="fontStyle" v-model="jastify" style="text-align: justify;"><span>Jastify</span>

    <input style="width: 600px; height: 200px;" type="text" v-model="text">
    <div>
      <button class="show">Show text</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const bold = ref('')
const underline = ref('')
const italics = ref('')
const left = ref('')
const right = ref('')
const jastify = ref('')
const text = ref('')
const styleText = ref('')


const localArr = localStorage.arr ? JSON.parse(localStorage.arr) : []
const arr = ref(localArr as any[])







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