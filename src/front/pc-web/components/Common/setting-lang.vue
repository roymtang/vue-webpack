<template>
    <el-dropdown trigger="click" style="float: right" @command="changeLang">
        <span class="el-dropdown-link">{{language}}<i class="el-icon-arrow-down el-icon--right"></i></span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh_CN" :disabled="cn_show">简体中文</el-dropdown-item>
            <el-dropdown-item command="EN" :disabled="en_show">English</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
    import Cookies from 'js-cookie'
    export default {
        methods: {
            changeLang(command) {
                this.$i18n.locale = command
                this.$store.dispatch('setLanguage', command)
                this.$router.go(0)
            }
        },
        computed: {
            language() {
                return this.$store.getters.language === 'EN' ? 'English' : '简体中文'
            },
            cn_show() {
                return this.$store.getters.language === 'zh_CN'
            },
            en_show() {
                return this.$store.getters.language === 'EN'
            }
        }
    }
</script>