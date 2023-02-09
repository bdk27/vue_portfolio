<template>
    <div class="row row-cols-md-2 row-cols-lg-4">
        <div class="col-12">
            <div class="item">
                <p class="year">108 學年</p>
                <ul>
                    <li v-for="item in course108" :key="item.id">
                        <p :class="{title: item.title}" class="d-inline-block">{{ item.name }}</p>
                        <span v-show="item.title"></span>
                        <p>{{ item.score }}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-12">
            <div class="item">
                <p class="year">109 學年</p>
                <ul>
                    <li v-for="item in course109" :key="item.id">
                        <p :class="{title: item.title}" class="d-inline-block">{{ item.name }}</p>
                        <span v-show="item.title"></span>
                        <p>{{ item.score }}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-12">
            <div class="item">
                <p class="year">110 學年</p>
                <ul>
                    <li v-for="item in course110" :key="item.id">
                        <p :class="{title: item.title}" class="d-inline-block">{{ item.name }}</p>
                        <span v-show="item.title"></span>
                        <p>{{ item.score }}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-12">
            <div class="item">
                <p class="year">111 學年</p>
                <ul>
                    <li v-for="item in course111" :key="item.id">
                        <p :class="{title: item.title}" class="d-inline-block">{{ item.name }}</p>
                        <span v-show="item.title"></span>
                        <p>{{ item.score }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import { nanoid } from 'nanoid';

    export default {
        name: 'AboutScore',
        setup() {
            const course108 = [
                {
                    id: nanoid(),
                    name: '必修',
                    title: true,
                },
                {
                    id: nanoid(),
                    name: '物件導向程式設計',
                    score: '93分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '作業系統',
                    score: '95分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '機率與統計',
                    score: '94分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '選修',
                    title: true,
                },
                {
                    id: nanoid(),
                    name: '資訊倫理講座',
                    score: '96分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '系統分析與設計',
                    score: '94分',
                    title: false,
                },
            ]
            const course109 = [
                {
                    id: nanoid(),
                    name: '必修',
                    title: true,
                },
                {
                    id: nanoid(),
                    name: '計算機概論',
                    score: '94分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '微積分(一)',
                    score: '95分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '電子物理',
                    score: '89分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '數位系統',
                    score: '94分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '工程數學',
                    score: '74分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '計算機組織與結構',
                    score: '95分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '離散數學',
                    score: '95分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '實務專題與服務學習',
                    score: '88分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '微積分(二)',
                    score: '95分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '電子學',
                    score: '85分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '線性代數',
                    score: '95分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '微處理機系統',
                    score: '79分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '程式能力檢定',
                    score: '90分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '實務專題',
                    score: '50*分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '演算法',
                    score: '96分',
                    title: false,
                },
            ]
            const course110 = [
                {
                    id: nanoid(),
                    name: '必修',
                    title: true,
                },
                {
                    id: nanoid(),
                    name: '程式設計',
                    score: '92分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '組合語言',
                    score: '100分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '資料結構',
                    score: '96分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '電腦網路',
                    score: '94分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '實務專題與學習',
                    score: '50*分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '實務專題',
                    score: '84分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '選修',
                    title: true,
                },
                {
                    id: nanoid(),
                    name: '資工人規劃',
                    score: '94分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: 'python程式設計',
                    score: '79分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: 'python程式設計演練',
                    score: '79分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '科技英文導讀',
                    score: '98分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '軟體工程',
                    score: '92分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '資料庫系統',
                    score: '76分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '科技英文寫作',
                    score: '95分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '專案管理',
                    score: '100分',
                    title: false,
                },
                {
                    id: nanoid(),
                    name: '無線網路',
                    score: '98分',
                    title: false,
                }
            ]
            const course111 = [
                {
                    id: nanoid(),
                    name: '必修',
                    title: true,
                },
                {
                    id: nanoid(),
                    name: '實務專題與學習',
                    score: '78分',
                    title: false,
                },
            ]

            return {
                course108,
                course109,
                course110,
                course111 
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/style.scss';

    .year {
        color: #fff;
        border: 1px solid $light-green;
        padding: .5rem;
        text-align: center;
    }
    ul {
        padding: 0;
        li {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    .title {
        color: $light-green;
        font-size: 1.8rem;
        white-space: nowrap;
        padding-right: 1rem;
    }
    span {
        border: 1px dashed $light-green;
        width: 100%;
    }
</style>