const getters = {
    token: state => state.user.token,
    roles: state => state.user.roles,
    addRouters: state => state.permission.addRouters,
    sidebar: state => state.app.sidebar,
    language: state => state.app.language,
    routerList: state => state.permission.routers
}

export default getters
