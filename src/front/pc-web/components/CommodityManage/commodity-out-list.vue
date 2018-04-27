<template>
    <div>
        <el-table :data="resultList" highlight-current-row>
            <el-table-column type="selection" prop="goodsID"></el-table-column>
            <el-table-column label="商品名称" prop="goodsName"></el-table-column>
            <el-table-column label="商品分类" prop="goodsClass" align="center"></el-table-column>
            <el-table-column label="价格" prop="price" align="center"></el-table-column>
            <el-table-column label="收藏数量" prop="collectNum" align="center"></el-table-column>
            <el-table-column label="售出数量" prop="soldNum" align="center"></el-table-column>
            <el-table-column label="是否推荐" prop="recommend" align="center">
                <template slot-scope="scope">
                    <i class="el-icon-success" v-if="scope.row.recommend==1"></i>
                    <i class="el-icon-error" v-else></i>
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button size="mini" @click="updateGoods(scope.$index, scope.row)">修改</el-button>
                    <el-button size="mini" type="danger" @click="deleteGoods(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 分页 -->
        <el-pagination :current-page="page.currentPage"
                       :page-size="page.pageSize" :page-sizes="[10, 20, 30, 40]"
                       :total="page.total"
                       layout="total, sizes, prev, pager, next, jumper"
                       @size-change="sizeChangeEvent"
                       @current-change="currentChangeEvent">
        </el-pagination>

        <router-view></router-view>

        <el-dialog title="修改商品信息" :visible.sync="dialogFormVisible">
            <el-form label-width="80px" :model="newGoods" class="update-form" :rules="rules" ref="updateForm">
                <el-form-item label="商品编号">
                    <el-input v-model="newGoods.goodsID" disabled></el-input>
                </el-form-item>
                <el-form-item label="商品名称" prop="goodsName">
                    <el-input v-model="newGoods.goodsName"></el-input>
                </el-form-item>
                <el-form-item label="商品分类" prop="goodsClass">
                    <el-select v-model="newGoods.goodsClass" placeholder="请选择">
                        <el-option
                                v-for="c in goodsClass"
                                :key="c.id"
                                :label="c.name"
                                :value="c.name">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="价格" prop="price">
                    <el-input v-model="newGoods.price"></el-input>
                </el-form-item>
                <el-form-item label="收藏数量" prop="collectNum">
                    <el-input v-model.number="newGoods.collectNum"></el-input>
                </el-form-item>
                <el-form-item label="售出数量" prop="soldNum">
                    <el-input v-model.number="newGoods.soldNum"></el-input>
                </el-form-item>
                <el-form-item label="是否推荐">
                    <el-radio v-model="newGoods.recommend" label="1">是</el-radio>
                    <el-radio v-model="newGoods.recommend" label="0">否</el-radio>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="save()">提交</el-button>
                    <el-button @click="close()">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    import {commodityOutList, goodsClass} from './dataConfig'

    export default {
        data () {
            var validateFloat = (rule, value, callback, source, options) => {
                if (value === '') {
                    callback(new Error('不能为空'));
                } else {
                    console.log(options)
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        callback();
                    }
                }
            }
            return {
                resultList: [],
                page: {
                    currentPage: 1,
                    pageSize: 10,
                    total: commodityOutList.length
                },
                dialogFormVisible: false,
                newGoods: {},
                goodsClass: goodsClass,
                rules: {
                    goodsName: [
                        {
                            required: true, message: '商品名称不能为空', trigger: 'blur'
                        },
                        {
                            min: 2, max: 16, message: '长度在4~16个字符', trigger: 'blur'
                        }
                    ],
                    goodsClass: [
                        {
                            required: true, message: '商品分类不能为空', trigger: 'change'
                        }
                    ],
                    price: [
                        {
                            required: true, message: '价格不能为空', trigger: 'blur'
                        },
                        {
                            validator: validateFloat
                        }
                    ],
                    collectNum: [
                        {
                            required: true, message: '收藏数量', trigger: 'blur'
                        },
                        {
                            type: 'integer', message: '格式错误'
                        }
                    ],
                    soldNum: [
                        {
                            required: true, message: '销售数量', trigger: 'blur'
                        },
                        {
                            type: 'integer', message: '格式错误'
                        }
                    ]
                }
            }
        },
        created: function () {
            this.resultList = commodityOutList.slice((this.page.currentPage-1) * this.page.pageSize, this.page.pageSize)
        },
        methods: {
            deleteGoods: function(index, row) {
                this.$confirm('您确定要删除商品"' + row.goodsName + '"', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    commodityOutList.splice((this.page.currentPage-index) * this.page.pageSize, 1)
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    })
                    this.resultList = commodityOutList.slice((this.page.currentPage-1) * this.page.pageSize, this.page.pageSize)
                    this.page.total = commodityOutList.length
                }).catch(() => {

                })
            },
            sizeChangeEvent: function (val) {
                this.page.pageSize = val
            },
            currentChangeEvent: function (val) {
                var start = (val-1) * this.page.pageSize;
                this.resultList = commodityOutList.slice(start, start + this.page.pageSize);
            },
            updateGoods: function (index, row) {
                this.dialogFormVisible = true;
                this.newGoods = JSON.parse(JSON.stringify(commodityOutList[index]))
            },
            save: function () {
                this.$refs.updateForm.validate((valid) => {
                    if (valid) {
                        commodityOutList[this.newGoods.id] = this.newGoods
                        this.dialogFormVisible = false
                    } else {
                        return false;
                    }
                })
            },
            close: function () {
                this.newGoods = {}
                this.dialogFormVisible = false
            }
        }
    }
</script>

<style scoped>
    .el-pagination {
        text-align: right;
        margin-top: 20px;
    }

    .update-form .el-form-item .el-input {
        width: 400px;
    }
</style>