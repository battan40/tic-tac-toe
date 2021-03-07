class Game {
  constructor() {
    this.playerOne = new Player('player1', '♥️');
    this.playerTwo = new Player('player2', '⭐');
    this.turnTracker = "player1";
    this.gameBoard = {
      topRowLeft: '',
      topRowMiddle: '',
      topRowRight: '',
      centerRowLeft: '',
      centerRowMiddle: '',
      centerRowRight: '',
      lastRowLeft: '',
      lastRowMiddle: '',
      lastRowRight: '',
    }
  }
  playGame(chosenSquare) {
    console.log(chosenSquare);
    if (this.gameBoard[chosenSquare.id] === '')  {
      this.addIcon(chosenSquare);
    }
  }
  addIcon(squareToChange) {

    squareToChange.innerText = this.playerOne.icon;
  }
  changePlayer() {
  }
}
