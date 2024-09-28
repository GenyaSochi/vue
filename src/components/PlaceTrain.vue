<template>

  <div
    style="background-color: gainsboro; padding-top: 20px;border: 1px solid gray; margin: 20px 60px; border-radius: 4px;">
    <span style="padding-right: 10px;">Direction:</span>
    <select style="width: 220px;" v-model="direction">
      <option>Москва-Сочи</option>
    </select>
   
    
    <label for="trainDate" style="padding: 0 12px;">Date:</label>
    <input type="date" v-model="choiceDate" style="margin-right: 40px;">  
    <hr style="width: 90%;">
    
    <div>
      <p>
        <template v-for="i of 28" :key="i">
          <input v-if="i%2!=0" type="checkbox" :disabled="tikets[direction+'/'+choiceDate]?.includes(i)" :value="i" v-model="seat" style="width: 20px;">
          <span v-if="i%2!=0">{{ i }}</span>
        </template>
      </p>
    </div>
    <div>
      <p>
        <template v-for="i of 28" :key="i">
          <input v-if="i%2==0" type="checkbox" :disabled="tikets[direction+'/'+choiceDate]?.includes(i)" :value="i" v-model="seat" style="width: 20px;">
          <span v-if="i%2==0">{{ i }}</span>
        </template>
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
        <td>{{ seat.toString() }}</td>
      </tr>
    </table>
    <button @click="addTicket" style="width: 100px; border: 2px solid black;">Book</button><br>
    <label>Total price: {{ cost + '$' }} </label>
    <hr>
    <span >Buy Ticket</span>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'

const direction = ref('')
const choiceDate = ref('')
const seat = ref([])
const cost = ref(0)
const cost1 = ref(0)


const tikets = localStorage.tikets ? JSON.parse(localStorage.tikets) : {} as any
const arr = ref(tikets as any)

// type BuyTicket = {
//   seat: any,
//   direction: string,
//   choiceDate: number,
// }

type direction = {
  newDirection: string,
}

const addTicket = () => {
  if (!direction.value || !choiceDate.value) {
    alert('Не хватает данных для покупки')
  } else {
    if (!tikets[direction.value+'/'+choiceDate.value]) {
      tikets[direction.value+'/'+choiceDate.value] = seat.value
    } else {
      tikets[direction.value+'/'+choiceDate.value] = [...tikets[direction.value+'/'+choiceDate.value], ...seat.value]
    }
    localStorage.tikets = JSON.stringify(arr.value)
  }
  seat.value = []
}

const totalTicket = () =>{
cost1.value = cost.value * 100
}

</script>


<style scoped></style>
