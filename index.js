// add solution here

function theBeatlesPlay(musicians, instruments) {
  var BeatlesArray = [];
  for (let i = 0; i < musicians.length; i++) {
    BeatlesArray.push(`${musicians[i]} plays ${instruments[i]}`);
  } return BeatlesArray;
}
