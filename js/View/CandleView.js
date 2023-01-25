export class CandleView {
    constructor(){
        this.candleForm = document.querySelector("#form-candle");
        this.candleDiv = document.querySelector("#div-candle");

    }

    renderCandle(size, color, scent){
        let imgSrc = `media/${size}-${color}-${scent}.jpg`;
        this.candleDiv.innerHTML = `<img src = '${imgSrc}' alt = 'animal image'>`;
    }
}