<template>
    <section id="about">
        <h3  class="text-center text-light mb-5"><span>關於我</span></h3>
        <div class="container">
            <div class="row row-cols-md-1">
                <div class="col-12 col-lg-4">
                    <div class="items shadow-lg d-flex justify-content-center flex-column align-items-center p-5">
                        <div class="image mb-3">
                            <img src="../assets/img/picwish.png" class="about-myself">
                            <img src="../assets/img/AbstractWaves.png" class="waves">
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
                <div class="col-12 col-lg-8">
                    <div class="items shadow-lg h-100 p-5">
                        <div class="tab-title d-flex align-items-center justify-content-start  mb-5 ">
                            <h5 class="tab-links active" @click="opentab">自我介紹</h5>
                            <h5 class="tab-links" @click="opentab">在校成績</h5>
                            <h5 class="tab-links" @click="opentab">外語能力</h5>
                        </div>
                        <div class="tab-contents lh-lg show">
                            <p>我高中就讀廣告設計，進入大學選擇了工業設計，但是念了二年後發覺這並不是我想要的，而在一次的課堂上老師無意講起了程式設計，當時看到就吸引我了，只要在電腦上打一些指令就能夠做到很多事情。從那天開始就自己先上網學程式，而我第一個學的是 python，練習到後來遇到了許多瓶頸，發現靠著自己的能力學習有限，而且也對於此領域的充滿好奇，所以決定跳脫舒適圈轉系到資工系就讀</p>
                            <p>經過一段時間的探索後，我發現我對於前端方面有相當的熱情及興趣，因為能夠運用過往所學的技術以及結合現在所學的專業。從一開始什麼都不會，跟著別人的步驟一步步做，到後來能夠靠自己寫點簡單的網頁。隨著時間不斷學，習網頁也是越來越複雜，從規劃、設計到執行也花了大量時間和精力，最後出來的成品都會讓我有非常大的成就感</p>

                            <div class="swot">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>STRENGTHS 優勢</th> 
                                            <th>WEAKNESSES 劣勢</th>
                                        </tr> 
                                    </thead>
                                    <tbody>
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
                                    </tbody>      
                                </table>
                            </div>
                        </div>
                        <div class="tab-contents">
                            <div class="">
                                <p class="text-light">*此處為資工系相關成績，完整成績單請點擊右側按鈕</p>
                                <!-- <teleport to='body'>
                                    <img src="../assets/img/score.jpg" class="w-100">
                                </teleport> -->
                            </div>
                            
                            <div class="score">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>108 學年</th> 
                                            <th>109 學年</th>
                                            <th>110 學年</th>
                                            <th>111 學年</th>
                                        </tr>   
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p class="title">必修</p>
                                                <p>物件導向程式設計 : 93分</p>
                                                <p>作業系統 : 95分</p>
                                                <p>機率與統計 : 94分</p>
                                                <p class="title">選修</p>
                                                <p>資訊倫理講座 : 96分</p>
                                                <p>系統分析與設計 : 94分</p>
                                            </td>
                                            <td>
                                                <p class="title">必修</p>
                                                <p>計算機概論 : 94分</p>
                                                <p>微積分(一) : 95分</p>
                                                <p>電子物理 : 89分</p>
                                                <p>數位系統 : 94分</p>
                                                <p>工程數學 : 74分</p>
                                                <p>計算機組織與結構 : 95分</p>
                                                <p>離散數學 : 95分</p>
                                                <p>實務專題與服務學習: 88分</p>
                                                <p>微積分(二) : 95分</p>
                                                <p>電子學 : 85分</p>
                                                <p>線性代數 : 95分</p>
                                                <p>微處理機系統 : 79分</p>
                                                <p>程式能力檢定 : 90分</p>
                                                <p>實務專題 : 50*分</p>
                                                <p>演算法 : 96分</p>
                                            </td>
                                            <td>
                                                <p class="title">必修</p>
                                                <p>程式設計 : 92分</p>
                                                <p>組合語言 : 100分</p>
                                                <p>資料結構 : 96分</p>
                                                <p>電腦網路 : 94分</p>
                                                <p>實務專題與學習 : 50*分</p>
                                                <p>實務專題 : 84分</p>
                                                <p class="title">選修</p>
                                                <p>資工人規劃 : 94分</p>
                                                <p>python程式設計 : 79分</p>
                                                <p>python程式設計演練 : 79分</p>
                                                <p>科技英文導讀 : 98分</p>
                                                <p>軟體工程 : 92分</p>
                                                <p>資料庫系統 : 76分</p>
                                                <p>科技英文寫作 : 95分</p>
                                                <p>專案管理 : 100分</p>
                                                <p>無線網路 : 98分</p>
                                            </td>
                                            <td>
                                                <p class="title">必修</p>
                                                <p>實務專題與學習 : 78分</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
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
    @import '../assets/scss/global.scss';

    h3 {
        @extend %head-title;
    }
    .items {
        .image {
            position: relative;
            width: 70%;
            .about-myself {
                width: 100%;
                border-radius: 50%;
                border: 1px solid $light-green;
            }
            .waves {
                position: absolute;
                width: 35%;
                bottom: 0;
                right: 0;
            }
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
        .score {
            table {
                width: 100%;
                thead {
                    text-align: center;
                    th {
                        width: 20%;
                        border: 1px solid $light-green;
                        color: #fff;
                        text-align: center;
                        font-size: 1.6rem;
                        padding: .5rem;
                    } 
                }
                tbody {
                    td {
                        vertical-align: top;
                        .title {
                            color: $light-green;
                            margin-top: 1rem;
                        }
                    }
                }
            }
            
            
        }
        
    }
    
    @media (max-width: 991px) {
        .items {
            .image {
                width: 50%;
            }
        
        }
    }
</style>