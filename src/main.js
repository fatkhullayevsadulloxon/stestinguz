import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import uiComponents from './ui-components'

const app = createApp(App)

app.use(router)

app.mount('#app')
