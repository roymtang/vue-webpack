import Mock from 'mockjs'

import loginAPI from './login'

Mock.mock(/\/api\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/api\/userInfo\.*/, 'get', loginAPI.getUserInfo)

export default Mock
