import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import HeaderComp from './components/HeaderComponent.vue'


// createApp(App).mount('#app')
const app = createApp(App)
app.mount('#app')
app.component('HeaderComp', HeaderComp )
