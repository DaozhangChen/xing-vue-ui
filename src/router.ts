import {createRouter, createWebHashHistory} from "vue-router";
import HomePage from "./homepage/HomePage.vue";
import Introduction from "./homepage/Introduction.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/introduction', component: Introduction },
]

export const router=createRouter({
    history:createWebHashHistory(),
    routes
})