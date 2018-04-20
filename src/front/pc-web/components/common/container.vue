<template>
    <div class="container">
        <header class="header">
            <slot name="header"></slot>
        </header>
        <main class="main">
            <aside class="aside">
                <slot name="aside">
                </slot>
            </aside>
            <section class="content">
                <router-view>
                    <slot name="content"></slot>
                </router-view>
            </section>
        </main>
        <footer class="footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .header {
        width: 100%;
        height: 60px;
        background-color: #b4bccc;
    }
    .main {
        overflow: hidden;
    }
    .main .aside {
        width: 220px;
        height: 800px;
        float: left;
        background-color: #8c939d;
    }
    .main .content {
        height: 800px;
        overflow: hidden;
        background-color: #b3d8ff;
    }
    .footer {
        height: 100px;
        background-color: #b4bccc;
    }
</style>