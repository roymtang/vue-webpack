<template>
    <div>
        <keep-alive>
            <router-view :key="templateID"></router-view>
        </keep-alive>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        watch: {
            '$route' (to, from) {
                this.$store.dispatch('setTemplateID', new Date().getTime())
            }
        },
        computed: {
            ...mapGetters(['templateID'])
        }
    }
</script>