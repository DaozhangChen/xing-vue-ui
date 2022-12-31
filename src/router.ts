import {createRouter, createWebHashHistory, RouteComponent, RouteLocation} from "vue-router";
import HomePage from "./homepage/HomePage.vue";
import Introduction from "./homepage/Introduction.vue";
import ButtonMainExample from "./example/buttonExample/Button.mainExample.vue"
import DialogMainExample from "./example/dialogExample/Dialog.mainExample.vue"
import SwitchMainExample from "./example/switchExample/Switch.mainExample.vue"
import TabMainExample from "./example/tabExample/Tab.mainExample.vue"
import Usage from "./example/usage.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/introduction', component: Introduction ,children:[
            {path:'',redirect:'/introduction/usage'},
            {path:'button',component:ButtonMainExample},
            {path:'dialog',component:DialogMainExample},
            {path:'switch',component:SwitchMainExample},
            {path:'tab',component:TabMainExample},
            {path:'usage',component:Usage},
        ]},
]

export const router=createRouter({
    history:createWebHashHistory(),
    routes
})