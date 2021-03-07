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
  console.log("play game param", chosenSquare);
    if (this.playerOne.icon && this.playerTwo.icon !== this.gameBoard[chosenSquare]){
      this.addIcon(chosenSquare);
    }
  }

  addIcon(squareToChange) {
    console.log("addIcon", squareToChange)
    if (this.turnTracker === this.playerOne.name) {
      this.gameBoard.splice(squareToChange, 1, this.playerOne.icon);
      // this.playerOne.iconCounter++
      console.log("position on board", this.gameBoard)
      console.log("should display turn change", this.turnTracker)
      // this.playerOne.squaresPlayedList.push(parseInt(squareToChange));
      // this.searchForWin(this.playerOne);
      this.changePlayer();
    } else {
      this.gameBoard.splice(squareToChange, 1, this.playerTwo.icon);
      // this.playerTwo.iconCounter++
      console.log(this.gameBoard)
      console.log(this.turnTracker)
      this.changePlayer();
    }
      // this.playerTwo.squaresPlayedList.push(parseInt(squareToChange));
      // this.searchForWin(this.playerTwo);
  }



  changePlayer() {
    if (this.turnTracker === this.playerOne.name) {
      this.turnTracker = this.playerTwo.name;
      console.log(this.turnTracker);
    } else {
      this.turnTracker = this.playerOne.name;
    }
  }
}
//
//   searchForWin(personPlaying) {
//     console.log("Why can't I make a current player param that will feed me the data from the previous run methods?", personPlaying)
//     for (var i = 0; i < this.allPossibleWins.length; i++) {
//       if (this.squaresPlayedList.includes(allPossibleWins[i])) {
//         personPlaying.winCount++
//         this.win = true;
//         console.log(personPlaying.winCount)
//         personPlaying.saveWinsToStorage();
//       }
//     }
//       this.searchForATie();
//   }
//
//   searchForATie() {
//     if (!allPossibleWins && this.playerOne.iconCounter + this.playerTwo.iconCounter === 9) {
//       this.terminateGame()
//     }
//   }
//
//   terminateGame() {
//     var currentGame = new Game();
//   }
// }
