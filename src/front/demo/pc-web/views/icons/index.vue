<template>
    <div style="margin-top: 20px;margin-left: 30px">
        <div>
            <icon name="dianzan" :scale="size.value" :fill="color" :spin="spin.value"></icon>
            <icon name="dingwei" :scale="size.value" :fill="color" :spin="spin.value"></icon>
            <icon name="qiandao" :scale="size.value" :fill="color" :spin="spin.value"></icon>
            <icon name="shangchuan" :scale="size.value" :fill="color" :spin="spin.value"></icon>
            <icon name="shoucang" :scale="size.value" :fill="color" :spin="spin.value"></icon>
            <icon name="yuyin" :scale="size.value" :fill="color" :spin="spin.value"></icon>
            <icon name="xuanzhuan" :scale="size.value" :fill="color" :spin="spin.value"></icon>
        </div>
        <br>
        <div>
            <el-select v-model="size.value" clearable placeholder="点击我改变尺寸" style="float: left;overflow: hidden;margin-right: 20px">
                <el-option
                        v-for="item in size.spec"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>

            <div>
                <div style="float: left;overflow: hidden;line-height: 36px;vertical-align: middle">改变颜色</div>
                <el-color-picker v-model="color" style="float: left;margin-right: 20px"></el-color-picker>
                <el-button type="warning" @click="iconSpin()">{{spin.label}}</el-button>
            </div>

        </div>
    </div>
</template>


<script>
    export default {
        name: 'icons',
        data () {
            return {
                size: {
                    value: '',
                    spec: [
                        {
                            value: 1,
                            label: '默认尺寸'
                        },
                        {
                            value: 2,
                            label: 'x2 尺寸'
                        },
                        {
                            value: 4,
                            label: 'x4 尺寸'
                        },
                        {
                            value: 8,
                            label: 'x8 尺寸'
                        },
                        {
                            value: 16,
                            label: 'x16 尺寸'
                        }
                    ]
                },
                color: '',
                spin: {
                    label: '旋转',
                    value: false
                }
            }
        },
        methods: {
            iconSpin() {
                this.spin.value = !this.spin.value
                this.spin.label = this.spin.value ? '停止' : '旋转'
            }
        }
    }
</script>


<style scoped>

</style>