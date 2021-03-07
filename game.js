class Game {
  constructor() {
    this.allPossibleWins = [[0, 1, 2], [0, 3, 6], [0, 4, 5], [0, 4, 8], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]];
    this.gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.playerOne = new Player('player1', '♥️');
    this.playerTwo = new Player('player2', '⭐');
    this.turnTracker = this.playerOne.name;
    this.win = false;
  }

  playGame(chosenSquare) {
    if (this.playerOne.icon && this.playerTwo.icon !== this.gameBoard[chosenSquare]){
      this.addIcon(chosenSquare);
    }
  }

  addIcon(squareToChange) {
    if (this.turnTracker === this.playerOne.name) {
      this.gameBoard.splice(squareToChange, 1, this.playerOne.icon);
      this.playerOne.iconCounter++
      this.playerOne.squaresPlayedList.push(parseInt(squareToChange));
      this.searchForWin(this.playerOne);
      this.changePlayer();
    } else {
      this.gameBoard.splice(squareToChange, 1, this.playerTwo.icon);
      this.playerTwo.iconCounter++
      this.playerTwo.squaresPlayedList.push(parseInt(squareToChange));
      this.searchForWin(this.playerTwo);
      this.changePlayer();
    }
  }

  changePlayer() {
    if (this.turnTracker === this.playerOne.name) {
      this.turnTracker = this.playerTwo.name;
    } else {
      this.turnTracker = this.playerOne.name;
    }
  }

  searchForWin(personPlaying) {
    console.log(this.gameBoard);
    for (var i = 0; i < this.allPossibleWins.length; i++) {
      if (personPlaying.squaresPlayedList.includes(this.allPossibleWins[i])) {
        personPlaying.winCount++
        this.win = true;
        console.log(personPlaying.name, "wins")
        personPlaying.saveWinsToStorage();
      }
    }
      this.searchForATie();
  }

  searchForATie() {
    if (!this.win && this.playerOne.iconCounter + this.playerTwo.iconCounter === 9) {
        console.log("Its a tie")
      this.terminateGame()
    }
  }

  terminateGame() {
    var currentGame = new Game();
  }
}
