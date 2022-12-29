import {createApp, h} from "vue";
import Dialog from "./Dialog.vue";

interface Options {
    title: string;
    content?: string;
    okClick?: () => void;
    cancelClick?: () => void;
    closeOnMask?:boolean
}
export const openDialog=(option:Options)=>{
    const {title,content,okClick,cancelClick,closeOnMask}=option
    const div = document.createElement("div");
    document.body.appendChild(div);
    const close=()=>{
        app.unmount()
        div.remove()
    }
    const app=createApp({
        render(){
            return h(
                Dialog,
                {
                    visible:true,
                    "onUpdate:visible":(newVisible:boolean)=>{
                        if(!newVisible){
                            close()
                        }
                    },
                    okClick,cancelClick,closeOnMask
                },
                {
                    title:()=>title,
                    content:()=>content
                }
            )
        }
    })
    app.mount(div)
}