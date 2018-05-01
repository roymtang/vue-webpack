import request from '../utils/request'

export function loginByUsername(username, password) {
    const data = {
        username,
        password
    }

    return request({
        url: '/api/login',
        method: 'post',
        data
    })
}

export function logout() {
    return true
}

export function getUserInfo(token) {
    return request({
        url: '/api/userInfo',
        method: 'get',
        params: {token}
    })
}
