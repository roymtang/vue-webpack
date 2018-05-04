<template>
    <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="sidebar.isCollapse"
            router>
        <template v-for="item in routerList" v-if="item.children">
            <el-menu-item v-if="item.single" :index="item.path">
                <icon v-if="item.meta && item.meta.icon" :name="item.meta.icon" scale="1.6"></icon>
                <span slot="title">{{$t('menu.'+item.name)}}</span>
            </el-menu-item>

            <el-submenu v-else :index="item.path">
                <template slot="title">
                    <icon v-if="item.meta && item.meta.icon" :name="item.meta.icon" scale="1.6"></icon>
                    <span slot="title">{{$t('menu.'+item.name)}}</span>
                </template>

                <template v-for="child in item.children">
                    <el-menu-item v-if="child.single" :index="item.path + '/' + child.path">
                        <icon v-if="child.meta && child.meta.icon" :name="child.meta.icon" scale="1.6"></icon>
                        <span slot="title">{{$t('menu.'+child.name)}}</span>
                    </el-menu-item>

                    <el-submenu v-else :index="item.path + '/' + child.path">
                        <template slot="title">
                            <icon v-if="child.meta && child.meta.icon" :name="child.meta.icon" scale="1.6"></icon>
                            <span slot="title">{{$t('menu.'+child.name)}}</span>
                        </template>
                        <el-menu-item v-for="child1 in child.children" :index="item.path + '/' + child.path + '/' + child1.path" :key="child1.name">{{$t('menu.'+child1.name)}}</el-menu-item>
                    </el-submenu>
                </template>
            </el-submenu>
        </template>
    </el-menu>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        props: [],
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
            ...mapGetters(['sidebar', 'routerList'])
        }
    }
</script>
