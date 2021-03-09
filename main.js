var currentGame = new Game();

var gameBoard = document.querySelector('#gameBoardGrid');
var playerOneWinCountDisplay = document.querySelector('#leftPlayer');
var playerTwoWinCountDisplay = document.querySelector('#rightPlayer');
var turnDisplay = document.querySelector('#turnDisplay');
var boardSquares = document.querySelectorAll('.board-squares')

gameBoard.addEventListener('click', startGame);
window.addEventListener('load', pageLoads);

function pageLoads() {
  showCurrentTurn();
  displayWinCount();
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
    setTimeout(resetGame, 2000)
  }
}

function resetGame() {
  for (var i = 0; i < boardSquares.length; i++) {
    boardSquares[i].innerText = '';
  }
  currentGame.startNewGame();
  showCurrentTurn();
}
