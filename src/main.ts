import { createApp } from 'vue'
import App from './App.vue'
import './var/reset.scss'
import './var/roots.scss'
import {router} from "./router";


const app = createApp(App)
      app.use(router)
      app.mount('#app')
