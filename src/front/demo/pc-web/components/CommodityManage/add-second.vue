<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
            <el-form-item label="商品名称" prop="goodsName">
                <el-input v-model="form.goodsName"></el-input>
            </el-form-item>
            <el-form-item label="商品原价">
                <el-input v-model="form.price"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
                <el-button @click="resetForm('form')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {

                },
                rules: {
                    goodsName: [
                        {required: true, message:'商品名称不能为空', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            onSubmit: function(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit');
                    } else {
                        console.log('error submit')
                        return false;
                    }
                })
            },
            resetForm: function(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>