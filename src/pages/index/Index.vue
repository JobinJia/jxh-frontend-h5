<template>
    <div class="container">
        阿周说：我全都要！
        <componenta></componenta>
    </div>
</template>

<script>

    import Component from '@/common/vue/VueCommpent'

    export default {
        name: 'index',
        components: {
            componenta: Component
        },
        data: function () {
            return {}
        },
        computed: {},
        watch: {},
        created: function () {

        },
        mounted: function () {


        },
        methods: {

        }
    }
</script>

<style lang="scss" type="text/scss">
    // 全局样式
    @import "~@/common/styles/base.css";

    .container {
        background: url("~@/assets/bg/psbe.jpeg") no-repeat center;
        background-size: contain;
        height: 100%;
        text-align: center;
    }
</style>
