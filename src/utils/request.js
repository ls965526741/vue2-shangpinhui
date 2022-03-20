import axios from 'axios'
import store from '@/store'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const request = axios.create({
  baseURL: '/api',
  timeout: 5000
})
request.interceptors.request.use(
  function (config) {
    if (store.state.detail.uuid_token) {
      config.headers.userTempId = store.state.detail.uuid_token
    }
    if (store.state.user.token) {
      config.headers.token = store.state.user.token
    }
    Nprogress.start()
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  function (response) {
    Nprogress.done()
    return response
  },
  function (error) {
    Nprogress.done()
    return Promise.reject(error)
  }
)
export default request
