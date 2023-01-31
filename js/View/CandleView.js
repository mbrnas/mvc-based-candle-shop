export class CandleView {
    constructor(){
        this.candleForm = document.querySelector("#form-candle");
        this.selectsDiv = document.querySelector("#div-selects");
        this.selects = null;
        this.candleDiv = document.querySelector("#div-candle");
    }

    renderSelects(selectIDs){
        selectIDs.forEach( (id) => {
         let select = document.createElement('select');
         select.setAttribute('id',id);
         select.options.add(new Option(`--Select a ${name} --`, 'undefined', 'undefined'));
         this.selectsDiv.appendChild(select);
        } );
 
        this.selects = this.selectsDiv.querySelectorAll('select');
     }
}