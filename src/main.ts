import { createApp } from 'vue'
import App from './App.vue'
import './var/reset.scss'
import './var/roots.scss'
import {router} from "./router";
import hljsVuePlugin from "@highlightjs/vue-plugin"
import hljs from "highlight.js/lib/common"
import typescript from "highlight.js/lib/languages/typescript"

hljs.registerLanguage('typescript',typescript)

const app = createApp(App)
      app.use(router)
      app.use(hljsVuePlugin)
      app.mount('#app')
