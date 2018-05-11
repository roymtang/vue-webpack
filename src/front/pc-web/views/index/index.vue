<template>
    <div>
        <p>首页</p>
        <p>
            <el-button @click="aa">aa</el-button>
            <el-button @click="bb">bb</el-button>
        </p>
        <router-view></router-view>
    </div>
</template>

<style>

</style>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            aa () {
                this.$router.push({
                    path: '/index/index/aa'
                })
            },
            bb () {
                this.$router.push({
                    path: '/index/index/bb'
                })
            }
        }
    }
</script>