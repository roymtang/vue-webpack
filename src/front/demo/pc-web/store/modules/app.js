
const app = {
    state: {
        sidebar: {
            isCollapse: !!+localStorage.getItem('sidebarStatus')
        },
        language: localStorage.getItem('language') || 'zh_CN',
        templateID: ''
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            if (state.sidebar.isCollapse) {
                localStorage.setItem('sidebarStatus', 0)
            } else {
                localStorage.setItem('sidebarStatus', 1)
            }

            state.sidebar.isCollapse = !state.sidebar.isCollapse
        },
        SET_LANGUAGE: (state, language) => {
            state.language = language
            localStorage.setItem('language', language)
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