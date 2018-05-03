<template>
    <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="sidebar.isCollapse"
            router>
        <el-menu-item index="/index">
            <icon name="index" scale="1.6"></icon>
            <span slot="title">{{$t('menu.index')}}</span>
        </el-menu-item>
        <el-menu-item index="/icons">
            <icon name="icon" scale="1.6"></icon>
            <span slot="title">{{$t('menu.icon')}}</span>
        </el-menu-item>
        <el-submenu index="charts">
            <template slot="title">
                <icon name="charts" scale="1.6"></icon>
                <span>{{$t('menu.charts')}}</span>
            </template>
            <el-menu-item index="/charts/line">{{$t('menu.charts_line')}}</el-menu-item>
            <el-menu-item index="/charts/graph">{{$t('menu.charts_graph')}}</el-menu-item>
        </el-submenu>
        <el-submenu index="table">
            <template slot="title">
                <icon name="table"></icon>
                <span>{{$t('menu.table')}}</span>
            </template>
            <el-menu-item index="/table/simpleDemo">{{$t('menu.table_simple_demo')}}</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        computed: {
            sidebar() {
                return this.$store.state.app.sidebar
            }
        }
    }
</script>
