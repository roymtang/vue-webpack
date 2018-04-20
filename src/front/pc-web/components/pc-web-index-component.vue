<template>
    <container>
        <Header slot="header"></Header>
        <Menu slot="aside"></Menu>
    </container>
</template>

<script>
    import Container from './common/container.vue'
    import Header from './common/header.vue'
    import Menu from './common/menu.vue'

    export default {
        components: {Container, Header, Menu},
        created: function () {

        }
    }
</script>

<style>

</style>