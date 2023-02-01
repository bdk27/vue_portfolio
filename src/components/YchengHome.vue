<template>
    <div class="home" id="home">
        <div class="container">
            <div class="row align-items-center justify-content-between row-cols-sm-1 row-cols-md-2">
                <div class="col-12">
                    <div class="items me-5">
                        <div class="lan">
                            <h3 class="en me-3">Hello,</h3>
                            <h1 class="zh">我叫<span>顏永程</span></h1>
                        </div>
                        <h4>My name is Yan,Yong-Cheng</h4>
                        <p class="lh-base">我原來本身就讀設計系，在一次的因緣巧合之下轉到資工系就讀，並且思考著未來要朝什麼方向就職，經過一番思考後我希望能與過去所學的設計，以及現在所學的資工，結合在一起，因此萌生出想要成為前端工程師的想法</p>
                        <div class="icons pt-3">
                            <a href="https://github.com/bdk27"><font-awesome-icon icon="fa-brands fa-github" class="icon"/></a>
                            <a href="https://www.facebook.com/profile.php?id=100001681376720&mibextid=LQQJ4d"><font-awesome-icon icon="fa-brands fa-facebook" class="icon"/></a>
                            <a href="https://instagram.com/assz516149"><font-awesome-icon icon="fa-brands fa-instagram" class="icon"/></a>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="items ms-5">
                        <div class="image">
                            <div class="myself">
                                <img src="../assets/img/3.png" class="w-100">
                                <img src="../assets/img/person-bg.png" class="w-100 bg">
                            </div>
                            <div class="decro">
                                <img src="../assets/img/AbstractWaves.png" class="waves">
                                <img src="../assets/img/circle-p.png" class="circle-p">
                                <img src="../assets/img/circle-g.png" class="circle-g">
                                <img src="../assets/img/Sparkles.png" class="sparkles">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mouse">
                <font-awesome-icon icon="fa-solid fa-computer-mouse" class="icon mouse-icon animate__animated animate__slideInDown animate__infinite animate__slow"/>
                <p class="mx-4 mb-0">往下滑</p>
                <font-awesome-icon icon="fa-solid fa-caret-down" class="icon mouse-icon"/>
            </div>
        </div>
    </div >
</template>

<script>
    import 'animate.css';
    export default {
        name: 'YchengHome'
    }
</script>

<style lang='scss' scoped>
    @import '../assets/scss/style.scss';

    .home {
        width: 100%;
        height: 100vh;
        background: linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url('../assets/img/bg-vue.png');
        background-size: cover;
        background-position: center;
        position: relative;
        .container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            .items {
                .lan { 
                   .en {
                    font-family: 'Poppins', sans-serif;
                    font-size: 3rem;
                    font-weight: bold;
                    color: #fff;
                    } 
                    .zh {
                        font-size: 5rem;
                        font-weight: bold;
                        color: #fff;
                        letter-spacing: 2px;
                        span {
                            color: $light-green;
                        }
                    } 
                }
                
                h4 {
                    color: $card-text;
                    position: relative;
                    font-size: 2.5rem;
                    font-family: 'Poppins', sans-serif;
                    margin-bottom: 1.5rem;
                }
                p {
                    color: $text-color;
                    font-size: 1.8rem;
                }
                .icon {
                    color: $text-color;
                    font-size: 3rem;
                    margin-right: 2rem;
                    cursor: pointer;
                    &:hover {
                        color: $light-green;
                    }
                }
                .image {
                    position: relative;
                    .myself {
                        position: relative;
                        .bg {
                            position: absolute;
                            height: 400px;
                            bottom: 0;
                            left: 0;
                            z-index: -2;
                        }
                        /* .circle {
                            position: absolute;
                            width: 800px;
                            height: 200px;
                            bottom: 20px;
                            left: 50px;
                            background: linear-gradient(to left, rgb(131, 96, 195), rgb(65, 184, 131))#41b883;
                            box-shadow: #41b883 0px 7px 29px 0px;
                            border-radius: 186px 257px 298px 134px / 138px 136px 113px 115px;
                            z-index: -100;
                        } */
                    }
                    .sparkles {
                        position: absolute;
                        top: 50px;
                        right: 100px;
                        z-index: -1;
                    }
                    .circle-p {
                        position: absolute;
                        width: 40%;
                        top: 100px;
                        left: 20px;
                        z-index: -1;
                    }
                    .circle-g {
                        position: absolute;
                        width: 40%;
                        bottom: -70px;
                        right: 0;
                        z-index: -3;
                    }
                    .waves {
                        position: absolute;
                        top: 50%;
                        left: 20px;
                    }
                    /* .waves2 {
                        position: absolute;
                        top: 45%;
                        left: 200px;
                    } */
                }
            }
        }
        .mouse {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-top: 5rem;
            p {
                color: $text-color;
                font-size: 1.8rem;
            }
            .icon {
                color: $text-color;
                font-size: 3rem;
                cursor: pointer;
                &:hover {
                    color: $light-green;
                }
            }
            .mouse-icon {
                margin: 0;
            }
        }
        
    }

    @media (max-width: 991px) {
        .home {
            .container {
                .col-12 {
                    width: 100%;
                }
                .items {
                    text-align: center;
                    .lan {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .en {
                            font-size: 5rem;
                        }
                    }
                    .image {
                        display: none;
                    }   
                } 
            }
            .mouse {
                display: none;
            }
        } 
    }
    @media (max-width: 768px) {
        .home {
            .container {
                .items {
                    .lan {
                      
                        .en {
                            font-size: 4rem;
                        }
                        .zh {
                            font-size: 4rem;
                        }
                    }
                    h4 {
                        font-size: 2rem;
                    }
                } 
            }
        }
    }
    @media (max-width: 576px) {
        
        
    }
</style>