import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import MainPage from '#root/pages/MainPage.vue'


const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/main', component: MainPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export {router}