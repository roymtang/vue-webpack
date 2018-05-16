<template>
    <el-row class="class-box">
        <el-col :span="16" class="class-box-item" :offset="4">
            <el-row>
                <ul :show="tierOne.show">
                    <li v-for="item in tierOne.data" @click="tierItemClick(item.id, item.name, 'One')">
                        <i class="el-icon-caret-right"></i>{{item.name}}
                    </li>
                </ul>
                <ul v-show="tierTwo.show">
                    <li v-for="item in tierTwo.data" @click="tierItemClick(item.id, item.name, 'Two')">
                        <i class="el-icon-caret-right"></i>{{item.name}}
                    </li>
                </ul>
                <ul v-show="tierThree.show">
                    <li v-for="item in tierThree.data" @click="tierItemClick(item.id, item.name, 'Three')">
                        <i class="el-icon-caret-right"></i>{{item.name}}
                    </li>
                </ul>
            </el-row>
            <el-row>
                <p>您当前选择的商品分类是:
                    <span v-if="tierOne.currentSelect">
                        {{tierOne.currentSelect}}
                    </span>
                    <span v-if="tierTwo.currentSelect">
                        > {{tierTwo.currentSelect}}
                    </span>
                    <span v-if="tierThree.currentSelect">
                        > {{tierThree.currentSelect}}
                    </span>
                </p>
            </el-row>
            <el-row style="text-align: center">
                <el-button type="primary" @click="commodityAddSecond()">下一步</el-button>
            </el-row>
        </el-col>
    </el-row>

</template>

<script>
    export default {
        data() {
            return {
                tierOne: {
                    data: [
                        {
                            id: 1,
                            name: '一级分类01'
                        },
                        {
                            id: 2,
                            name: '一级分类02'
                        },
                        {
                            id: 3,
                            name: '一级分类03'
                        }
                    ],
                    tierOneItem: '一级分类',
                    show: true,
                    currentSelect: ''
                },
                tierTwo: {
                    data: [],
                    tierTwoItem: '二级分类',
                    show: false,
                    currentSelect: ''
                },
                tierThree: {
                    data: [],
                    tierThreeItem: '三级分类',
                    show: false,
                    currentSelect: ''
                },
                isActive: true
            }
        },
        methods: {
            tierItemClick: function (id, name, type) {
                if (type == 'One') {
                    this.tierOne.currentSelect = name
                    this.tierTwo.currentSelect = ''
                    this.tierThree.currentSelect = ''
                    this.tierTwo.data = [
                        {
                            id: 4,
                            name: '二级分类0101'
                        },
                        {
                            id: 5,
                            name: '二级分类0102'
                        },
                        {
                            id: 6,
                            name: '二级分类0103'
                        }
                    ]
                    this.tierTwo.show = true
                    this.tierThree.data = []
                    this.tierThree.show = false
                } else if (type == 'Two') {
                    this.tierTwo.currentSelect = name
                    this.tierThree.currentSelect = ''
                    this.tierThree.data = [
                        {
                            id: 7,
                            name: '三级分类010101'
                        },
                        {
                            id: 8,
                            name: '三级分类010102'
                        },
                        {
                            id: 9,
                            name: '三级分类010103'
                        }
                    ]
                    this.tierThree.show = true
                } else {
                    this.tierThree.currentSelect = name
                }
            },
            commodityAddSecond: function () {
                if (this.tierOne.currentSelect == '') {
                    this.$message({
                        showClose: true,
                        message: '请选择一级分类',
                        type: 'error'
                    });
                } else if (this.tierTwo.currentSelect == '') {
                    this.$message({
                        showClose: true,
                        message: '请选择二级分类',
                        type: 'error'
                    });
                } else if (this.tierThree.currentSelect == '') {
                    this.$message({
                        showClose: true,
                        message: '请选择三级分类',
                        type: 'error'
                    });
                } else {
                    this.$router.push('second')
                }
            }
        },
        created: function () {
            //console.log(this.$route)
        }
    }
</script>


<style scoped>
    .class-box {
        margin-top: 20px;
    }
    .class-box-item ul {
        height: 200px;
        border: 2px solid lightgray;
        border-radius: 5px;
        width: 200px;
        float: left;
        margin-left: 10px;
        list-style: none;
        padding: 0;
    }
    .class-box-item ul li {
        line-height: 20px;
        margin-bottom: 2px;
        cursor: pointer;
    }
    .class-box-item ul .active {
        color: red;
    }
</style>