var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


var ticTacToe = require('./ttt');

var human = new ticTacToe.HumanPlayer();
var game = new ticTacToe.Game(reader, human, human);

game.run( function (winner) {
  if (winner) {
    console.log(winner + " has won the game!");
  }
  else {
    console.log("The game is a draw!");
  }

  reader.close();
  return;
})
