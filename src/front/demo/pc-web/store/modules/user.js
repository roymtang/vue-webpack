import {getToken, setToken, removeToken} from "../../utils/auth"
import { loginByUsername, logout, getUserInfo } from 'pcWeb/api/login'

const user = {
    state: {
        user: sessionStorage.getItem('user'),
        status: '',
        code: '',
        token: getToken(),
        name: '',
        roles: []
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        },
        SET_USER: (state, userInfo) => {
            state.user = userInfo
        }
    },
    actions: {
        LoginByUsername({commit}, userInfo) {
            const username = userInfo.username.trim()
            return new Promise((resolve, reject) => {
                loginByUsername(username, userInfo.password).then(response => {
                    const data = response.data
                    commit('SET_TOKEN', data.token)
                    commit('SET_USER', JSON.stringify(data))
                    sessionStorage.setItem('user', JSON.stringify(data))
                    setToken(data.token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        GetUserInfo({commit, state}) {
            return new Promise((resolve, reject) => {
                getUserInfo(state.token).then(response => {
                    if (!response.data) {
                        reject('error')
                    }

                    const data = response.data
                    commit('SET_ROLES', data.roles)
                    commit('SET_NAME', data.name)

                    resolve(response)
                })
            }).catch(error => {
                reject(error)
            })
        },
        ChangeRoles({ commit }, role) {
            return new Promise(resolve => {
                commit('SET_TOKEN', role)
                setToken(role)
                getUserInfo(role).then(response => {
                    const data = response.data
                    commit('SET_ROLES', data.roles)
                    commit('SET_NAME', data.name)
                    resolve()
                })
            })
        },
        FedLogOut({ commit }) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '')
                removeToken()
                resolve()
            })
        }
    }
}

export default user
