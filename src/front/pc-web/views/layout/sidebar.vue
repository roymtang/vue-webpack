<template>
    <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            router>

        <menu-item :list="routerList"></menu-item>
    </el-menu>
</template>

<script>
    import {mapGetters} from 'vuex'
    import MenuItem from './menuItem.vue'

    export default {
        props: ['isCollapse'],
        components: {MenuItem},
        data() {
            return {

            }
        },
        methods: {
            handleOpen(key, keyPath) {

            },
            handleClose(key, keyPath) {

            }
        },
        computed: {
            ...mapGetters(['routerList'])
        }
    }
</script>
