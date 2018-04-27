<template>
    <svg class="icon-svg" aria-hidden="true">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
    export default {
        name: 'icon-svg',
        props: {
            class: {
                type: String,
                required: true
            }
        },
        computed: {
            iconName() {
                return `#icon-${this.class}`
            }
        }
    }
</script>

<style scoped>
    .icon-svg {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>