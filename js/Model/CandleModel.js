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
              data = AnimalModel.store;
              break;
      
            case "color":
              data = CandleModel.store[this.type];
              break;

            case "scent":
                data = CandleModel.store[this.type];
          }
      
          let options = Object.keys(data);
          return options;
    }
}


