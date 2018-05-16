<template>
    <div>
        <p>首页</p>
        <p>
            <el-button @click="aa">aa</el-button>
            <el-button @click="bb">bb</el-button>
            {{path1}}
        </p>
        <p>
            <img src="../../resources/private/C-JBW00012-W-RD-D-1.jpg"/>
        </p>
        <router-view></router-view>
    </div>
</template>

<style>

</style>

<script>
    const path = require('path')

    export default {
        data() {
            return {
                path1: path.join(__dirname, 'aa', 'cc')
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