class Mat {
    constructor(collectionFaces){
        this._collectionFaces = collectionFaces;
    }
    set collectionFaces(newCollectionFaces) {
        this.collectionFaces = newCollectionFaces;
    }
    get collectionFaces() {
        return this._collectionFaces;
    }
}