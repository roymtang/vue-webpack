<template>
    <div :class="{collapse: sidebar.isCollapse}">
        <div class="sidebar-container">
            <sidebar :isCollapse="sidebar.isCollapse"></sidebar>
        </div>
        <div class="main-container">
            <navbar></navbar>
            <main-container></main-container>
        </div>
    </div>
</template>

<script>
    import Sidebar from './sidebar.vue'
    import Navbar from './navbar.vue'
    import MainContainer from './main.vue'

    import {mapGetters} from 'vuex'

    export default {
        components: {Sidebar, Navbar, MainContainer},
        data () {
            return {

            }
        },
        computed: {
            ...mapGetters(['sidebar'])
        }
    }
</script>

<style rel="stylesheet/less" lang="less">
    .el-menu--collapse {
        .el-submenu {
            &>.el-submenu__title {
                &>span {
                    height: 0;
                    width: 0;
                    overflow: hidden;
                    visibility: hidden;
                    display: inline-block;
                }
            }
        }
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 100%;
    }
    .sidebar-container {
        width: 200px;
        min-height: 100%;
        float: left;
        transition: width 0.3s;
    }
    .main-container {
        overflow: hidden;
        min-height: 100%;
    }
    .collapse {
        .sidebar-container {
            width: 64px;
            transition: width 0.3s ease 0s;
        }
    }
</style>
