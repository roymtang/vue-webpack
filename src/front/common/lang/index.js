import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhCNLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from './EN'
import zhCNLocale from './zh_CN'
import Cookies from 'js-cookie'

Vue.use(VueI18n)

const messages = {
    EN: {
        ...enLocale,
        ...elementEnLocale
    },
    zh_CN: {
        ...zhCNLocale,
        ...elementZhCNLocale
    }
}

export default new VueI18n({
    locale: Cookies.get('language') || 'zh_CN',
    messages
})