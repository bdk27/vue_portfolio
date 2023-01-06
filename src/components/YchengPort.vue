<template>
    <section id="port">
        <h3  class="text-center text-light mb-5"><span>作品集</span></h3>
        <div class="container">
            <div class="shadow-lg p-5 mb-5">
                <div class="brand-icons mb-3">
                    <img src="../assets/img/html5-logo-31819.png" alt="">
                </div>   
                <div class="row row-cols-sm-1 row-cols-md-2 g-5" >
                    <div class="col-12" v-for="item in project.htmlProject" :key="item.id">
                        <div class="items">
                            <div :id="item.id" class="carousel slide" data-bs-ride="carousel">
                                 <!-- 下面三個指標 -->
                                <div class="carousel-indicators" v-if="item.slide">
                                    <button type="button" :data-bs-target="'#' + item.id" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" :data-bs-target="'#' + item.id" data-bs-slide-to="1" aria-label="Slide 2"></button>
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
                                <button class="carousel-control-prev" type="button" :data-bs-target="'#' + item.id" data-bs-slide="prev" v-if="item.slide">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" :data-bs-target="'#' + item.id" data-bs-slide="next" v-if="item.slide">
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
            
            <div class="shadow-lg p-5">
                <div class="brand-icons">
                    <font-awesome-icon icon="fa-brands fa-vuejs" class="icon"/>
                </div>
                 <div class="row row-cols-sm-1 row-cols-md-2 g-5" >
                    <div class="col-12" v-for="item in project.vueProject" :key="item.id">
                        <div class="items">
                            <div :id="item.id" class="carousel slide" data-bs-ride="carousel">
                                <!-- 下面三個指標 -->
                                <div class="carousel-indicators">
                                    <button type="button" :data-bs-target="'#' + item.id" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" :data-bs-target="'#' + item.id" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" :data-bs-target="'#' + item.id" data-bs-slide-to="2" aria-label="Slide 3" v-if="item.carent"></button>
                                </div>

                                <!-- 中間圖片 -->
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="3000">
                                        <img :src="item.img1">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="3000">
                                        <img :src="item.img2">
                                    </div>
                                    <div class="carousel-item" v-if="item.carent" data-bs-interval="3000">
                                        <img :src="item.img3">
                                    </div>
                                </div>

                                <!-- 左右箭頭 -->
                                <button class="carousel-control-prev" type="button" :data-bs-target="'#' + item.id" data-bs-slide="prev" v-if="item.slide">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" :data-bs-target="'#' + item.id" data-bs-slide="next" v-if="item.slide">
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
        </div>
    </section>
</template>

<script>
    import { reactive } from 'vue';
    import { htmlProject, vueProject } from '../assets/js/project.js';

    export default {
        name: 'YchengPort',
        setup() {

            //作品集資料
            const project = reactive({
                htmlProject,
                vueProject
            });

            return {
                project,
            }
        }
    }
</script>

<style lang='scss' scoped>
    @import '../assets/scss/style.scss';

    h3 {
        @extend %head-title;
    }
    .brand-icons {
        text-align: center;
        img {
            width: 200px;
            margin-bottom: 1rem;
        }
        .icon {
            font-size: 10rem;
            color: $light-green;
            margin-bottom: 1rem;
        }
    }
    
    .items {
        padding: 1rem;
        border-radius: 1rem;
        &:hover {
            box-shadow: 0 0 10px 5px $light-green;
            transform: scale(1.1);
            transition: .5s;
        }
        button {
            &:hover {
                background: $card-text;
            }
        }
        .carousel-item {
            img {
                width: 100%;
            }
        }
        .card-body {
            padding: 1rem;
            h4 {
                font-size: 2.5rem;
                color: #fff;
                margin: 1rem 0;
            }
            h5 {
                font-size: 1.8rem;
                margin-bottom: 2rem;
                color: $text-color;
            }
            p {
                font-size: 1.6rem;
                color: $text-color;
            }
            .icon {
                color: $light-green;
                font-size: 2rem;
                margin-left: 1rem;
            }
            .card-btn {
                text-decoration: none;
                font-size: 2rem;
                color: $light-green;
            }
        }
        
    }

</style>