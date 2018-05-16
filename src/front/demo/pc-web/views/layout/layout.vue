<template>
    <div :class="{collapse: sidebar.isCollapse}">
        <div class="sidebar-container" :style="{height: clientHeight}">
            <sidebar :isCollapse="sidebar.isCollapse"></sidebar>
        </div>
        <div class="main-container" :style="{height: clientHeight}">
            <navbar></navbar>
            <div>{{sidebar.height}}</div>
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
                clientHeight: ''
            }
        },
        computed: {
            ...mapGetters(['sidebar'])
        },
        mounted () {
            this.clientHeight = `${document.body.clientHeight}px`;
            const that = this;
            window.onresize = function () {
                that.clientHeight = `${document.body.clientHeight}px`;
            }
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
    }
    .sidebar-container {
        width: 201px;
        position: absolute;
        overflow-y: auto;
        top: 0;
        left: 0;
        transition: width 0.3s;
        ul {
            height: 100%;
        }
    }
    .main-container {
        margin-left: 200px;
        overflow-y: auto;
        min-width: 800px;
        transition: margin-left 0.3s ease 0s;
    }
    .collapse {
        .sidebar-container {
            width: 65px;
            transition: width 0.3s ease 0s;
        }
        .main-container {
            margin-left: 65px;
            transition: margin-left 0.3s ease 0s;
        }
    }
</style>
