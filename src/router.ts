import {createRouter, createWebHashHistory} from "vue-router";
import HomePage from "./homepage/homePage.vue";
import Introduction from "./homepage/introduction.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/introduction', component: Introduction },
]

export const router=createRouter({
    history:createWebHashHistory(),
    routes
})