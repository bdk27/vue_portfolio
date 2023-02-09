<template>
    <section>
        <div class="mask">
            <div class="container">
                <div class="closeBtn shadow" @click="closeImg">
                    <font-awesome-icon icon="fa-solid fa-xmark" class="icon"/>
                </div>
                <div class="image">
                    <img src="@/assets/img/score.jpg" class="w-100">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'AboutMask',
        setup(_props, context) {

            function closeImg() {
                context.emit('hideImg', false);
            }

            return {
                closeImg
            }
        }
    }
</script>

<style lang='scss' scoped>
    @import '@/assets/scss/style.scss';
    .mask {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, .5);
        .container {
           display: flex;
           align-items: center;
           justify-content: center;
           margin-top: 10rem;
           position: relative;
            .closeBtn {
                position: absolute;
                top: -10px;
                right: 0;
                width: 50px;
                height: 50px;
                background: #fff;
                padding: 1rem;
                border-radius: 50%;
                cursor: pointer;
                &:hover {
                    background: $light-green;
                    .icon{
                        color: #fff;
                    }
                }
                .icon {
                    font-size: 2rem;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: $light-green;
                }
            }
            .image {
                height: 100vh;
                overflow-y: scroll;
            } 
        }
    }
    
    
</style>