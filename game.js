class Game {
  constructor(info) {
    this.playerOne = new Player('player1', '♥️');
    this.playerTwo = new Player('player2', '⭐');
    this.turnTracker = "player1";
    this.gameboard = {

      topRowLeft: null,
      topRowMiddle: null,
      topRowRight: null,
      centerRowLeft: null,
      centerRowMiddle: null,
      centerRowRight: null,
      lastRowLeft: null,
      lastRowMiddle: null,
      lastRowRight: null,
    }
  }
  playGame(chosenSquare) {
    if (this.gameBoard[chosenSquare] === null) {
      this.insertIcon(chosenSquare);
    }
  }
  insertIcon() {

  }
  changePlayer() {

  }
}
