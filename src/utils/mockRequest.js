import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const mockReq = axios.create({
  baseURL: '/mock',

  timeout: 5000
})
mockReq.interceptors.request.use(function (config) {
  Nprogress.start()
  return config
}, function (error) {
  return Promise.reject(error)
})

mockReq.interceptors.response.use(function (response) {
  Nprogress.done()
  return response
}, function (error) {
  Nprogress.done()
  return Promise.reject(error)
})
export default mockReq
