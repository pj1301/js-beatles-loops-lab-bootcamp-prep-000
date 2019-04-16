// add solution here

function theBeatlesPlay(musicians, instruments) {
  var BeatlesArray = [];
  for (let i = 0; i < musicians.length; i++) {
    BeatlesArray.push(`${musicians[i]} plays ${instruments[i]}`); //you have to use ${} in order to ensure you don't output "musicians plays instruments"
  } return BeatlesArray;
}
