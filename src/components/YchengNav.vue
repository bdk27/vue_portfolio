<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow">
        <div class="container">
            <a class="navbar-brand" href="#"><span>Y</span>Cheng</a>
            <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">首頁</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">關於我</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">作品集</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">聯絡我</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'YchengNav'
    }
</script>

<style lang='scss' scoped>
    @import '../assets/scss/style.scss';

    .navbar {
        background: $bgColor;
        .navbar-brand {
            font-size:4rem;
            font-family: 'Poppins', sans-serif;
            color: #fff;
            font-weight: bold;
            &:hover {
                color: $light-green;
            }
            span {
                color: $light-green;
                font-family: 'Poppins', sans-serif;
            }
        }
        .navbar-toggler {
            border: 1px solid #ccc;
        }
        .navbar-collapse {
            flex-grow: 0;
            .nav-link {
                color: #fff;
                font-size: 1.8rem;
                margin-left: 1rem;
                &:hover {
                    color: $light-green;
                }
            }
        }
    }
    

</style>