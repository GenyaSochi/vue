import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import HeaderComp from './components/HeaderComponent.vue'
import {router} from './routes'

// createApp(App).mount('#app')
const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('HeaderComp', HeaderComp )
