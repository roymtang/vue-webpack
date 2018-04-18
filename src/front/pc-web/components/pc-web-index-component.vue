<template>
    <el-container>
        <el-header></el-header>
        <el-container>
            <el-aside width="220px">
                <el-menu :router="true">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-menu"></i>商品管理</template>
                        <el-menu-item index="/menu/commodityManage/addCommodity">商品发布</el-menu-item>
                        <el-menu-item index="/menu/commodityManage/commodityOutList">出售中的商品</el-menu-item>
                        <el-menu-item index="1-3">秒杀商品</el-menu-item>
                        <el-menu-item index="1-4">仓库中的商品</el-menu-item>
                        <el-menu-item index="1-5">品种申请</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-goods"></i>交易管理</template>
                        <el-menu-item index="2-1">订单管理</el-menu-item>
                        <el-menu-item index="2-2">物流工具</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-tickets"></i>售后管理</template>
                        <el-menu-item index="3-1">售后申请</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title"><i class="el-icon-setting"></i>店铺设置</template>
                        <el-menu-item index="4-1">我的店铺</el-menu-item>
                        <el-menu-item index="4-2">店铺设置</el-menu-item>
                        <el-menu-item index="4-3">导航管理</el-menu-item>
                        <el-menu-item index="4-4">友情链接</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>

</template>

<script>

    export default {
        name: 'Mall',
        created: function () {
            this.$router.push('/menu')
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.path.split('/').length
                const fromDepth = from.path.split('/').length
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        }
    }
</script>

<style>
    .el-header {
        background-color: #66b1ff;
    }
</style>