<template>
    <div class="home" id="home">
        <div class="container">
            <div class="row align-items-center justify-content-between row-cols-sm-1 row-cols-md-2 flex-lg-row flex-md-column-reverse flex-sm-column-reverse">
                <div class="col-12">
                    <div class="items">
                        <div class="">
                            <h3 class="en me-3">Hello,</h3>
                            <h1 class="zh">我叫<span>顏永程</span></h1>
                        </div>
                        <h4>My name is Yan,Yong-Cheng</h4>
                        <p class="lh-lg">我原來本身就讀設計系，在一次的因緣巧合之下轉到資工系就讀，並且思考著未來要朝什麼方向就職，經過一番思考後我希望能與過去所學的設計，以及現在所學的資工，結合在一起，因此萌生出想要成為前端工程師的想法</p>
                        <div class="icons">
                            <a href="https://github.com/bdk27"><font-awesome-icon icon="fa-brands fa-github" class="icon"/></a>
                            <a href="https://www.facebook.com/profile.php?id=100001681376720&mibextid=LQQJ4d"><font-awesome-icon icon="fa-brands fa-facebook" class="icon"/></a>
                            <a href="https://instagram.com/assz516149"><font-awesome-icon icon="fa-brands fa-instagram" class="icon"/></a>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="items">
                        <div class="image">
                            <img src="../assets/img/3.png" class="w-100">
                        </div>
                    </div>
                </div>
            </div>
            <div class="mouse d-flex align-items-center justify-content-start">
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
                padding: 1rem;
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
                h4 {
                    color: $card-text;
                    position: relative;
                    font-size: 2.5rem;
                    font-family: 'Poppins', sans-serif;
                    margin-bottom: 1rem;
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
                    width: 100%;
                    /* background: linear-gradient(rgb(65, 184, 131), rgba(53, 73, 95, .5)); */
                   /*  background: linear-gradient(315deg,rgba(66, 211, 146, .5) 25%,rgba(100, 126, 255, .5)); */
                    background: linear-gradient(to top, rgba(131, 96, 195, .5), rgba(65, 184, 131, .5));
                    border-radius: 50%;
                    margin: 0 auto;
                    img {
                        border-radius: 50%;
                    }
                }
            }
        }
        .mouse {
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
               .row {
                    flex-direction: column-reverse;
                    .col-12 {
                        width: 100%;
                    }
                    .items {
                        .image {
                            width: 70%;
                        }
                    }
                    
                } 
            }
            
        } 
    }
    @media (max-width: 768px) {
        .home {
            .container {
                .items {
                    .en {
                        font-size: 4rem;
                    }
                    .zh {
                        font-size: 4rem;
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