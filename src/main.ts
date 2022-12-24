import { createApp } from 'vue'
import { App } from './App'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './config/routes'
import { history } from './shared/history'


const router = createRouter({ history, routes, })


// 声明
const app = createApp(App)
// 使用
app.use(router)
// 挂载
app.mount('#app')
