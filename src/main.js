import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { nextTick } from 'vue'

createApp(App).use(nextTick).use(router).mount('#app')
