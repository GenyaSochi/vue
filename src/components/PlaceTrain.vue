<template>

  <div
    style="background-color: gainsboro; padding-top: 20px;border: 1px solid gray; margin: 20px 60px; border-radius: 4px;">
    <span style="padding-right: 10px;">Направление</span>
    <select style="width: 220px;" v-model="direction">
      <option v-for="val of directions" :key="val" :value="val">{{ val }}</option>
    </select>
    <label for="trainDate" style="padding: 0 12px;">Дата</label>
    <input type="date" v-model="choiceDate" style="margin-right: 40px;">
    <hr style="width: 90%;">


    <div v-if="schedule[direction]?.includes(choiceDate)">
      <p>
        <template v-for="i of 28" :key="i">
          <input v-if="i % 2 != 0" type="checkbox" :disabled="tikets[direction + '/' + choiceDate]?.includes(i)"
            :value="i" v-model="seat" style="width: 20px;">
          <span v-if="i % 2 != 0">{{ i }}</span>
        </template>
      </p>
      <p>
        <template v-for="i of 28" :key="i">
          <input v-if="i % 2 == 0" type="checkbox" :disabled="tikets[direction + '/' + choiceDate]?.includes(i)"
            :value="i" v-model="seat" style="width: 20px;">
          <span v-if="i % 2 == 0">{{ i }}</span>
        </template>
      </p>
    </div>
    <div v-else>
      <span>На выбранную дату нет поездов</span>
    </div>



    <table>
      <tbody>

        <tr>
          <th class="booking ">Направление</th>
          <th class="booking ">Дата</th>
          <th class="booking ">Место</th>
        </tr>
        <tr>
          <td>{{ direction }}</td>
          <td>{{ choiceDate }}</td>
          <td>{{ seat.toString() }}</td>
        </tr>
      </tbody>
    </table>

    <input type="radio" id="pl" value="platzcart" v-model="vagonType"><label for="pl">Плацкарт {{ costPlatzcart + '₽'
      }}</label>
    <input type="radio" id="cp" value="cupe" v-model="vagonType"><label for="cp">Купе {{ costCupe + '₽' }}</label>

    <div>Стоимость {{ cost + '₽' }}</div><br>

    <button @click="addTicket" style="width: 100px; border: 2px solid black;">Купить</button><br>
    <hr>

    <div>
      <h3>Купленные билеты</h3>
      <table>
        <tbody>
          <tr>
            <th class="booking">Направление</th>
            <th class="booking">Дата</th>
            <th class="booking">Место</th>
          </tr>
          <tr v-for="val, key in arr" :key="key">
            <td class="buy">{{ key.toString().split('/')[0] }}</td>
            <td class="buy">{{ key.toString().split('/')[1] }}</td>
            <td class="buy">{{ val.toString() }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script setup lang="ts">

import { ref, computed } from 'vue'

const schedule = {
  'Москва-Сочи': ['2024-10-02', '2024-10-04', '2024-10-06'],
  'Сочи-Москва': ['2024-10-02', '2024-10-04', '2024-10-06'],
  'Екатеринбург-Уфа': ['2024-10-03', '2024-10-05', '2024-10-07'],
  'Уфа-Екатеринбург': ['2024-10-03', '2024-10-05', '2024-10-07'],
} as Record<string, string[]>

const wagons = {
  'Москва-Сочи': [{ num: 1, type: 'platzcart' }, { num: 2, type: 'cupe' }],
  'Сочи-Москва': [{ num: 1, type: 'platzcart' }, { num: 2, type: 'cupe' }],
  'Екатеринбург-Уфа': [{ num: 1, type: 'platzcart' }, { num: 2, type: 'cupe' }],
  'Уфа-Екатеринбург': [{ num: 1, type: 'platzcart' }, { num: 2, type: 'cupe' }],
} as Record<string, any[]>

const directions = Object.keys(schedule) as string[]

const vagonType = ref('')
const direction = ref(directions[0])
const choiceDate = ref((new Date()).toLocaleDateString().split('.').reverse().join('-'))
const seat = ref([])
// const costSeat = 124
const costCupe = 162
const costPlatzcart = 124
const cupe = ref('')
const platzcart = ref('')

const cost = computed(() => {
  if (vagonType.value = platzcart.value) {
    return costPlatzcart * seat.value.length
  } else (vagonType.value = cupe.value)
  return costCupe * seat.value.length
})

const tikets = localStorage.tikets ? JSON.parse(localStorage.tikets) : {} as any
const arr = ref(tikets as any)

const addTicket = () => {
  if (!direction.value || !choiceDate.value) {
    alert('Не хватает данных для покупки')
  } else {
    if (!tikets[direction.value + '/' + choiceDate.value]) {
      tikets[direction.value + '/' + choiceDate.value] = seat.value
    } else {
      tikets[direction.value + '/' + choiceDate.value] = [...tikets[direction.value + '/' + choiceDate.value], ...seat.value]
    }
    localStorage.tikets = JSON.stringify(arr.value)
  }
  seat.value = []
  direction.value = ''
  choiceDate.value = ''
}



</script>


<style scoped>
.booking,
.buy {
  padding: 0 20px;
}
</style>
