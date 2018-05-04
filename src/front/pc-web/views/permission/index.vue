<template>
    <div>
        <div>
            <el-button @click="getPermissionList">获取权限列表</el-button>
            <el-button @click="getPermissionTree">获取权限树</el-button>
        </div>
        <div>
            <div>{{permissionList}}</div>
            <div>{{permissionTree}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                permissionList: '',
                permissionTree: ''
            }
        },
        methods: {
            getPermissionList () {
                this.permissionList = ''
            },
            getPermissionTree () {
                this.permissionTree = ''
            }
        }
    }
</script>