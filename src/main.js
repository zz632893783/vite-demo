import { createApp } from 'vue'
import router from '@/route.js'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './style/index.styl'

const app = createApp(App).use(router).use(ElementPlus).mount('#app')
