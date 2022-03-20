import { cart } from '@/api'
const state = {
  cartList: []
}
const mutations = {
  cart(state, payload) {
    state.cartList = payload
  }
}
const actions = {
  async cart({ commit }) {
    const {
      data: { data, code }
    } = await cart()
    if (code === 200) {
      commit('cart', data)
    }
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
