// add solution here
//function theBeatlesPlay(musicians, instruments) {
//  let BeatlesArray = [];
//  for (let i = 0; i < 4; i++) {
//    BeatlesArray[i] = {
//      musicians + i + 1,
//      "plays" instruments + i + 1
//    }
//  } return BeatlesArray
//}

var BeatlesArray = [];

function theBeatlesPlay(musicians, instruments) {
  
  for (let i = 0; i < musicians.length; i++) {
    BeatlesArray.push(`musicians[i] plays instruments[i]`);
  } return BeatlesArray;
}
