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

            }
        },
        methods: {
            toggleSidebar () {
                this.$store.dispatch('toggleSidebar')
            }
        },
        computed: {

        }
    }
</script>

<style rel="stylesheet/less" lang="less" scoped>
    .nav-container {
        overflow: hidden;
        & .collapse-btn {
            float: left;
            & :hover {
                cursor: pointer;
            };
        }
    }

</style>
