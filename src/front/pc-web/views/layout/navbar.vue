<template>
    <div class="nav-container">
        <div class="collapse-btn" @click="toggleSidebar()">
            <icon name="menu" scale="2"></icon>
        </div>
        <setting-lang></setting-lang>
    </div>
</template>

<script>
    import SettingLang from '../../components/Common/setting-lang.vue'
    export default {
        components: {SettingLang},
        data () {
            return {
                svg: ''
            }
        },
        methods: {
            toggleSidebar () {
                this.$store.dispatch('toggleSidebar')
                this.svg = 'collapse-svg'
            }
        },
        computed: {
            svgClass () {
                if (this.$store.state.app.sidebar.isCollapse) {
                    return "collapse-svg"
                } else {
                    return "collapse-svg1"
                }
            }
        }
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>
    @keyframes collapse-btn {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(90deg)
        }
    }

    .nav-container {
        overflow: hidden;
        .collapse-btn {
            float: left;
            :hover {
                cursor: pointer;
            }
            .collapse-svg {
                animation: collapse-btn .5s;
            }
            .collapse-svg1 {
                animation: collapse-btn .5s reverse;
            }
        }
    }
</style>
