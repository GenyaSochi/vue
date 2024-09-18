<template>
  <div style="background-color: gainsboro; padding-top: 20px;">
    <span style="padding-right: 10px;">Direction:</span>
    <select style="width: 220px;">
      <option>Москва-Сочи</option>
      <option>Казань-Новосибирск</option>
      <option>Иркутск-Екатеринбург</option>
    </select>
    <label for="trainDate" style="padding: 0 12px;">Date:</label>
    <input type="date" id="trainDate" value="newDate" style="margin-right: 40px;">
    <button style="width: 100px; border: 2px solid black;">Search</button>
    <hr style="width: 90%;">
    <div style="border: 1px solid gray; margin: 20px 60px; border-radius: 4px;padding-top: 20px;">
      <div>
        <div>

        </div>
        <span class="place">
          <input type="checkbox" id="1" style="width: 20px;">1
        </span>
        <span class="place">
          <input type="checkbox" id="3" style="width: 20px;">3
        </span>
        <span style="margin: 1px;"></span>
        <span class="place">
          <input type="checkbox" id="5" style="width: 20px;">5
        </span>
        <span class="place">
          <input type="checkbox" id="7" style="width: 20px;">7
        </span>
        <span style="margin: 1px;"></span>
        <span class="place">
          <input type="checkbox" id="9">9
        </span>
        <span class="place">
          <input type="checkbox" id="11" >11
        </span>
        <span style="margin: 1px;"></span>
        <span class="place">
          <input type="checkbox" id="13" >13
        </span>
        <span class="place">
          <input type="checkbox" id="15" >15
        </span>
        <span style="margin: 1px;"></span>
        <span class="place">
          <input type="checkbox" id="17" >17
        </span>
        <span class="place">
          <input type="checkbox" id="19" >19
        </span>
        <span style="margin: 1px;"></span>
        <span class="place">
          <input type="checkbox" id="21">21
        </span>
        <span class="place">
          <input type="checkbox" id="23" >23
        </span>
        <span style="margin: 1px;"></span>
        <span class="place">
          <input type="checkbox" id="25" >25
        </span>
        <span class="place">
          <input type="checkbox" id="27" >27
        </span>
      </div>
      <div>
        <span class="place">
          <input type="checkbox" id="2" >2
        </span>
        <span class="place">
          <input type="checkbox" id="4">4
        </span>
        <span style="margin: 1px;"></span>
        <span class="place">
          <input type="checkbox" id="6">6
        </span>
        <span class="place">
          <input type="checkbox" id="8">8
        </span>
        <span style="margin: 1px;"></span>
        <span class="place">
          <input type="checkbox" id="10">10
        </span>
        <span class="place">
          <input type="checkbox" id="12">12
        </span>
        <span style="margin: 1px;"></span>
        <span class="place">
          <input type="checkbox" id="14">14
        </span>
        <span class="place">
          <input type="checkbox" id="16">16
        </span>
        <span style="margin: 1px;"></span>
        <span class="place">
          <input type="checkbox" id="18">18
        </span>
        <span class="place">
          <input type="checkbox" id="20">20
        </span>
        <span style="margin: 1px;"></span>
        <span class="place">
          <input type="checkbox" id="22">22
        </span>
        <span class="place">
          <input type="checkbox" id="24">24
        </span>
        <span style="margin: 1px;"></span>
        <span class="place">
          <input type="checkbox" id="26">26
        </span>
        <span class="place">
          <input type="checkbox" id="28" style="width: 20px;">28
        </span>

      </div>
    </div>


  </div>


</template>
<script setup lang="ts">
import { ref } from 'vue'
</script>
<style scoped>
.place {
  border: 1px solid gray;
 
}
</style>