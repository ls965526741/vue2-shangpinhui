import Mock from 'mockjs'
import banner from './banner.json'
import floor from './floor.json'
import baseCategory from './baseCategory.json'
import detail from './detail.json'
import cart from './cart.json'
import trade from './trade.json'
import userAddress from './userAddress.json'
import myOrder from './myOrder.json'
// 图片和json文件对外是默认暴露的

Mock.mock('/mock/banner', banner)
Mock.mock('/mock/floor', floor)
Mock.mock('/mock/baseCategoryList', baseCategory)
Mock.mock('/mock/item', detail)
Mock.mock('/mock/cartList', cart)
Mock.mock('/mock/trade', trade)
Mock.mock('/mock/userAddress', userAddress)
Mock.mock('/mock/myOrder', myOrder)
