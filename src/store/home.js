import { reqCategoryList, reqBannerList, reqFloorList } from '@/api'

const state = {
  category: [],
  bannerList: [],
  floorList: []
}
const mutations = {
  categoryList(state, data) {
    state.category = data
  },
  bannerList(state, data) {
    state.bannerList = data
  },
  floorList(state, data) {
    state.floorList = data
  }
}
const actions = {
  async categoryList({ commit }) {
    const { data: { data, code } } = await reqCategoryList()
    if (code === 200) commit('categoryList', data)
  },
  async bannerList({ commit }) {
    const { data: { code, data } } = await reqBannerList()
    if (code === 200) { commit('bannerList', data) }
  },
  async floorList({ commit }) {
    const { data: { data, code } } = await reqFloorList()
    if (code === 200) { commit('floorList', data) }
  }
}

export default {
  state,
  mutations,
  actions
}
