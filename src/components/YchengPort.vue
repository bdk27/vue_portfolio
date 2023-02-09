<template>
    <section id="port">
        <h3  class="text-center text-light mb-5"><span>作品集</span></h3>
        <div class="container">
            <PortHtml></PortHtml>
            <PortVue></PortVue>
        </div>
    </section>
</template>

<script>
    import PortHtml from '@/pages/port/PortHtml.vue';
    import PortVue from '@/pages/port/PortVue.vue';

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