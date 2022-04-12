import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'

Vue.use(VueRouter)

let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location,resolve,reject) {
    if (resolve,reject) {
        originPush.call(this,location,resolve,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace = function (location,resolve,reject) {
    if (resolve,reject) {
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}


export default new VueRouter({
    routes: [
        {
            path:'/',
            redirect:'/home',
        },
        {
            path:'/home',
            name:'home',
            component:Home,
            meta:{showFooter:true}
        },
        {
            path:'/login',
            name:'login',
            component:Login,
            meta:{showFooter:false}
        },
        {
            path:'/register',
            name:'register',
            component:Register,
            meta:{showFooter:false}
        },
        {
            path:'/search/:keyword?',
            name:'search',
            component:Search,
            meta:{showFooter:true}
        },
    ]
})