<template>
    <section class="footer">
        <div class="container">
            <div class="footer-top d-flex align-items-center justify-content-between
            flex-wrap">
                <div class="left">
                    <a class="navbar-brand" href="#"><span>Y</span>Cheng</a>
                    <p>Yan,Yong-Cheng</p>
                </div>

                <div class="mid">
                    <ul class="d-flex align-items-center justify-content-center me-auto mb-2 mb-lg-0">
                        <li><a href="#home">首頁</a></li>
                        <li><a href="#about">關於我</a></li>
                        <li><a href="#port">作品集</a></li>
                        <li><a href="#contact">聯絡我</a></li>
                    </ul>
                </div>

                <div class="right">
                    <div class="icons">
                        <a href="https://github.com/bdk27"><font-awesome-icon icon="fa-brands fa-github" class="icon"/></a>
                        <a href="https://www.facebook.com/profile.php?id=100001681376720&mibextid=LQQJ4d"><font-awesome-icon icon="fa-brands fa-facebook" class="icon"/></a>
                        <a href="https://instagram.com/assz516149"><font-awesome-icon icon="fa-brands fa-instagram" class="icon"/></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="copyright">
                    <p>© 2023 YCheng.All rights reserved.</p>
                </div>
            </div> 
        </div> 
    </section>
</template>

<script>
    export default {
        name: 'YchengFooter',
    }
</script>

<style lang='scss' scoped>
    @import '../assets/scss/style.scss';

    .footer {
        background: $nav-bg;
        text-align: center;
        .footer-top {
            text-align: center;
            .left {
                .navbar-brand {
                    @extend %title-icon;
                }
                p {
                    color: $text-color;
                    font-size: 1.6rem;
                }
            }
            .mid {
                ul {
                    padding: 0;
                    li {
                        a {
                            text-decoration: none;
                            color: #fff;
                            font-size: 1.8rem;
                            margin: 0 1rem;
                            cursor: pointer;
                            &:hover {
                                color: $light-green;
                            }
                        }
                    }
                }
            }
            .right {
                .icons {
                    .icon {
                        font-size: 3rem;
                        padding: 1rem;
                        color: #fff;
                        &:hover {
                            color: $light-green;
                        }
                    }
                }
            }
        }
        .footer-bottom {
            margin-top: 3rem;
            p {
                color: $card-text;
            } 
        }
    }
   

</style>