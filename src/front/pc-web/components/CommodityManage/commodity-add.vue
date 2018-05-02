<template>
    <div>
        <el-steps :active="currentStep" simple>
            <el-step title="选择商品分类" icon="el-icon-edit"></el-step>
            <el-step title="填写商品信息" icon="el-icon-upload"></el-step>
            <el-step title="发布成功" icon="el-icon-picture"></el-step>
        </el-steps>

        <router-view></router-view>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentStep: 1
            }
        },
        created: function () {
//            this.$router.push('/addCommodity/first')
        }
    }
</script>

