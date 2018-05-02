<template>
    <div class="nav-container">
        <div class="collapse-btn" @click="toggleSidebar()"><icon name="menu" scale="2" :class="svg"></icon></div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                svg: ''
            }
        },
        methods: {
            toggleSidebar () {
                this.$store.dispatch('toggleSidebar')
                this.svg = 'collapse-svg'
            },
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

<style rel="stylesheet/scss" lang="scss" scoped>
    @keyframes collapse-btn {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(90deg)
        }
    }

    .nav-container {
        .collapse-btn {
            :hover {
                cursor: pointer;
            }
            .collapse-svg {
                animation: collapse-btn 1s;
            }
            .collapse-svg1 {
                animation: collapse-btn 1s reverse;
            }
        }
    }
</style>