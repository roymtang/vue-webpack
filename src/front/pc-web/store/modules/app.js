import Cookies from 'js-cookie'

const app = {
    state: {
        sidebar: {
            isCollapse: !!+Cookies.get('sidebarStatus')
        }
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            if (state.sidebar.isCollapse) {
                Cookies.set('sidebarStatus', 0)
            } else {
                Cookies.set('sidebarStatus', 1)
            }

            state.sidebar.isCollapse = !state.sidebar.isCollapse
        }
    },
    actions: {
        toggleSidebar ({commit}) {
            commit('TOGGLE_SIDEBAR')
        }
    }
}

export default app