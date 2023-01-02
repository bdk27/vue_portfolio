<template>
    <div class="home">
        <div class="container">
            <div class="row row-cols-sm-1 row-cols-md-2">
                <div class="col-12">
                    <div class="items">
                        <h1><span class="en">Hi,</span> 我叫<span class="zh">顏永程</span></h1>
                        <p class="lh-lg">我原來本身就讀設計系，在一次的因緣巧合之下轉到資工系就讀，並且思考著未來要朝什麼方向就職，後來我希望能與過去所學的設計，以及現在所學的資工，結合在一起，因此萌生出想要成為前端工程師的想法</p>
                        <div class="icons">
                            <font-awesome-icon icon="fa-brands fa-github" class="icon"/>
                            <font-awesome-icon icon="fa-brands fa-facebook" class="icon"/>
                            <font-awesome-icon icon="fa-brands fa-instagram" class="icon"/>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="items">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'YchengHome'
    }
</script>

<style lang='scss' scoped>
    @import '../assets/style.scss';

    .home {
        width: 100%;
        height: 80vh;
        background: linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url('../assets/img/bg-vue.png');
        background-size: cover;
        background-position: center;
        position: relative;
        .container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .items {
            h1 {
                font-size: 5rem;
                font-weight: bold;
                color: #fff;
                .en {
                    color: #fff;
                    font-family: 'Poppins', sans-serif;
                }
                .zh {
                    color: $light-green;
                }
            }
            p {
                color: #ccc;
                font-size: 1.8rem;
            }
            .icon {
                color: #ccc;
                font-size: 3rem;
                margin-right: 2rem;
                cursor: pointer;
                &:hover {
                    color: $light-green;
                }
            }
        }
        
    }
</style>