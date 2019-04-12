var ImportedFace = require("./Face");   //import code

var myFace = new ImportedFace('Crown', 10, 'https://png.pngtree.com/element_origin_min_pic/17/07/30/8700c014e75552dcea051477182bbb83.jpg');

var badFace = new ImportedFace('Bad', 'bad');  //call the constructor to start working with those elements

var trueValue = true || false ;

var isImportedFace = myFace instanceof ImportedFace ;
var isFace = myFace instanceof Face ;

console.log(isFace);