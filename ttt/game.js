var Board = require('./board');

var Game = function(reader,xPlayer,yPlayer) {
  this.board = new Board();
  this.reader = reader;
  this.turn = 'x';
  this.xPlayer =
};

Game.prototype.getInput = function (callback) {
  var game = this;
  var move = [];

  console.log(this.turn + ", it is your turn." );

  this.reader.question("Please input your move row: ", function (rowInput) {
    game.reader.question("Please input your move column: ", function (colInput) {

      if (!rowInput.match(/^[0-2]$/) || !colInput.match(/^[0-2]$/)) {
        console.log("Bad Input");
        game.getInput(callback);
        return;
      }

      var rowInt = parseInt(rowInput);
      var colInt = parseInt(colInput);
      callback([rowInt,colInt]);
    });

  });

  return;
};


Game.prototype.run = function (completionCallback) {
  var game = this;

  this.board.print();
  var move = this.getInput(function (move) {

    var row = move[0];
    var col = move[1];

    if (game.board.isEmpty(row, col)) {
      game.board.placeMark(row, col, game.turn);
      game.turn = (game.turn === 'x') ? 'o' : 'x';
    } else {
      console.log("That spot is already taken!");
    }

    if (game.board.isOver()) {
      game.board.print();
      completionCallback(game.board.winner);
    } else {
      game.run(completionCallback);
    }

  });

  return;
};

module.exports = Game;
