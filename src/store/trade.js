import { reqAddressInfo, reqOrderInfo } from '@/api'

const state = {
  address: [],
  orderInfo: {}
}
const mutations = {
  getUserAddress(state, data) {
    state.address = data
  },
  getOrderInfo(state, data) {
    state.orderInfo = data
  }
}
const actions = {
  async getUserAddress({ commit }) {
    const { data } = await reqAddressInfo()
    if (data.code === 200) {
      commit('getUserAddress', data.data)
    }
  },
  async getOrderInfo({ commit }) {
    const { data } = await reqOrderInfo()
    if (data.code === 200) {
      commit('getOrderInfo', data.data)
    }
  }
}
export default {
  state,
  mutations,
  actions
}
