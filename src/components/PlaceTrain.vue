<template>

  <div
    style="background-color: gainsboro; padding-top: 20px;border: 1px solid gray; margin: 20px 60px; border-radius: 4px;">
    <span style="padding-right: 10px;">Direction:</span>
    <select style="width: 220px;" v-model="direction">
      <option>Москва-Сочи</option>
      <option>Екатеринбург-Новосибирск</option>
      <option>Казань-Иркутск</option>
    </select>
    <label for="trainDate" style="padding: 0 12px;">Date:</label>
    <input type="date" v-model="choiceDate" style="margin-right: 40px;">
    <button @click="addTiket" style="width: 100px; border: 2px solid black;">Search</button>
    <hr style="width: 90%;">

    <div>
      <p>
        <input type="checkbox" id="1" style="width: 20px;">1
        <input type="checkbox" id="3" style="width: 20px;">3
        <input type="checkbox" id="5" style="width: 20px;">5
        <input type="checkbox" id="7" style="width: 20px;">7
        <input type="checkbox" id="9" style="width: 20px;">9
        <input type="checkbox" id="11" style="width: 18px;">11
        <input type="checkbox" id="13" style="width: 18px;">13
        <input type="checkbox" id="15" style="width: 18px;">15
        <input type="checkbox" id="17" style="width: 18px;">17
        <input type="checkbox" id="19" style="width: 18px;">19
        <input type="checkbox" id="21" style="width: 18px;">21
        <input type="checkbox" id="23" style="width: 18px;">23
        <input type="checkbox" id="25" style="width: 18px;">25
        <input type="checkbox" id="27" style="width: 18px;">27
      </p>
    </div>
    <div>
      <p>
        <input type="checkbox" id="2" style="width: 20px;">2
        <input type="checkbox" id="4" style="width: 20px;">4
        <input type="checkbox" id="6" style="width: 20px;">6
        <input type="checkbox" id="8" style="width: 20px;">8
        <input type="checkbox" id="10" style="width: 18px;">10
        <input type="checkbox" id="12" style="width: 18px;">12
        <input type="checkbox" id="14" style="width: 18px;">14
        <input type="checkbox" id="16" style="width: 18px;">16
        <input type="checkbox" id="18" style="width: 18px;">18
        <input type="checkbox" id="20" style="width: 18px;">20
        <input type="checkbox" id="22" style="width: 18px;">22
        <input type="checkbox" id="24" style="width: 18px;">24
        <input type="checkbox" id="26" style="width: 18px;">26
        <input type="checkbox" id="28" style="width: 18px;">28
      </p>
    </div>
    <table>
      <tr>
        <th>Direction</th>
        <th>Date</th>
        <th>Seat</th>
      </tr>
      <tr>
        <td>{{ direction }}</td>
        <td>{{ choiceDate }}</td>
        <td>{{ seat }}</td>
      </tr>
    </table>
    <label for="trainDate">Total price: {{ cost }}</label>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'

const direction = ref('')
const choiceDate = ref('')
const seat = ref('')
const cost = ref('124$')


const tiket = localStorage.textArr ? JSON.parse(localStorage.textArr) : [] as BuyTiket[]
const arr = ref(tiket as BuyTiket[])

type BuyTiket = {
  seat: any,
}

const addTiket = () => {
  if (!direction.value || !choiceDate.value) {
    alert('Не хватает данных для покупки')
  } else {
    arr.value.push({
      seat: seat.value
    })
    localStorage.textArr = JSON.stringify(arr.value)
  }
  seat.value = ''
}
</script>


<style scoped></style>
