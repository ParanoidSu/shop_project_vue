import {requestUserAddressLise,requestOrderList,reqSubmitOrder} from '@/api'


const state = {
    addressList:[],
    orderlist:{}
}
const mutations = {
    GETUSERADDRESSLIST(state,addressList){
        state.addressList = addressList
    },
    GETORDERLIST(state,orderlist){
        state.orderlist = orderlist
    }
}
const actions = {
    async getUserAddressList({commit}){
        let result = await requestUserAddressLise()
        if (result.code ===200) {
            commit('GETUSERADDRESSLIST',result.data)
        }
    },
    async getOrderList({commit}){
        let result = await requestOrderList()
        if (result.code ===200) {
            commit('GETORDERLIST',result.data)
        }
    },
    async getSubmitOrder({commit},{tradeNo,data}){
        let result = await reqSubmitOrder(tradeNo,data)
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