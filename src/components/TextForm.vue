<template>
<div class="box">
  <input type="checkbox"><span>Bold</span>
  <input type="checkbox"><span>Underline</span>
  <input type="checkbox"><span>Italics</span>
  <input type="radio"><span>Left</span>
  <input type="radio"><span>Right</span>
  <input type="radio"><span>Jastify</span>
  <input style="width: 600px; height: 200px;" type="text">
  <div>
    <button class="show">Show text</button>
  </div>
</div>

</template>

<script setup lang="ts">

</script>

<style scoped>
.box {
  background-color: rgb(250, 214, 168);
  width: 840px;
  height: 400px;
  margin: 20px;


  border: 1px solid black;
}
.show {
  margin: 20px;
  
}


</style>