import {requestCategoryList} from '@/api'
import {requestBannerList} from '@/api'
import {requestFloorList} from '@/api'
const state = {
    categoryList:[],
    bannerList:[],
    floorList:[]
}
const mutations = {
    CATEGPRYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    BANNERLIST(state,bannerList){
       state.bannerList = bannerList
    },
    FLOORLIST(state,floorList){
        state.floorList = floorList
     },
}
const actions = {
    async getCategoryList({commit}){
        let result  = await requestCategoryList()
        if (result.code ===200) {
            commit('CATEGPRYLIST',result.data)
        }
    },
    async getBannerList({commit}){
        
        let result  = await requestBannerList()
        if (result.code ===200) {
            commit('BANNERLIST',result.data)
        }
    },
    async getFloorList({commit}){
        
        let result  = await requestFloorList()
        if (result.code ===200) {
            commit('FLOORLIST',result.data)
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters,
}