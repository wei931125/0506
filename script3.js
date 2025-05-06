//js
const outer_data = { 
        //使用的資料...
        text: "淡江大學",
        text2: "這是第二行文字",
        counter: 0,
        htmlText: "<p><font color=blue>內文</font><b>粗體</b></p>",
        link: "https://www.tku.edu.tw",
        fruits: [
            { name: "蘋果", price: 30, num: 10},
            { name: "香蕉", price: 60, num: 25},
            { name: "芭樂", price: 120, num: 40}
           ],
           selectedFruit: null // 用於儲存選擇的水果
    };

const app = Vue.createApp({
    data() {
        return outer_data;
    },
    methods: {
        incrementCounter() {
            this.counter++; // 每次按下按鈕時計數加 1
        },
        updateFruitDetails() {
            // 當選擇水果時，自動更新選擇的水果資訊
            console.log("選擇的水果:", this.selectedFruit);
        }
    }
});

app.mount("#app");
