// Using number 2 as designation for player 1 and number 3 as designation for player 2
// if the total is 6, player 1 won the game
// if total is 9, player 2 won the game
// if total is 7 or 8, no one won, and the row is full
// if total is less than 6, no one one and spots are still open

// game initialize as array of arrays
var Game = function() {

  this.board = [[0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]];

  this.player1 = 2; // 'x'
  this.player2 = 3; // 'o'
  this.winner = null;
  this.gameOver = false;
};

// two players, each making a move, and then a check on if either won yet
Game.prototype.move = function(position) {
  if (this.board[position] !== 0) {
    // do not allow the player to put piece in this postion
  } else {
    // put down piece of player, 'x' if player1, 'o' if player2
    // check if there is a winning set, or if board is full
  }
};

// Gameover checker
Game.prototype.checker = function() {

  var row1Full = false;
  var row2Full = false;
  var row3Full = false;

  var isWinner = function(total, index) {
    if (total === 6) {
      // player 1 wins
      this.winner = 'Player 1';
      this.gameOver = true;
    } else if (total === 6) {
      // player 2 wins
      this.winner = 'Player 2';
      this.gameOver = true;
    } else if (index) {
      // all spots full on row
      if (total > 6 && total < 9 && index === 0) {
        row1Full = true;
      }
      if (total > 6 && total < 9 && index === 1) {
        row2Full = true;
      }
      if (total > 6 && total < 9 && index === 2) {
        row3Full = true;
      }
      if (row1Full && row2Full && row3Full) {
        this.winner = 'Draw';
      } else {
        // Not all are full, reset them back to false;
        row1Full = false;
        row2Full = false;
        row3Full = false;
      }
    }
  };

  //check horizontal
  this.board.forEach((item, i) => {
    var total = item.reduce((num) => num += num || 0);
    isWinner(total, i); // check for draw after scanning the board horizontally
  });

  //check vertical
  for (let x = 0; x < 2; x++) {
    var total = 0;
    this.board.forEach((item, i) => {
      total += item[0];
    });
    isWinner(total);
  }

  // check right Diagonal
  var total = 0;
  this.board.forEach((item, i) => {
    total += item[i];
  });
  isWinner(total);

  // check left Diagonal
  total = 0;
  var back = 2;
  this.board.forEach((item, i) => {
    total += item[back];
    back--;
  });
  isWinner(total);
};

// Score count on the winner and then clearing the board
