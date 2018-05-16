import request from '../utils/request'

export function loginByUsername(username, password) {
    const data = {
        username,
        password
    }

    let result = request({
        url: '/api/login',
        method: 'post',
        data
    })

    return result
}

export function logout() {
    return true
}

export function getUserInfo(token) {
    let result = request({
        url: '/api/userInfo',
        method: 'get',
        params: {token}
    })

    return result
}
