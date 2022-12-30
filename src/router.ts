import {createRouter, createWebHashHistory, RouteComponent, RouteLocation} from "vue-router";
import HomePage from "./homepage/HomePage.vue";
import Introduction from "./homepage/Introduction.vue";
import ButtonMainExample from "./example/buttonExample/Button.mainExample.vue"
import DialogMainExample from "./example/dialogExample/Dialog.mainExample.vue"
import SwitchMainExample from "./example/switchExample/Switch.mainExample.vue"
import TabMainExample from "./example/tabExample/Tab.mainExample.vue"

const routes = [
    { path: '/', component: HomePage },
    { path: '/introduction', component: Introduction ,children:[
            {path:'button',component:ButtonMainExample,props:true},
            {path:'dialog',component:DialogMainExample,props:true},
            {path:'switch',component:SwitchMainExample,props:true},
            {path:'tab',component:TabMainExample,props:true},
        ]},
]

export const router=createRouter({
    history:createWebHashHistory(),
    routes
})