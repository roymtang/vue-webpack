<template>
    <div>
        <div>
            <el-button @click="getPermissionList">获取权限列表</el-button>
            <el-button @click="getPermissionTree">获取权限树</el-button>
            <p>{{userInfo}}</p>
        </div>
        <div>
            <div>{{permissionList}}</div>
            <div>{{permissionTree}}</div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'permission',
        data () {
            return {
                permissionList: '',
                permissionTree: ''
            }
        },
        methods: {
            getPermissionList () {
                console.log('%o', sessionStorage.getItem('user'))
                this.permissionList = ''
            },
            getPermissionTree () {
                this.permissionTree = ''
            }
        },
        computed: {
            ...mapGetters(['userInfo'])
        }
    }
</script>