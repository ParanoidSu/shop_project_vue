import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import {requestCategoryList} from '@/api'
import store from '@/store'
import '@/mock/mockServer'
import 'swiper/css/swiper.css'
import Carousel from '@/components/carousel'

requestCategoryList()


Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
