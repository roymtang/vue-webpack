import {param2Obj} from "../utils";

const userMap = {
    admin: {
        roles: ['admin'],
        token: 'admin',
        name: 'Super Admin'
    },
    editor: {
        roles: ['editor'],
        token: 'editor',
        name: 'Normal Editor'
    }
}

const auth = [
    {
        menuID: 1,
        parentID: '',
        name: '图标管理',
        icon: '',
        url: '/icon/index',
        seq: ''
    },
    {
        menuID: 2,
        parentID: '',
        name: '图表管理',
        icon: '',
        url: '/charts',
        seq: ''
    },
    {
        menuID: 3,
        parentID: '2',
        name: '折线图',
        icon: '',
        url: '/charts/line',
        seq: ''
    },
    {
        menuID: 4,
        parentID: '2',
        name: '曲线图',
        icon: '',
        url: '/charts/graph',
        seq: ''
    }
]

const admin = {
    roles: ['admin'],
    token: 'admin',
    name: 'Super Admin',
    auth: [

    ]
}

export default {
    loginByUsername: config => {
        const {username} = JSON.parse(config.body)
        return userMap[username]
    },
    getUserInfo: config => {
        const { token } = param2Obj(config.url)
        if (userMap[token]) {
            return userMap[token]
        } else {
            return false
        }
    }
}
