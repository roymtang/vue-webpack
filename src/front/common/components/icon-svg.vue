<template>
    <svg :class="clazz" aria-hidden="true" :width="width" :height="height" :fill="fill">
        <use :xlink:href="iconName"></use>
    </svg>
</template>

<script>
    export default {
        name: 'icon-svg',
        props: {
            name: {
                type: String,
                required: true
            },
            scale: [Number, String],
            spin: Boolean,
            fill: String
        },
        computed: {
            iconName() {
                return `#icon-${this.name}`
            },
            normalizedScale() {
                let scale = this.scale;
                scale = typeof scale === 'undefined' ? 1 : Number(scale);
                if (isNaN(scale) || scale <= 0) {
                    return 1
                }
                return scale
            },
            width() {
                return this.normalizedScale + 'em';
            },
            height() {
                return this.normalizedScale + 'em';
            },
            clazz() {
                return {
                    'icon-svg': true,
                    spin: this.spin
                }
            }
        }
    }
</script>

<style scoped>
    @keyframes fa-spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .icon-svg {
        overflow: hidden;
        vertical-align: -0.15em;
    }
    .icon-svg.spin{
        animation: fa-spin 1s 0s infinite linear;
    }
</style>
