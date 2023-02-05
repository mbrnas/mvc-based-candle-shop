export class CandleView {
    constructor(){
        this.candleForm = document.querySelector("#form-candle");
        this.selectsDiv = document.querySelector("#div-selects");
        this.selects = null;
        this.candleDiv = document.querySelector("#div-candle");
    }

    renderSelects(selectIDs) {
        selectIDs.forEach((name) => {
            let select = document.createElement('select');
            select.setAttribute("id", name);
            select.options.add(new Option(` -- Select a ${name} -- `, 'undefined'));
            this.selectsDiv.appendChild(select);
        });

        this.selects = this.selectsDiv.querySelectorAll('select');
    }

    resetNextSiblings(selectID) {
        let select = this.selectsDiv.querySelector(`#${selectID}`);
        let nextSelect = select.nextElementSibling;
        while (nextSelect) {
            nextSelect.length = 1;
            nextSelect = nextSelect.nextElementSibling;
        }
    }

    addOptions(selectID, options) {
        let select = this.selectsDiv.querySelector(`#${selectID}`);
        select.length = 1;
        options.forEach((option) => {
            select.options.add(new Option(option, option));
        });
    }


    renderCandle() {
        let imgSrc = 'media/';

        this.selects.forEach((select) => {
            imgSrc += `${select.value}-`;
        });
        imgSrc = imgSrc.slice(0, -1) + '.png'; //remove the last character '-'.

        this.candleDiv.querySelector('img').src = imgSrc;
    }
}