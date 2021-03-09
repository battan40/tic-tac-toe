var currentGame = new Game();

var gameBoardSquares = document.querySelector('#gameBoardGrid');
var playerOneWinCountDisplay = document.querySelector('#leftPlayer');
var playerTwoWinCountDisplay = document.querySelector('#rightPlayer');
var turnDisplay = document.querySelector('#turnDisplay')

gameBoardSquares.addEventListener('click', startGame);
window.addEventListener('load', pageLoads);

function pageLoads() {
  currentGame.playerOne.winCount =
  currentGame.playerOne.retrieveWinsFromStorage();
  currentGame.playerTwo.winCount = currentGame.playerTwo.retrieveWinsFromStorage();
  showCurrentTurn();
  displayWinCount();
  console.log(currentGame.playerOne);
  console.log(currentGame.playerTwo);
}

function startGame(event) {
  if (!currentGame.win){
    showIcon(event.target);
    currentGame.playGame(event.target.id);
    showCurrentTurn();
    declarationOfGameStatus();
  }
}

function showIcon(clickedSquareParam) {
  if (clickedSquareParam.innerText === '') {
  clickedSquareParam.innerText = currentGame.turnTracker.icon
 }
}

function displayWinCount() {
  playerOneWinCountDisplay.innerText = currentGame.playerOne.winCount;
  playerTwoWinCountDisplay.innerText = currentGame.playerTwo.winCount;
}

function showCurrentTurn() {
  if (currentGame.turnTracker === currentGame.playerOne) {
    turnDisplay.innerText =  `${currentGame.playerOne.name} it's your turn!`;
  } else if (currentGame.turnTracker === currentGame.playerTwo) {
    turnDisplay.innerText = `${currentGame.playerTwo.name} it's your turn`
  }
}

function declarationOfGameStatus() {
    if (currentGame.win) {
    turnDisplay.innerText = `${currentGame.turnTracker.name} IS THE WINNER!`
    displayWinCount();
  }
}

// function startGameOver(){
//   resetGame();
//   showCurrentTurn();
// }

function resetGame() {
  for (var i = 0; i < gameBoardSquares.length; i++) {
    gameBoardSquares[i].innerText = '';
    currentGame.turnTracker.squaresPlayedList = [];
    currentGame.turnTracker.iconCounter = 0;
    currentGame.win = false;
  }
}
