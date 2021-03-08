var currentGame = new Game();

var gameBoardSquares = document.querySelector('#gameBoardGrid');
var playerOneWinCountDisplay = document.querySelector('#leftPlayer');
var playerTwoWinCountDisplay = document.querySelector('#rightPlayer');
var turnDisplay = document.querySelector('#turnDisplay')

gameBoardSquares.addEventListener('click', startGame);
//window.addEventListener('load', persistStorage);

function startGame(event) {
  showIcon(event.target);
  showCurrentTurn();
  //declarationOfGameStatus()
  displayWinCount();
  var clickedSquare = event.target.id;
  currentGame.playGame(clickedSquare);
}


function showIcon(clickedSquareParam) {
  if (clickedSquareParam.innerText === '')
  clickedSquareParam.innerText = currentGame.turnTracker.icon
}

function displayWinCount() {
  playerOneWinCountDisplay.innerText = currentGame.playerOne.winCount;
  playerTwoWinCountDisplay.innerText = currentGame.playerTwo.winCount;
  currentGame.playerOne.saveWinsToStorage();
  currentGame.playerTwo.saveWinsToStorage();
}

function startNewGame() {
  currentGame.resetGame();
  endPlayability();
  showCurrentTurn();
}

function showCurrentTurn() {
  if (currentGame.turnTracker === currentGame.playerOne) {
    turnDisplay.innerText =  `${currentGame.playerOne.name}'s it's your turn!`;

  } else if (currentGame.turnTracker === currentGame.playerTwo) {
    turnDisplay.innerText = `${currentGame.playerTwo.name}'s it's your turn`
  }
}

// function declarationOfGameStatus() {
//   if (!currentGame.SearchForATie) {
//   turnDisplay.innerText = 'Looks like we have a tie!'
//     resetGame();
//     setTimeOut(startGameOver, 2000)
//   } else if (currentGame.win) {
//     turnDisplay.innerText = `${currentGame.turnTracker} IS THE WINNER!`
//   } else {
//     currentGame.changePlayer();
//     showCurrentTurn();
//   }
// }
//
// function startGameOver(){
//   currentGame.terminateGame();
//   resetGame();
//   endPlayability();
//   showCurrentTurn();
// }
//
// function endPlayability() {
//   //how do you turn off an event listener that triggers the whole playGame method
//   //toggle?
// }
//
// function resetGame() {
//   for (var i = 0; i < gameBoardSquares.length; i++) {
//     gameBoardSquares[i].innerText = '';
//     // currentGame.turnTracker.winCount = 0;
//
//   }
// }
//
// function persistStorage() {
//   currentGame.playerOne.saveWinsToStorage();
//   currentGame.playerTwo.saveWinsToStorage();
//   resetGame();
// }
