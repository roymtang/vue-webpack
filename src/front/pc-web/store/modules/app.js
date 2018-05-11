import Cookies from 'js-cookie'

const app = {
    state: {
        sidebar: {
            isCollapse: !!+Cookies.get('sidebarStatus')
        },
        language: Cookies.get('language') || 'zh_CN',
        templateID: ''
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
        },
        SET_TEMPLATE_ID: (state, id) => {
            state.templateID = id
        }
    },
    actions: {
        toggleSidebar ({commit}) {
            commit('TOGGLE_SIDEBAR')
        },
        setLanguage({commit}, language) {
            commit('SET_LANGUAGE', language)
        },
        setTemplateID({commit}, id) {
            commit('SET_TEMPLATE_ID', id)
        }
    }
}

export default app