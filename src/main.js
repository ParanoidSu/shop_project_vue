import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
// import {requestCategoryList} from '@/api'
import store from '@/store'
import '@/mock/mockServer'
import 'swiper/css/swiper.css'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import * as api from '@/api'
import {MessageBox} from 'element-ui'

// requestCategoryList()


Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
//引入element-ui 的messagebox
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = api
  },
}).$mount('#app')
