import { detail, addCart } from '@/api'
import { getUUID } from '@/utils/uuid_token'

const state = {
  detailList: {},
  uuid_token: getUUID()
}
const mutations = {
  detail(state, data) {
    state.detailList = data
  }
}
const actions = {
  async detail({ commit }, payload = {}) {
    const {
      data: { data, code }
    } = await detail(payload)
    if (code === 200) {
      data.spuSaleAttrList.forEach(item =>
        item.spuSaleAttrValueList.forEach(item => {
          item.isActive = '0'
        })
      )
      commit('detail', data)
    }
  },
  async addCart({ commit }, payload) {
    const {
      data: { code }
    } = await addCart(payload)
    if (code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error())
    }
  }
}
const getters = {
  categoryView: state => state.detailList.categoryView || {},
  skuInfo: state => state.detailList.skuInfo || {},
  spuSaleAttrList: state => state.detailList.spuSaleAttrList || [{}, {}]
}
export default {
  state,
  mutations,
  actions,
  getters
}
