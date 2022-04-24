import {requestCartList , requestDeleteCartList , requestChangCartState} from '@/api'


const state = {
    cartlist:[]
}
const mutations = {
    GETCARTLIST(state,cartlist){
        state.cartlist = cartlist
    }
}
const actions = {
    async getCartList({commit}){
        let result = await requestCartList()
        if (result.code ===200) {
            commit('GETCARTLIST',result.data)
        }
    },
    async deleteCarList({commit},skuId){
        let result = await requestDeleteCartList(skuId)
        if (result.code ===200) {
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
    async changeCartState({commit},{skuID,isChecked}){
        let result = await requestChangCartState(skuID,isChecked)
        if (result.code ===200) {
            return 'ok'
        }else{
            return Promise.reject(new Error('fail'))
        }
    },
    deleteAllCart({getters,dispatch}){
        let PromiseAll = []
        getters.cartlist.cartInfoList.forEach(item => {
            let promise =  item.isChecked ===1 ? dispatch('deleteCarList',item.skuId) : ''
            PromiseAll.push(promise)
        });
        return Promise.all(PromiseAll)
    },
    changeAllCartState({getters,dispatch},isChecked){
        let PromiseAll = []
        getters.cartlist.cartInfoList.forEach(item=>{
            let promise = dispatch('changeCartState',{skuID:item.skuId,isChecked})
            PromiseAll.push(promise)
        })
        return Promise.all(PromiseAll)
    }
}
const getters = {
   cartlist(state){
        return state.cartlist[0] || []
   },
   
}

export default {
    state,
    mutations,
    actions,
    getters,
}