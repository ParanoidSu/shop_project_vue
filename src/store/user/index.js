import {requestGetCode,requestUserRegister,requestUserLogin,requestUserInfo,requestLogout} from '@/api'
import {getToken,setToken,removeToken} from '@/utils/getToken'

const state = {
    code : "",
    token :getToken(),
    userInfo:{}
}
const mutations = {
    GETCODE(state,code){
        state.code = code
    },
    USERLOGIN(state,token){
        state.token = token
    },
    GETUSERFINFO(state,userInfo){
        state.userInfo = userInfo
    },
}
const actions = {
    async getCode({commit},phone){
        let result = await requestGetCode(phone)
        if (result.code ===200) {
            commit('GETCODE',result.data)
            return 'ok'
        }else{
            Promise.reject(new Error('fail'))
        }
    },
    async userRegister({commit},user){
    let result = await requestUserRegister(user)
    console.log(result);
    if (result.code ===200) {
        return 'ok'
    }else{
        Promise.reject(new Error('fail'))
    }
    },
    async userLogin({commit},user){
        let result = await requestUserLogin(user)
        if (result.code ===200) {
            commit('USERLOGIN',result.data.token)
            setToken(result.data.token)
            return 'OK'
        }else{
            Promise.reject(new Error('fail'))
        }
    },
    async getUserInfo({commit}){
        let result = await requestUserInfo(commit)
        if (result.code ==200) {
            commit('GETUSERFINFO',result.data)
        }
    },
    async userLogout() {
       await removeToken();
    },
}
const getters = {
  
}

export default {
    state,
    mutations,
    actions,
    getters,
}