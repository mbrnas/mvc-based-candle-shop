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
        let data;
        switch (selectID) {
            case "size":
              data = CandleModel.store;
              break;
      
            case "color":
              data = CandleModel.store;
              break;

            case "scent":
                data = CandleModel.store;
            break;
          }
      
          let options = Object.keys(data);
          return options;
    }
}


