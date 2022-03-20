import Vue from 'vue'
import store from '@/store'

import VueRouter from 'vue-router'
import Home from '@/pages/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      show: true
    }
  },
  {
    path: '/login',
    component: () => import('@/pages/Login'),
    meta: {
      show: false
    }
  },
  {
    path: '/register',
    component: () => import('@/pages/Register'),
    meta: {
      show: false
    }
  },
  {
    path: '/search/:keyword?',
    name: 'search',
    component: () => import('@/pages/Search'),
    meta: {
      show: true
    },
    props: true
  },
  {
    path: '/detail/:id?',
    name: 'detail',
    component: () => import('@/pages/Detail')
  },
  {
    path: '/addcart/:id?',
    component: () => import('@/pages/AddCartSuccess')
  },
  {
    path: '/shopcart',
    component: () => import('@/pages/ShopCart')
  },
  {
    path: '/trade',
    component: () => import('@/pages/Trade'),
    beforeEnter: (to, from, next) => {
      from.path === '/shopcart' || from.path === '/login' ? next() : next(false)
    }
  },
  {
    path: '/pay',
    component: () => import('@/pages/Pay'),
    beforeEnter: (to, from, next) => {
      from.path === '/trade' || from.path === '/login' ? next() : next(false)
    }
  },
  {
    path: '/paysuccess',
    component: () => import('@/pages/PaySuccess'),
    beforeEnter: (to, from, next) => {
      from.path === '/pay' || from.path === '/login' ? next() : next(false)
    }
  },
  {
    path: '/center',
    component: () => import('@/pages/Center'),
    children: [
      {
        path: '/center',
        redirect: '/center/myorder'
      },
      {
        path: '/center/myorder',
        component: () => import('@/pages/Center/MyOrder')
      },
      {
        path: '/center/other',
        component: () => import('@/pages/Center/Other')
      }
    ]
  }
]

// 改写VueRouter.prototype.push方法
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.name === 'detail') return { y: 0 }
  }
})
router.beforeEach((to, from, next) => {
  const token = store.state.user.token
  const userInfo = store.state.user.userInfo
  if (token) {
    if (Object.keys(userInfo).length === 0) {
      store.dispatch('getUserInfo')
    }
    to.path === '/login' ? next('/') : next()
  } else {
    const path = to.path
    if (path.includes('/pay') || path.includes('/trade') || path.includes('/center')) {
      next(`/login?redirect=${path}`)
    }
    next()
  }
})
export default router
