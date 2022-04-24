import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'
import Detail from '@/views/Detail'
import AddCartSuccess from '@/views/AddCartSuccess'
import ShopCart from '@/views/ShopCart'
import Trade from '@/views/Trade'
import Pay from '@/views/Pay'
import PaySuccess from '@/views/PaySuccess'
import Center from '@/views/Center'
import MyOrder from '@/views/Center/MyOrder'
import GroupOrder from '@/views/Center/GroupOrder'

export default  [
    {
        path:'/',
        redirect:'/home',
    },
    {
        path:'/home',
        name:'home',
        component:()=>import('@/views/Home'),
        meta:{showFooter:true}
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('@/views/Login'),
        meta:{showFooter:false}
    },
    {
        path:'/register',
        name:'register',
        component:()=>import('@/views/Register'),
        meta:{showFooter:false}
    },
    {
        path:'/search/:keyword?',
        name:'search',
        component:()=>import('@/views/Search'),
        meta:{showFooter:true}
    },
    {
        path:'/detail/:skuid',
        name:'detail',
        component:()=>import('@/views/Detail'),
        meta:{showFooter:true},
    },
    {
        path:'/addcartsuccess',
        name:'addcartsuccess',
        component:()=>import('@/views/AddCartSuccess'),
        meta:{showFooter:true},
    },
    {
        path:'/shopcart',
        name:'shopcart',
        component:()=>import('@/views/ShopCart'),
        meta:{showFooter:true},
    },
    {
        path:'/trade',
        name:'trade',
        component:()=>import('@/views/Trade'),
        meta:{showFooter:true},
        beforeEnter: (to, from, next) => {
            if(from.path === '/shopcart'){
                next()
            }else{
                next(false)
            }
        },
    },
    {
        path:'/pay',
        name:'pay',
        component:()=>import('@/views/Pay'),
        meta:{showFooter:true},
        beforeEnter: (to, from, next) => {
            if(from.path === '/trade'){
                next()
            }else{
                next(false)
            }
        },
    },
    {
        path:'/paysuccess',
        name:'paysuccess',
        component:()=>import('@/views/PaySuccess'),
        meta:{showFooter:true},
        beforeEnter: (to, from, next) => {
            if(from.path === '/pay'){
                next()
            }else{
                next(false)
            }
        },
    },
    {
        path:'/center',
        name:'center',
        component:()=>import('@/views/Center'),
        meta:{showFooter:true},
        redirect:'/center/myorder',
        children:[
            {
                path:'myorder',
                name:'myorder',
                component:MyOrder
            },
            {
                path:'grouporder',
                name:'grouporder',
                component:GroupOrder
            },
        ]
    },
]