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
