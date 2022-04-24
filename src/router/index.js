import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'

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


let router =  new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
      }
})

router.beforeEach( async (to,from,next) => { 
    let token = localStorage.getItem('TOKEN')
    let name = store.state.user.userInfo.name
    if (token) {
        // 登录情况下禁止用户跳转至登录页面
        if (to.path ==='/login') {
            next('/home')
        }else{  
            // 登录情况下用户跳转的不是登录界面 

            // 能获取到用户信息就直接放行
            if (name) {
                next()
            }else{
                try {
                     //获取不到用户信息需要再派发一次获取到用户信息
                    await store.dispatch("getUserInfo");
                    next()
                } catch (error) {
                    //token过期了 跳转到登录界面
                    await store.dispatch("userLogout")
                    next('/login')
                }
            }
        }
    }else{
        //未登录访问购物车跳转至登录界面
        let toPath = to.path
        if ( toPath.indexOf('/trade')!=-1 ||toPath.indexOf('/pay')!=-1||toPath.indexOf('/center')!=-1||toPath.indexOf('/shopcart')!=-1 || toPath.indexOf('/addcartsuccess') !=-1 ) {
            next('/login?redirect='+ toPath)
        }else{
            next()
        }
    
    }
 })

export default router