class Die {
    constructor(numberSides, activeFace, rollDie){      //when i say newDie I'm executing this
        this._numberSides = numberSides;
        this._activeFace = activeFace;
        this._rollDie = rollDie;
    }
    set numberSides(newNumberSides) {
        this.numberSides = newNumberSides;
    }
    get numberSides() {
        return this._numberSides;
    }
    set activeFace(newActiveFace)  {
        this.activeFace = newActiveFace;
    }
    get activeFace() {
        return this._activeFace;
    }
    set rollDie(newrollDie)  {
        this.rollDie = newRollDie;
    }
    get rollDie()   {
        return this._rollDie;
    }
}