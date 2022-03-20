import Vue from 'vue'

import '@/mock'

import '@/utils/element'

import './veeValidae'

import 'swiper/css/swiper.css'

import TypeNav from '@/components/TypeNav'

import VueLazyload from 'vue-lazyload'

import Focus from './focus'
import Drag from './drag.js'

Vue.component('TypeNav', TypeNav)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/images/error.png',
  loading: '/images/error.png',
  attempt: 1
})
Vue.use(Focus)
Vue.use(Drag)
