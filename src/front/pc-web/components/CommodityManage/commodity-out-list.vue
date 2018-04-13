<template>
    <div>
        <el-table :data="resultList" highlight-current-row>
            <el-table-column type="selection" prop="goodsID"></el-table-column>
            <el-table-column label="商品名称" prop="goodsName"></el-table-column>
            <el-table-column label="商品分类" prop="goodsClass" align="center"></el-table-column>
            <el-table-column label="价格" prop="price" align="center"></el-table-column>
            <el-table-column label="收藏数量" prop="collectNum" align="center"></el-table-column>
            <el-table-column label="售出数量" prop="soldNum" align="center"></el-table-column>
            <el-table-column label="是否推荐" prop="recommend" :formatter="formatterRecommend" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button size="mini">修改</el-button>
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
    </div>
</template>

<script>
    import {commodityOutList} from './dataConfig'

    export default {
        data () {
            return {
                resultList: [],
                page: {
                    currentPage: 1,
                    pageSize: 10,
                    total: commodityOutList.length
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
                    console.log(this.page.currentPage)
                    this.resultList = commodityOutList.slice((this.page.currentPage-1) * this.page.pageSize, this.page.pageSize)
                    this.page.total = commodityOutList.length
                }).catch(() => {

                })
            },
            formatterRecommend: function (row, column) {
                if (row.recommend == 1) {
                    //return '<i class="el-icon-success"></i>'
                    return '是'
                } else if (row.recommend == 0) {
                    //return '<i class="el-icon-error"></i>'
                    return '否'
                }
            },
            sizeChangeEvent: function (val) {
                this.page.pageSize = val
            },
            currentChangeEvent: function (val) {
                var start = (val-1) * this.page.pageSize;
                this.resultList = commodityOutList.slice(start, start + this.page.pageSize);
            }
        }
    }
</script>

<style>
    .el-pagination {
        text-align: right;
        margin-top: 20px;
    }
</style>