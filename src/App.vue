<template>
<h1 @click="str+='!'">{{ str }}</h1>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const str = ref('Learn vue')
</script>
<style scoped>
h1{
  user-select: none;
}
</style>
