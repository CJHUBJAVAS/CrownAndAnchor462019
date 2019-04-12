let Face = require("./Face");

class Bet {
    constructor(face, betValue){
        this._face = face;
        this._betValue = betValue;
    }
    



    set betValue(newBetValue)  {
        if(isNaN(newBetValue)) {
            this._betValue > 0;
        }
        else {
            this._betValue = newBetValue;
        }
    }
    get betValue() {
        return this._betValue;
    }
    