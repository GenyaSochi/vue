<template>
<RouterLink class="view" to="/">Home</RouterLink><br>
<RouterLink to="/about">About</RouterLink><br>
<RouterLink to="/main">MainPage</RouterLink>
<RouterView></RouterView>

<ToDoList></ToDoList>
<!-- <UserInput></UserInput> -->
<HeaderComponent></HeaderComponent>
<VueCalc></VueCalc>
<!-- <DelegatedCalc></DelegatedCalc> -->
<StudentGroup></StudentGroup>
<hr>
<TestQuestions></TestQuestions>
<MessageForum></MessageForum>
<TextForm></TextForm>
<PlaceTrain></PlaceTrain>


</template>

<script setup lang="ts">
import ToDoList from '#root/components/ToDoList.vue'
// import UserInput from './components/UserInput.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import VueCalc from './components/VueCalc.vue'
// import DelegatedCalc from './components/DelegatedCalc.vue'
import StudentGroup from './components/StudentGroup.vue';
import TestQuestions from './components/TestQuestions.vue';
import MessageForum from './components/MessageForum.vue';
import TextForm from './components/TextForm.vue';
import PlaceTrain from './components/PlaceTrain.vue';

</script>

<style scoped>

</style>

