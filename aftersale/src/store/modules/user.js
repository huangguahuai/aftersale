 
import { getToken, setToken, removeToken, getName, setUserInfo, getAccount,removeUserInfo } from '@/utils/cookies'
 

const state = {
  token: getToken(),
  name: getName(), 
  account: getAccount(), 
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_ACCOUNT(state, account) {
    state.account = account
  }, 
}

const actions = {

  // 获取用户信息，保存 token 
  setUserInfo(context, e) { 
    return new Promise((resolve) => {
      context.commit('SET_TOKEN', e.token)
      setToken(e.token)
      setUserInfo(e)
      context.commit('SET_NAME', e.data.name) 
      context.commit('SET_ACCOUNT', e.data.account) 
      resolve()
    })
  },

  // 退出系统
  logout({ commit }) {
    commit('SET_TOKEN', '')
    commit('SET_NAME', '') 
    commit('SET_ACCOUNT', '')
    removeToken()
    removeUserInfo() 
  },
    
  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_NAME', '')
      commit('SET_ACCOUNT', '')
      removeToken()
      removeUserInfo()
      resolve()
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
