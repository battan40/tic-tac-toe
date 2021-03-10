var currentGame = new Game();

var boardSquares = document.querySelectorAll('.board-squares')
var gameBoard = document.querySelector('#gameBoardGrid');
var playerOneWinCountDisplay = document.querySelector('#leftPlayer');
var playerTwoWinCountDisplay = document.querySelector('#rightPlayer');
var turnDisplay = document.querySelector('#turnDisplay');

gameBoard.addEventListener('click', startGame);
window.addEventListener('load', pageLoads);

function pageLoads() {
  showCurrentTurn();
  displayWinCount();
}

function startGame(event) {
  if (!currentGame.win && event.target.closest('.board-squares')){
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
    turnDisplay.innerText =  `${currentGame.playerOne.icon} it's your turn!`;
  } else if (currentGame.turnTracker === currentGame.playerTwo) {
    turnDisplay.innerText = `${currentGame.playerTwo.icon} it's your turn`
  }
}

function declarationOfGameStatus() {
    if (currentGame.win) {
    turnDisplay.innerText = `${currentGame.turnTracker.icon} IS THE WINNER!`
    displayWinCount();
    setTimeout(resetGame, 2000)
  } else if (!currentGame.win && currentGame.tie) {
    turnDisplay.innerText = 'WE HAVE A TIE!!!'
    setTimeout(resetGame, 3000)
  }
}

function resetGame() {
  for (var i = 0; i < boardSquares.length; i++) {
    boardSquares[i].innerText = '';
  }
  currentGame.startNewGame();
  showCurrentTurn();
}
