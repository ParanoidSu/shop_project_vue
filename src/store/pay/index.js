import {requestSubmitOrder} from '@/api'

const state = {
   
}
const mutations = {
    
}
const actions = {
    async getSubmitOrder({commit},{tradeNo,data}){
        let result = await requestSubmitOrder(tradeNo,data)
        console.log(result);
   }
}
const getters = {
  
}

export default {
    state,
    mutations,
    actions,
    getters,
}