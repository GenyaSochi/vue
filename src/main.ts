import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import HeaderComp from './components/HeaderComponent.vue'
import {router} from './routes'
import { createPinia } from 'pinia'

// createApp(App).mount('#app')
const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.mount('#app')
app.component('HeaderComp', HeaderComp )
