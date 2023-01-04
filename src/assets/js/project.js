import { nanoid } from 'nanoid'

const htmlProject = [
    {
        id: nanoid(),
        name: '快打旋風V角色表',
        img1: require('../img/sfv-1.jpg'),
        img2: require('../img/sfv-2.jpg'),
        point: 'html、css',
        content: '這是我的第一個作品，因為很喜歡快打旋風所以做了一個角色表，裡面包含五代所有角色故事以及相關訊息。由於是第一個作品，所以是為了讓我能夠熟悉 html 結構和 css 語法',
        url: 'https://bdk27.github.io/SFV/',
        slide: true,
    },
    {
        id: nanoid(),
        name: '台灣彩券',
        img1: require('../img/taiwanLottery.jpg'),
        point: 'html、css',
        content: '在找練習的時候，不小心看到台灣運彩的網站，覺得網站設計的不好看子幾可以設計更好，剛好還沒完全熟悉 html 和 css，所以決定做一個出來看看，內容主要也是以結構跟設定 css 為主',
        url: 'https://bdk27.github.io/TaiwanLottery/',
        slide: false,
    },
    {
        id: nanoid(),
        name: '星巴克',
        img1: require('../img/starbucks.jpg'),
        point: 'RWD、js',
        content: '經過前面的練習後，我決定嘗試用星巴克網頁做練習，因為它的網站首頁大多是圖片比較簡單，所以決定看著它來做並且練習 RWD ，不僅如此也嘗試使用 js 做了導覽列',
        url: 'https://bdk27.github.io/starbucks/',
        slide: false,
    },
    {
        id: nanoid(),
        name: '曜健身運動館',
        img1: require('../img/sunlight.jpg'),
        point: '綜合練習( html、css、js )',
        content: '本身對於健身很有興趣，這間是我大學時期去的健身房，但因為它們只能用 line 或 facebook 聯絡，並沒有一個專門的網站，所以我嘗試使用當時所學的技巧來做出來網頁來',
        url: 'https://bdk27.github.io/sunlight-gym/',
        slide: false,
    }
]
const vueProject = [
    {
        id: nanoid(),
        name: '線上隨機產生用戶資訊',
        img1: require('../img/user-1.jpg'),
        img2: require('../img/user-2.jpg'),
        point: 'vue',
        content: '嘗試使用 vue 框架來寫出網頁，選擇 option api 來試做。透過 fetch 來請求 random user 回傳人物資料，並且設定按鈕來切換淺色或深色背景，而這次練習也算是為了能更加熟悉整個 vue 的環境',
        url: 'https://bdk27.github.io/vue-user/',
        slide: true,
    },
    {
        id: nanoid(),
        name: 'TShop - 電商網站',
        img1: require('../img/tshop-1.jpg'),
        img2: require('../img/tshop-2.jpg'),
        point: 'vue cli、vue-router、mitt',
        content: '首次使用 cli 來做出網頁，只要點擊購物車按鈕，就會使用 mitt 來傳送資料到 nav 組件，之後靠 router 來傳送資料到結帳頁面，在結帳頁面中可以調整數量，並及時計算費用',
        url: 'https://bdk27.github.io/vue_tshop/',
        slide: true,
    },
    {
        id: nanoid(),
        name: '登入頁面',
        img1: require('../img/login-1.jpg'),
        img2: require('../img/login-2.jpg'),
        point: 'vue composition api、localstorage、scss',
        content: '首次使用 composition api 和 scss 來做出網頁，首先先到註冊帳號頁面來註冊帳號密碼，並且有圖形驗證機制，之後透過 localstorage 來儲存帳號密碼。最後再回到首頁進行登入',
        url: 'https://bdk27.github.io/vue_login/',
        slide: true,
    },
    {
        id: nanoid(),
        name: 'CARent - 租車網',
        img1: require('../img/carent-1.jpg'),
        img2: require('../img/carent-2.jpg'),
        img3: require('../img/carent-3.jpg'),
        point: 'bootstrap',
        content: '這次網頁嘗試使用 bootstrap 來做，點擊立即租車按鈕或右邊的車子按鈕，進入到預約租車的頁面，選擇時間和地點後，可以按下查看車款按鈕就會出現一系列車款供你選擇，選定車款後點擊按鈕就會轉到輸入資料的頁面',
        url: 'https://bdk27.github.io/vue_carRental/',
        slide: true,
        carent: true,
    },
]

export { htmlProject, vueProject }