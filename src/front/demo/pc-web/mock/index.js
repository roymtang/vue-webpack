import Mock from 'mockjs'

import loginAPI from './login'
import FruitsAPI from './fruits'

// 登录
Mock.mock(/\/api\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/api\/userInfo\.*/, 'get', loginAPI.getUserInfo)

//水果
Mock.mock(/\/api\/fruits\/list/, 'post', FruitsAPI.getFruitsList)
Mock.mock(/\/api\/fruits\/getFruitsByID/, 'post', FruitsAPI.getFruitsByID)
Mock.mock(/\/api\/fruits\/classList/, 'post', FruitsAPI.getClassList)
Mock.mock(/\/api\/fruits\/delete/, 'post', FruitsAPI.deleteFruits)
Mock.mock(/\/api\/fruits\/modify/, 'post', FruitsAPI.modifyFruitsByID)

export default Mock
