import { selectData } from "../store/selectData.js";

export class CandleModel{
    static store = selectData;

    constructor(){
        this.size = "undefined";
        this.color = "undefined";
        this.scent = "undefined";
    }

    getProperties(){
        return Object.keys(this);
    }

    getOptions(selectID){
        let options;
        switch (selectID) {
            case "size":
              options = Object.keys(CandleModel.store);
              break;
      
            case "color":
              options = Object.keys(CandleModel.store[this.size]);
              break;

            case "scent":
                options = Object.keys(CandleModel.store[this.size][this.color]);
            break;
          }
      
    
          return options;
    }

    resetNextProperties(property) {
      let properties = Object.keys(this);
      let index = properties.indexOf(property);
      while (++index < properties.length) {
          this[properties[index]] = "undefined";
      }
  }

  persist(){
    localStorage.setItem('candle', JSON.stringify(this));
}
}


