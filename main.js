var currentGame = new Game();

var gameBoardSquares = document.querySelector('#gameBoardGrid');
var playerOneWinCountDisplay = document.querySelector('#leftPlayer');
var playerTwoWinCountDisplay = document.querySelector('#rightPlayer');
var turnDisplay = document.querySelector('#turnDisplay')

gameBoardSquares.addEventListener('click', startGame);
window.addEventListener('load', persistStorage);

function startGame(event) {
  showIcon(event.target);
  var clickedSquare = event.target.id;
  currentGame.playGame(clickedSquare);
  displayWinCount();
}


function showIcon(clickedSquareParam) {
  if (clickedSquareParam.innerText === '')
  clickedSquareParam.innerText = currentGame.turnTracker.icon
}
