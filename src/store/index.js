import Vue from 'vue'
import Vuex from 'vuex'
import home from './home.js'
import search from './search.js'
import detail from './detail.js'
import cart from './cart.js'
import user from './user.js'
import trade from './trade.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    search,
    detail,
    cart,
    user,
    trade
  }
})
