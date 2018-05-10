<template>
    <div style="min-height: 100%">
        <template v-for="item in list" v-if="item.meta && !item.meta.hidden">
            <el-menu-item v-if="!item.meta || !item.meta.hasChildren" :index="(parentPath===undefined||parentPath===''?'':parentPath+'/') + item.path">
                <icon v-if="item.meta && item.meta.icon" :name="item.meta.icon" scale="1.6"></icon>
                <span slot="title">{{$t('menu.'+item.name)}}</span>
            </el-menu-item>

            <el-submenu v-else :index="item.path">
                <template slot="title">
                    <icon v-if="item.meta && item.meta.icon" :name="item.meta.icon" scale="1.6"></icon>
                    <span slot="title">{{$t('menu.'+item.name)}}</span>
                </template>
                <menu-item :list="item.children" :parentPath="(parentPath===undefined||parentPath===''?'':parentPath+'/') + item.path"></menu-item>
            </el-submenu>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'menuItem',
        props: ['list', 'parentPath']
    }
</script>