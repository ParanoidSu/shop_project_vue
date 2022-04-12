import {requestSearchInfo} from '@/api'

const state = {
    searchInfo:{}
}
const mutations = {
    GETSEARCHINFO(state,searchInfo){
        state.searchInfo = searchInfo
    }
}
const actions = {
    async getSearchInfo({ commit }, params = {}) {
        const result = await requestSearchInfo(params)
        if (result.code === 200) {
            commit('GETSEARCHINFO', result.data)
        }
    }
}
const getters = {
    goodsList(state){
        return state.searchInfo.goodsList || []
    },
    attrsList(state){
        return state.searchInfo.attrsList || []
    },
    trademarkList(state){
        return state.searchInfo.trademarkList || []
    },
}

export default {
    state,
    mutations,
    actions,
    getters,
}