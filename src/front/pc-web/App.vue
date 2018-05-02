<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import Layout from './views/layout/layout.vue'
    export default {
        name: 'App',
        components: {Layout}
    }
</script>