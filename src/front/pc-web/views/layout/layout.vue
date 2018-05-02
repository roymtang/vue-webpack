<template>
    <div :class="{collapse: sidebar.isCollapse}">
        <sidebar class="sidebar-container"></sidebar>
        <div class="main-container">
            <navbar></navbar>
        </div>
    </div>
</template>

<script>
    import Sidebar from './sidebar.vue'
    import Navbar from './navbar.vue'
    export default {
        components: {Sidebar, Navbar},
        data () {
            return {

            }
        },
        computed: {
            sidebar() {
                return this.$store.state.app.sidebar
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>
    .sidebar-container {
        width: 200px;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        overflow: auto;
        transition: all 0.2s ease 0s;
    }
    .main-container {
        background-color: #8c939d;
        overflow: hidden;
        position: absolute;
        left: 200px;
        right: 0px;
        top: 0;
        height: 100%;
        transition: all 0.2s ease 0s;
    }
    .collapse .sidebar-container {
        width: 64px;
    }
    .collapse .main-container {
        left: 64px;
    }
</style>
