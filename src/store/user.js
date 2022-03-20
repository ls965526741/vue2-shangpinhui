import { getCode, register, login, logout, getUserInfo } from '@/api'
const state = {
  userInfo: {},
  token: localStorage.getItem('token') || ''
}
const mutations = {
  login(state, data) {
    state.userInfo = data
    state.token = data.token
  },
  logout(state) {
    localStorage.clear()
    state.userInfo = {}
  },
  getUserInfo(state, data) {
    state.userInfo = data
  }
}
const actions = {
  async getCode({ commit }, code) {
    const { data } = await getCode(code)
    return data.data
  },
  async register({ commit }, info) {
    const {
      data: { code }
    } = await register(info)
    if (code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error())
    }
  },
  async login({ commit }, info) {
    const {
      data: { code, data }
    } = await login(info)
    if (code === 200) {
      commit('login', data)
      localStorage.setItem('token', data.token)
      localStorage.setItem('userInfo', JSON.stringify(data))
    } else {
      return Promise.reject(new Error())
    }
  },
  async logout({ commit }) {
    await logout()
    commit('logout')
  },
  async getUserInfo({ commit }) {
    const { data } = await getUserInfo()
    if (data.code === 200) {
      commit('getUserInfo', data.data)
    } else if (data.code === 208) {
      localStorage.clear()
      location.reload()
    }
  }
}
const getters = {
  userName: state => state.userInfo?.nickName || ''
}
export default {
  state,
  mutations,
  actions,
  getters
}
