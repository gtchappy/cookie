import { createApp } from 'vue'
import { App } from './App'
import { Bar } from './views/Bar'
import { Foo } from './views/Foo'
import {createRouter,createWebHashHistory} from 'vue-router'


const routes = [
    { path: '/', component: Foo },
    { path: '/about', component: Bar },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })


// 申明
const app = createApp(App)
// 使用
app.use(router)
// 挂载
app.mount('#app')
