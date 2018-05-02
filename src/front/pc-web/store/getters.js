const getters = {
    token: state => state.user.token,
    roles: state => state.user.roles,
    addRouters: state => state.permission.addRouters,
    sidebar: state => state.app.sidebar,
}

export default getters
