class Game {
  constructor() {
    this.allPossibleWins = []
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
  //what data type is squareToChange?
  //expected output is a string of a number
  //but I want that string of a number to turn back into a number so I can compare it to all possible wins later
  //parseInt is how you compare apples to oranges in javaScript, so if squareToChange is a string of a number but you want its actual number board loacation you will need to push it into your new array but parsed
    if (this.turnTracker === this.playerOne.id) {
      this.gameBoard.splice([squareToChange.id], 1, this.playerOne.icon);
      console.log(this.gameBoard[0])
      // this.playerOne.squaresPlayedList.push(parseInt(squareToChange));
        this.searchForWin(this.playerOne);
        this.changePlayer();


    } else if (this.turnTracker === this.playerTwo.id) {
      this.gameBoard.splice([squareToChange.id], 1, this.playerTwo.icon);
      console.log(this.gameBoard[1])
      // // this.playerTwo.squaresPlayedList.push(parseInt(squareToChange));
      this.searchForWin(this.playerTwo);
    }
      this.changePlayer();
  }

  changePlayer() {
    if (this.turnTracker === playerOne.id) {
      this.turnTracker = playerTwo.id;
      console.log(this.turnTracker);
    }
  }
  searchForWin(personPlaying) {
  //Is there a row of three icons that match in any direction?
  //If thats true then theres a winner, if not, invoke changePlayer
  //If there are a row of three icons that match in any direction
  //!personPlaying.allPossibleWins.includes()
  //
  // if !allPossibleWins

  //if sum of hearts is less than sum of stars by exactly one
  // return
  // else incriment wincount
  //
  // reassign winner to true
  //
  // don't forget localStorage }
  // if (!this.win) {
  //
  this.searchForTie();
//}
  }
  searchForTie() {
    //
    //are the total number of icons on the board === 9
    //are there 9 icons out
    //&& no conditions that determineAWin match at any of its indexes
    //terminateGame()

  }
  terminateGame() {
    //instantiate a new game
  }
}
