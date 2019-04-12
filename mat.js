let Face = require("./Face");

class Mat {
    constructor(collectionFaces){                       //this is an array of faces
        this._collectionFaces = collectionFaces;
    }
    set collectionFaces(newCollectionFaces) {
        this.collectionFaces = newCollectionFaces;
    }
    get collectionFaces() {
        return this._collectionFaces;
    }
}