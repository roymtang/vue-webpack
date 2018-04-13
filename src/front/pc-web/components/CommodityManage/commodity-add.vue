<template>
    <div>
        <el-steps :active="1" simple>
            <el-step title="选择商品分类" icon="el-icon-edit"></el-step>
            <el-step title="填写商品信息" icon="el-icon-upload"></el-step>
            <el-step title="发布成功" icon="el-icon-picture"></el-step>
        </el-steps>

        <el-row class="class-box">
            <el-col :span="16" class="class-box-item" :offset="4">
                <el-row>
                    <el-col :span="6">
                        <el-card class="class-item-box">
                            <ul>
                                <li v-for="item in tierOne">
                                    {{item.name}}
                                </li>
                            </ul>
                        </el-card>
                    </el-col>
                    <el-col :span="6"></el-col>
                    <el-col :span="6"></el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tierOne: [
                    {
                        id: 1,
                        name: '一级分类'
                    },
                    {
                        id: 2,
                        name: '二级分类'
                    },
                    {
                        id: 3,
                        name: '三级分类'
                    }
                ],
                tierOneItem: '一级分类'
            }
        }
    }
</script>

<style lang="less">

    .class-box {
        margin-top: 20px;
    }
    .class-box-item {
        height: 200px;
    }
    .class-item-box .el-card__body {
        padding: 0;
    }
    .class-item-box ul {
        list-style: none;
        padding: 0;
        text-align: center
    }

</style>