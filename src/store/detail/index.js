import {requestGoodInfo} from '@/api'
import {requestAddToCart} from '@/api'
import {getUUID} from '@/utils/getUUID'


const state = {
    goodInfo:{},
    UUID_TOKEN:getUUID()
}
const mutations = {
    GETGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo
    }
}
const actions = {
   async getGoodInfo ({commit},skuid) {
       let result = await requestGoodInfo(skuid)
       if (result.code ===200) {
           commit('GETGOODINFO',result.data)
       }
   },
   async AddToCart({commit},{skuId,skuNum}){
    let result = await requestAddToCart(skuId,skuNum)
    if (result.code  === 200) {
        return 'ok'
    }else{
        return Promise.reject(new Error('fail'))
    }
}
}
const getters = {
    categoryView(state){
        return state.goodInfo.categoryView || {}
    },
    skuInfo(state){
        return state.goodInfo.skuInfo || {}
    },
    skuSaleAttrValueList(){
        return state.goodInfo.spuSaleAttrList ||[]
    },
}

export default {
    state,
    mutations,
    actions,
    getters,
}