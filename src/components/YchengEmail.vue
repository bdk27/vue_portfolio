<template>
    <section>
        <h3  class="text-center text-light mb-5"><span>聯絡我</span></h3>
        <div class="container">
            <div class="shadow-lg p-5 mb-5">
                <div class="row row-cols-sm-1 row-cols-md-2">
                    <div class="col-12">
                        <div class="items">
                            <ul>
                                <li>
                                    <font-awesome-icon icon="fa-solid fa-phone" class="icon"/>
                                    <div class="content">
                                        <h5>電話</h5>
                                        <p>0909820427</p>
                                    </div>
                                </li>
                                <li>
                                    <font-awesome-icon icon="fa-solid fa-map fa-envelope" class="icon"/>
                                    <div class="content">
                                        <h5>電子信箱</h5>
                                        <p>briansam195@gmail.com</p>
                                    </div>
                                </li>
                                <li>
                                    <font-awesome-icon icon="fa-solid fa-map" class="icon"/>
                                    <div class="content">
                                        <h5>地址</h5>
                                        <p>新北市蘆洲區永平街32巷21弄35號6樓</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="items">
                            <form class="form" ref="form" @submit.prevent="sendEmail">
                                <input type="text" name="user_name" placeholder="姓名" :value="inputFieldReset">
                                <input type="email" name="user_email" placeholder="信箱" :value="inputFieldReset">
                                <textarea name="message" placeholder="留言給我" :value="inputFieldReset"></textarea>
                                <div class="send-btn">
                                    <button type="submit" name="send">送出訊息<font-awesome-icon icon="fa-solid fa-share" class="icon"/></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
</template>

<script>
    import emailjs from '@emailjs/browser';
    import { ref } from 'vue';

    export default {
        name: 'YchengEmail',
        setup() {

            const form = ref(null);
            const inputFieldReset = ref(null);

            function sendEmail() {
                emailjs.sendForm('service_quzgws6', 'template_t6rh23c', form.value, 'UAdDRDXU8OWmcgW0z')
                .then((result) => {
                    alert('SUCCESS!', result.text);
                }, (error) => {
                    console.log('FAILED...', error.text);
                });
            }

            return {
                form,
                inputFieldReset,
                sendEmail,
            }
        }
    }
</script>

<style lang='scss' scoped>
    @import '../assets/scss/style.scss';

    h3 {
        @extend %headTitle;
    }
    .items {
        display: flex;
        align-items: center;
        justify-content: center;
        ul {
            li {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                padding: 1rem;
                .icon {
                    font-size: 2.5rem;
                    color: $light-green;
                    margin-right: 1rem;
                }
                h5 {
                    font-size: 1.8rem;
                    color: $text-color;
                }
                p {
                    font-size: 1.6rem;
                    color: $card-text;
                }
            }
        }
        .image {
            width: 90%;
        }
        form {
            width: 100%;
            input, textarea {
                width: 100%;
                border: 0;
                outline: none;
                padding: 1.5rem;
                font-size: 1.8rem;
                border-radius: 1rem;
                resize: none;
                margin-bottom: 2rem;
            }
            textarea {
                height: 20rem;
            }
            .send-btn {
                text-align: center;
                button {
                    padding: 1rem 2rem;
                    font-size: 1.8rem;
                    border: 1px solid $light-green;
                    background: $light-green;
                    color: #fff;
                    border-radius: 1rem;
                    &:hover {
                        background: transparent;
                        border: 1px solid $light-green;
                        transition: .5s;
                    }
                    .icon {
                        margin-left: 1rem;
                    }
                }
            }
           
          
        }
    }

</style>