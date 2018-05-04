<template>
    <div>
        <el-table :data="resultList" highlight-current-row>
            <el-table-column type="selection" prop="id"></el-table-column>
            <el-table-column label="商品名称" prop="name"></el-table-column>
            <el-table-column label="商品分类" prop="clazz" align="center">
                <template slot-scope="scope">
                    {{getFruitClass(scope.row.clazz)}}
                </template>
            </el-table-column>
            <el-table-column label="价格" prop="price" align="center"></el-table-column>
            <el-table-column label="数量" prop="num" align="center"></el-table-column>
            <el-table-column label="是否推荐" prop="recommend" align="center">
                <template slot-scope="scope">
                    <i class="el-icon-success" v-if="scope.row.recommend=='Y'"></i>
                    <i class="el-icon-error" v-else></i>
                </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button size="mini" @click="updateGoods(scope.$index, scope.row)">{{$t('button.modify')}}</el-button>
                    <el-button size="mini" type="danger" @click="deleteGoods(scope.$index, scope.row)">{{$t('button.delete')}}</el-button>
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

        <el-dialog title="修改商品信息" :visible.sync="dialogFormVisible" width="600px">
            <el-form label-width="80px" :model="newGoods" class="update-form" :rules="rules" ref="updateForm">
                <el-form-item label="商品编号">
                    <el-input v-model="newGoods.id" disabled></el-input>
                </el-form-item>
                <el-form-item label="商品名称" prop="name">
                    <el-input v-model="newGoods.name"></el-input>
                </el-form-item>
                <el-form-item label="商品分类" prop="clazz">
                    <el-select v-model="newGoods.clazz" placeholder="请选择">
                        <el-option
                                v-for="c in classList"
                                :key="c.id"
                                :label="c.name"
                                :value="c.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="价格" prop="price">
                    <el-input v-model="newGoods.price"></el-input>
                </el-form-item>
                <el-form-item label="数量" prop="num">
                    <el-input v-model.number="newGoods.num"></el-input>
                </el-form-item>
                <el-form-item label="是否推荐">
                    <el-radio v-model="newGoods.recommend" label="Y">是</el-radio>
                    <el-radio v-model="newGoods.recommend" label="N">否</el-radio>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="save()">{{$t('button.submit')}}</el-button>
                    <el-button @click="close()">{{$t('button.cancel')}}</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    import rules from 'src/front/common/validation'
    export default {
        data () {
            return {
                resultList: [],
                classList: [],
                page: {
                    currentPage: 1,
                    pageSize: 10,
                    total: 0
                },
                dialogFormVisible: false,
                newGoods: {},
                rules: {
                    name: [
                        {
                            required: true, message: '商品名称不能为空', trigger: 'blur'
                        },
                        {
                            min: 2, max: 16, message: '长度在4~16个字符', trigger: 'blur'
                        }
                    ],
                    clazz: [
                        {
                            required: true, message: '商品分类不能为空', trigger: 'change'
                        }
                    ],
                    price: [
                        {
                            required: true, message: '价格不能为空', trigger: 'blur'
                        },
                        {
                            validator: rules.validateDecimal2
                        }
                    ],
                    num: [
                        {
                            required: true, message: '数量', trigger: 'blur'
                        },
                        {
                            validator: rules.validateInteger
                        }
                    ]
                }
            }
        },
        created: function () {
            this.axios.post('/api/fruits/classList').then((response) => {
                this.classList = response.data
            })
            this.axios.post('/api/fruits/list').then((response) => {
                this.resultList = response.data
                this.page.total = response.data.length
            })
        },
        methods: {
            getFruitClass(classID) {
                for (let i of this.classList) {
                    if (i.id === classID) {
                        return i.name
                    }
                }
            },
            deleteGoods: function(index, row) {
                this.$confirm('您确定要删除商品"' + row.name + '"', '提示', {
                    confirmButtonText: this.$t('button.confirm'),
                    cancelButtonText: this.$t('button.cancel'),
                    type: 'warning'
                }).then(() => {
                    this.axios.post('/api/fruits/delete', {id: index}).then(response => {
                        if (response.data) {
                            this.axios.post('/api/fruits/list').then((response) => {
                                this.resultList = response.data
                                this.page.total = response.data.length
                            })

                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            })
                        } else {
                            this.$message({
                                type: 'warning',
                                message: '删除失败!'
                            })
                        }
                    })
                }).catch(() => {

                })
            },
            sizeChangeEvent: function (val) {
                this.page.pageSize = val
            },
            currentChangeEvent: function (val) {
                var start = (val-1) * this.page.pageSize;
            },
            updateGoods: function (index, row) {
                this.dialogFormVisible = true;
                this.axios.post('/api/fruits/getFruitsByID', {id: index}).then((response) => {
                    this.newGoods = response.data
                })
            },
            save: function () {
                this.$refs.updateForm.validate((valid) => {
                    console.log(2)
                    if (valid) {

                        this.axios.post('/api/fruits/modify', this.newGoods).then(response => {

                        })
                        this.axios.post('/api/fruits/list').then((response) => {
                            this.resultList = response.data
                            this.page.total = response.data.length
                        })
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
