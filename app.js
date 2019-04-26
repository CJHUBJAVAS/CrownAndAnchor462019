var Face = require("./Face");   //import code
var Bet = require("./Bet");
var Mat = require("./Mat");


try {
    var myFace = new Face('Crown', 10, 'https://png.pngtree.com/element_origin_min_pic/17/07/30/8700c014e75552dcea051477182bbb83.jpg');
    var myBet = new Bet(myFace, -5);
    var faces = {};

    faces.push(myFace);

    var myMat = new Mat(faces);

    myMat.faces
    console.log(`I am betting ${myBet.betValue}`);

}

catch(err)  {
    console.log(err.message);
    console.log(err.stack);

}