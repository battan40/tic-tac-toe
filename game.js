class Game {
  constructor() {
    this.allPossibleWins = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]];
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

  addIcon(squareToChange, currentPlayer) {
      this.gameBoard.splice(squareToChange, 1, currentPlayer.icon);
      currentPlayer.iconCounter++
      currentPlayer.squaresPlayedList.push(parseInt(squareToChange));
      this.searchForWin(currentPlayer);
      if (!this.win) {
        this.changePlayer();
      }
    }

  changePlayer() {
    if (this.turnTracker === this.playerOne) {
      this.turnTracker = this.playerTwo;
    } else {
      this.turnTracker = this.playerOne;
    }
  }

  searchForWin(personPlaying) {
     for (var i = 0; i < this.allPossibleWins.length; i++) {
       if (personPlaying.squaresPlayedList.includes(this.allPossibleWins[i][0]) && personPlaying.squaresPlayedList.includes(this.allPossibleWins[i][1]) && personPlaying.squaresPlayedList.includes(this.allPossibleWins[i][2])) {
         this.win = true;
         personPlaying.winCount++
         personPlaying.saveWinsToStorage();
       }
     }
      this.searchForTie();
   }

   searchForTie() {
     if (!this.win && this.playerOne.iconCounter + this.playerTwo.iconCounter === 9) {
     this.tie = true;
     }
   }


  startNewGame() {
    currentGame = new Game;
  }
}
