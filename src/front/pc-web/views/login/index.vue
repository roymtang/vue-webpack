<template>
    <el-card class="login-box">
        <div slot="header" class="login-header">登陆系统</div>
        <div class="login-body">
            <el-form :model="loginInfo" :rules="rules" ref="loginForm">
                <el-form-item prop="username">
                    <el-input v-model="loginInfo.username" placeholder="请输入用户名">
                        <icon slot="prefix" name="username"></icon>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="loginInfo.password" placeholder="请输入密码">
                        <icon slot="prefix" name="password"></icon>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="login-btn" @click="login('loginForm')">登陆</el-button>
                </el-form-item>
            </el-form>
        </div>
    </el-card>
</template>

<script>
    export default {
        data () {
            return {
                loginInfo: {
                    username: 'admin',
                    password: '111111'
                },
                rules: {
                    username: [
                        {required: true, message: '请输入用户名'}
                    ],
                    password: [
                        {required: true, message: '请输入密码'}
                    ]
                }
            }
        },
        methods: {
            login (formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        this.$store.dispatch('LoginByUsername', this.loginInfo).then(() => {
                            this.$router.push({path: '/'})
                        }).catch(() => {

                        })
                    } else {
                        return false
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .login-box {
        width: 500px;
        margin: 20% auto;
    }
    .login-header {
        text-align: center;
    }
    .login-btn {
        width: 100%;
    }
</style>
