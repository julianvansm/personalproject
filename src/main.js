import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Home from "./components/Home.vue";
import { createRouter, createWebHistory } from 'vue-router'
import Safe from "./components/Safe.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/safe',
        name: 'safe',
        component: Safe,
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
