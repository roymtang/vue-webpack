import Cookies from 'js-cookie'

const app = {
    state: {
        sidebar: {
            isCollapse: !!+Cookies.get('sidebarStatus')
        },
        language: Cookies.get('language') || 'zh_CN'
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            if (state.sidebar.isCollapse) {
                Cookies.set('sidebarStatus', 0)
            } else {
                Cookies.set('sidebarStatus', 1)
            }

            state.sidebar.isCollapse = !state.sidebar.isCollapse
        },
        SET_LANGUAGE: (state, language) => {
            state.language = language
            Cookies.set('language', language)
        }
    },
    actions: {
        toggleSidebar ({commit}) {
            commit('TOGGLE_SIDEBAR')
        },
        setLanguage({commit}, language) {
            commit('SET_LANGUAGE', language)
        }
    }
}

export default app