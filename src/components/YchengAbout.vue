<template>
    <section id="about">
        <h3  class="text-center text-light mb-5"><span>關於我</span></h3>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-4">
                    <div class="items shadow-lg d-flex justify-content-center flex-column align-items-center p-5">
                        <div class="image mb-3">
                            <img src="https://picsum.photos/id/684/300/300">
                        </div>
                        <ul>
                            <li class="title">基本資料</li>
                            <li><font-awesome-icon icon="fa-solid fa-user" class="icon"/>顏永程</li>
                            <li><font-awesome-icon icon="fa-solid fa-cake-candles" class="icon"/>2000 / 04 / 27</li>
                            <li><font-awesome-icon icon="fa-solid fa-graduation-cap" class="icon"/>復興商工 - 廣告設計系</li>
                            <li><font-awesome-icon icon="fa-solid fa-graduation-cap" class="icon" style="color: #333"/>朝陽科技大學 - 資訊工程系</li>
                            <li class="title mt-3">聯絡資料</li>
                            <li><font-awesome-icon icon="fa-solid fa-phone" class="icon"/>0909820427</li>
                            <li><font-awesome-icon icon="fa-solid fa-map" class="icon"/>新北市蘆洲區永平街32巷21弄35號6樓</li>
                            <li><font-awesome-icon icon="fa-solid fa-envelope" class="icon"/>briansam195@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-md-8">
                    <div class="items shadow-lg h-100 p-5">
                        <div class="tab-title d-flex align-items-center justify-content-start  mb-5 ">
                            <h5 class="tab-links active" @click="opentab">自我介紹</h5>
                            <h5 class="tab-links" @click="opentab">在校成績</h5>
                            <h5 class="tab-links" @click="opentab">外語能力</h5>
                        </div>
                        <div class="tab-contents lh-lg show">
                            <p>我高中是讀廣告設計，進入大學選擇了工業設計，但是念了二年後發覺這並不是我想要的，而在一次的課堂上老師無意講起了程式設計，當時看到就吸引我了，只要在電腦上打一些指令就能夠做到很多事情。從那天開始就自己先上網學程式，而我第一個學的是python，寫到後來遇到了許多瓶頸，發現靠著自己的能力有限，而且也對於此領域的充滿好奇，所以決定跳脫舒適圈轉系到資工系就讀</p>
                            <p>經過一段時間的探索後，我發現我對於前端方面有相當的熱情及興趣，因為能夠運用過往所學的技術以及結合現在所學的專業。從一開始什麼都不會，跟著別人的步驟一步步做，到後來能夠自己寫點簡單的網頁，隨著時間不斷學習，網頁也是越寫越複雜，從規劃、設計到執行也花了大量時間和精力，最後出來的成品都會讓我有非常大的成就感</p>

                            <div class="swot">
                                <table>
                                    <tr>
                                        <th>STRENGTHS 優勢</th> 
                                        <th>WEAKNESSES 劣勢</th>
                                    </tr>
                                    <tr>
                                        <td>與其他本科系學生相比，擁有設計經驗，有助於日後開發和溝通</td>
                                        <td>無團隊開發與實戰經驗</td>
                                    </tr>
                                    <tr>
                                        <th>OPPORTUNITIES 機會</th>
                                        <th>THREATS 威脅</th>
                                    </tr>
                                    <tr>
                                        <td>前端開發需要掌握的技術也在迭代更新</td>
                                        <td>入行門檻相對較低，競爭激烈</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="tab-contents">
                            <p>456</p>
                        </div>
                        <div class="tab-contents">
                            <p>789</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { onMounted } from 'vue';
    export default {
        name: 'YchengAbout',
        setup() {

             
            function opentab() {
                let tabLink = document.getElementsByClassName('tab-links');
                let tabContent = document.getElementsByClassName('tab-contents');

                for(let i=0; i<tabLink.length; i++) {
                    tabLink[i].addEventListener('click', function() {
                        for (let j=0; j<tabLink.length; j++) {
                            tabLink[j].classList.remove('active');
                            tabContent[j].classList.remove('show');
                        }
                        this.classList.add('active');
                        tabContent[i].classList.add('show');
                    });
                }
            }
            onMounted(() => {
                opentab()
            })
 
            return {
                opentab,
            }
        }
    }
</script>

<style lang='scss' scoped>
    @import '../assets/scss/style.scss';

    h3 {
        @extend %head-title;
    }
    .items {
        img {
            width: 100%;
            border-radius: 50%;
        }
        .icon {
            margin-right: 1rem;
        }
        ul {
            li {
                color: $text-color;
                font-size: 1.6rem;
                padding: .5rem;
            }
        }
        .title {
            font-size: 1.8rem;
            color: $light-green;
        }
    }
    .tab-links {
        color: #ccc;
        font-size: 1.8rem;
        padding: 1rem 2rem;
        border: 1px solid $text-color;
        border-radius: 1rem;
        margin-right: 1rem;
        cursor: pointer;
        &.active, &:hover {
            color: $dark-green;
            border: 1px solid $light-green;
            background: $light-green;
        }
    }
    .tab-contents {
        color: $text-color;
        font-size: 1.6rem;
        display: none;
        &.show {
            display: block;
        }
        p {
            font-size: 1.6rem;
            /* text-indent: 2em; */
        }
        .swot {
            margin-top: 3rem;
            table {
                width: 100%;
                tr {
                    th {
                        width: 50%;
                        border: 1px solid $light-green;
                        color: #fff;
                        text-align: center;
                        font-size: 1.6rem;
                        padding: .5rem;
                    }
                    td {
                        padding: 2rem 1rem;
                        text-align: center;
                    } 
                }
               
            }
        }
        
    }
    

</style>