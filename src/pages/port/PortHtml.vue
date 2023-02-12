<template>
    <div class="shadow-lg p-5 mb-5" id="htmlProject">
        <div class="brand-icons mb-3">
            <img src="@/assets/img/html5-logo-31819.png" alt="">
        </div>   
        <div class="row row-cols-md-1 row-cols-lg-2 g-5" >
            <div class="col-12" v-for="item in htmlProject" :key="item.id">
                <div class="items">
                    <div :id="'carousel' + item.id" class="carousel slide" data-bs-ride="carousel">
                            <!-- 下面三個指標 -->
                        <div class="carousel-indicators" v-if="item.slide">
                            <button type="button" :data-bs-target="'#carousel' + item.id" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" :data-bs-target="'#carousel' + item.id" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>

                        <!-- 中間圖片 -->
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="3000">
                                <img :src="item.img1">
                            </div>
                            <div class="carousel-item" v-if="item.slide" data-bs-interval="3000">
                                <img :src="item.img2">
                            </div>
                        </div>

                        <!-- 左右箭頭 -->
                        <button class="carousel-control-prev" type="button" :data-bs-target="'#carousel' + item.id" data-bs-slide="prev" v-if="item.slide">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" :data-bs-target="'#carousel' + item.id" data-bs-slide="next" v-if="item.slide">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div class="card-body">
                        <h4 class="card-title">{{ item.name }}</h4>
                        <h5>學習重點 : {{ item.point }}</h5>
                        <p class="card-text">{{ item.content }}</p>
                        <div class="text-center">
                            <a :href="item.url" class="card-btn">進入網站 <font-awesome-icon icon="fa-solid fa-caret-right" class="icon"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { htmlProject } from '../../assets/js/project';

    export default {
        name: 'PortHtml',
        setup() {

            return {
                htmlProject,
            }
        }
    }
</script>

<style lang='scss' scoped>
    @import '@/assets/scss/style.scss';
    @import '@/assets/scss/variable.scss';

    .brand-icons {
        @extend %brands;
    }
    
    .items {
       @extend %card-items;
    }

</style>