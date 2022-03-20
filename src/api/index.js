import request from '@/utils/request'
import mockReq from '@/utils/mockRequest'

// export const reqCategoryList = () => request({ url: '/product/getBaseCategoryList', method: 'get' })
export const reqCategoryList = () => mockReq({ url: '/baseCategoryList', method: 'get' })

export const reqBannerList = () => mockReq({ url: '/banner', method: 'get' })

export const reqFloorList = () => mockReq({ url: '/floor', method: 'get' })

export const search = data => request({ url: '/list', method: 'post', data })

// export const detail = (data) => request({ url: `/item/${data}`, method: 'get' })
export const detail = () => mockReq({ url: '/item', method: 'get' })

export const addCart = ({ skuID, skuNum }) => request({ url: `/cart/addToCart/${skuID}/${skuNum}`, method: 'post' })

// export const cart = () => request({ url: '/cart/cartList', method: 'get' })
export const cart = () => mockReq({ url: '/cartList', method: 'get' })

export const getCode = phone => request({ url: `/user/passport/sendCode/${phone}`, method: 'get' })

export const register = data => request({ url: '/user/passport/register', method: 'post', data })

export const login = data => request({ url: '/user/passport/login', method: 'post', data })

export const logout = data => request({ url: '/user/passport/logout', method: 'get', data })

export const getUserInfo = () => request({ url: '/user/passport/auth/getUserInfo', method: 'get' })

// export const reqAddressInfo = () => request({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' })
export const reqAddressInfo = () => mockReq({ url: '/userAddress', method: 'get' })

// export const reqOrderInfo = () => request({ url: '/order/auth/trade', method: 'get' })
export const reqOrderInfo = () => mockReq({ url: '/trade', method: 'get' })

export const reqMyOrderList = (page, limit) => request({ url: `/order/auth/${page}/${limit}`, method: 'get' })
export const reqSubmitOrder = (tradeNo, data) =>
  request({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'post' })

export const reqPayInfo = orderId => request({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' })
