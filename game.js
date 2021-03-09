class Game {
  constructor() {
    this.allPossibleWins = [[0, 1, 2], [0, 3, 6], [0, 4, 5], [0, 4, 8], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]];
    this.gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.playerOne = new Player('player1', '♥️');
    this.playerTwo = new Player('player2', '⭐');
    this.turnTracker = this.playerOne;
    this.win = false;
  }

  playGame(chosenSquare) {
    if (this.playerOne.icon && this.playerTwo.icon !== this.gameBoard[chosenSquare]){
      this.addIcon(chosenSquare, this.turnTracker);
    }
  }

  // addIcon(squareToChange) {
  //   if (this.turnTracker === this.playerOne) {
  //     this.gameBoard.splice(squareToChange, 1, this.playerOne.icon);
  //     console.log(this.gameBoard);
  //     this.playerOne.iconCounter++
  //     this.playerOne.squaresPlayedList.push(parseInt(squareToChange));
  //     this.searchForWin(this.playerOne);
  //   } else {
  //     this.gameBoard.splice(squareToChange, 1, this.playerTwo.icon);
  //         console.log(this.gameBoard);
  //     this.playerTwo.iconCounter++
  //     this.playerTwo.squaresPlayedList.push(parseInt(squareToChange));
  //     this.searchForWin(this.playerTwo);
  //   }
  // }

  addIcon(squareToChange, currentPlayer) {
      this.gameBoard.splice(squareToChange, 1, currentPlayer.icon);
      console.log(this.gameBoard);
      currentPlayer.iconCounter++
      currentPlayer.squaresPlayedList.push(parseInt(squareToChange));
      this.searchForWin(currentPlayer);
    }


  changePlayer() {
    if (this.turnTracker === this.playerOne) {
      this.turnTracker = this.playerTwo;
    } else {
      this.turnTracker = this.playerOne;
    }
  }

  searchForWin(personPlaying) {
    for (var i = 0; i < this.gameBoard.length; i++) {
       console.log(this.allPossibleWins[i][0]);
      if (personPlaying.squaresPlayedList.includes(this.allPossibleWins[i][0]) && personPlaying.squaresPlayedList.includes(this.allPossibleWins[i][1]) && personPlaying.squaresPlayedList.includes(this.allPossibleWins[i][2])) {
        this.win = true;
        console.log('Winner!')
        console.log(personPlaying.squaresPlayedList);
        personPlaying.winCount++
        personPlaying.saveWinsToStorage();
        this.terminateGame();
      } else {
        this.searchForATie();
      }
    }
  }


  searchForATie() {
    if (!this.win && this.playerOne.iconCounter + this.playerTwo.iconCounter === 9) {
      this.terminateGame()
    }
  }

  terminateGame() {
    var currentGame = new Game();
  }
}
