<template>
    <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="sidebar.isCollapse">
        <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
        </el-menu-item>
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
