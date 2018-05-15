<template>
    <div>
        <div ref="charts" style="width: 100%;height: 800px"></div>
    </div>
</template>

<script>
    import echarts from 'echarts/lib/echarts'
    import 'echarts/lib/chart/graph'
    import 'echarts/lib/component/tooltip'
    import 'echarts/lib/component/title'

    var _data = require('./data_graph.json')

    export default {
        name: 'charts_graph',
        data() {
            return {

            }
        },
        mounted() {
            this.initGraph()
        },
        methods: {
            initGraph() {
                let charts = echarts.init(this.$refs.charts)
                charts.setOption({
                    title: {
                        text: 'NPM Dependencies'
                    },
                    animationDurationUpdate: 1500,
                    animationEasingUpdate: 'quinticInOut',
                    series : [
                        {
                            type: 'graph',
                            layout: 'none',
                            data: _data.nodes.map(function (node) {
                                return {
                                    x: node.x,
                                    y: node.y,
                                    id: node.id,
                                    name: node.label,
                                    symbolSize: node.size,
                                    itemStyle: {
                                        normal: {
                                            color: node.color
                                        }
                                    }
                                };
                            }),
                            edges: _data.edges.map(function (edge) {
                                return {
                                    source: edge.sourceID,
                                    target: edge.targetID
                                };
                            }),
                            label: {
                                emphasis: {
                                    position: 'right',
                                    show: true
                                }
                            },
                            roam: true,
                            focusNodeAdjacency: true,
                            lineStyle: {
                                normal: {
                                    width: 0.5,
                                    curveness: 0.3,
                                    opacity: 0.7
                                }
                            }
                        }
                    ]
                }, true);
            }
        }
    }
</script>