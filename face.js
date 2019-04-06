class Face {
    constructor(symbol, value, image){        //when i say newFace I'm executing this
        this._symbol = symbol;
        this._value = value;
        this._image = image;
    }
    set symbol(newSymbol) {
        this.symbol = newSymbol;
    }
    get symbol() {
        return this._symbol;
    }
    set value(newValue)  {
        this.value = newValue;
    }
    get value() {
        return this._value;
    }
    set image(newImage)  {
        this.image = newImage;
    }
    get image()   {
        return this._image;
    }
}