import { search } from '@/api'

const state = {
  searchList: {}
}
const mutations = {
  search(state, data) {
    state.searchList = data
  }
}
const getters = {
  trademarkList: state => state.searchList.trademarkList,
  attrsList: state => state.searchList.attrsList,
  goodsList: state => state.searchList.goodsList
}
const actions = {
  async search({ commit }, payload = {}) {
    const { data } = await search(payload)
    if (data.code === 200) {
      commit('search', data.data)
    }
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
