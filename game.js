class Game {
  constructor() {
    this.allPossibleWins = [[0, 1, 2], [0, 3, 6], [0, 4, 5], [0, 4, 8], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]];
    this.gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.playerOne = new Player('player1', '♥️');
    this.playerTwo = new Player('player2', '⭐');
    this.turnTracker = this.playerOne.id
    this.win = false;
  }

  playGame(chosenSquare) {
  console.log("play game param", chosenSquare);
    if (this.playerOne.icon !== this.gameBoard[chosenSquare.id] && this.playerTwo.icon !== this.gameBoard[chosenSquare.id ]){
    }
    this.addIcon(chosenSquare);
    }

  addIcon(squareToChange) {
    console.log("addIcon", squareToChange.id)
    if (this.turnTracker === this.playerOne.id) {
      this.gameBoard.splice([squareToChange.id], 1, this.playerOne.icon);
      this.playerOne.iconCounter++
      console.log(this.gameBoard[0])
      this.playerOne.squaresPlayedList.push(parseInt(squareToChange));
      this.searchForWin(this.playerOne);
      this.changePlayer();
    } else if (this.turnTracker === this.playerTwo.id) {
      this.gameBoard.splice([squareToChange.id], 1, this.playerTwo.icon);
      this.playerTwo.iconCounter++
      console.log(this.gameBoard[1])
      this.playerTwo.squaresPlayedList.push(parseInt(squareToChange));
      this.searchForWin(this.playerTwo);
    }
      this.changePlayer();
  }
