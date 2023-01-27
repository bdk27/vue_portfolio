<template>
    <section>
        <h3  class="text-center text-light mb-5"><span>作品集</span></h3>
        <div class="container">
            <PortHtml></PortHtml>
            <PortVue></PortVue>
        </div>
    </section>
</template>

<script>
    import PortHtml from '@/pages/PortHtml.vue';
    import PortVue from '@/pages/PortVue.vue';

    export default {
        name: "YchengPort",
        components: { PortHtml, PortVue },
    }
</script>

<style lang='scss' scoped>
    @import '../assets/scss/style.scss';
    @import '../assets/scss/global.scss';

    h3 {
        @extend %head-title;
    }

</style>