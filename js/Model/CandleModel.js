export class CandleModel{
    constructor(size, color, scent){
        this._size = size;
        this._color = color;
        this._scent = scent;
    }

    get size(){
        return this._size;
    }

    get color(){
        return this._color;
    }

    get scent(){
        return this._scent;
    }

    set size(size){
        this._size = size;
    }

    set color(color){
        this._color = color;
    }

    set scent(scent){
        this._scent = scent;
    }
}


