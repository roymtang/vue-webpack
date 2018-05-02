<template>
    <el-dropdown trigger="click" style="float: right" @command="changeLang">
        <span class="el-dropdown-link">{{lang}}<i class="el-icon-arrow-down el-icon--right"></i></span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh_CN">简体中文</el-dropdown-item>
            <el-dropdown-item command="EN">English</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
    import Cookies from 'js-cookie'
    export default {
        data() {
            return {
                lang: Cookies.get('language') === 'EN' ? 'English' : '简体中文'
            }
        },
        methods: {
            changeLang(command) {
                this.$i18n.locale = command
                this.lang = command === 'EN' ? 'English' : '简体中文'
                Cookies.set('language', command)
            }
        }
    }
</script>