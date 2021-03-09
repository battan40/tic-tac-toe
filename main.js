var currentGame = new Game();

var gameBoardSquares = document.querySelector('#gameBoardGrid');
var playerOneWinCountDisplay = document.querySelector('#leftPlayer');
var playerTwoWinCountDisplay = document.querySelector('#rightPlayer');
var turnDisplay = document.querySelector('#turnDisplay')

gameBoardSquares.addEventListener('click', startGame);
window.addEventListener('load', pageLoads);
//
// function startDataModel(event) {
//   var clickedSquare = event.target.id;
//   currentGame.playGame(clickedSquare);
// }
function pageLoads() {
  showCurrentTurn();
  displayWinCount();
  //you want to get the wins from storage (that means retrieve)
  // currentGame.playerOne.saveWinsToStorage();
  // currentGame.playerTwo.saveWinsToStorage();
}

function startGame(event) {
  showIcon(event.target);
  currentGame.playGame(event.target.id);
  showCurrentTurn();
  declarationOfGameStatus()
  //When a player plays a turn i want the hearts and stars to alternate with the messages, until a win or a draw; if there is a draw I want the message at the top to display a new string, then reset the whole gameBoard; if there is a win i want the message at the top to change and the wins to save and the whole board to reset
}

function showIcon(clickedSquareParam) {
  if (clickedSquareParam.innerText === '')
  clickedSquareParam.innerText = currentGame.turnTracker.icon
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
//When the page loads, it should have player1 on the left, playaer 2 on the right and an initializing phrase that says whose turn it is
//Once the firsts player clicks I want to have the event trigger the icons to populate and the turns to switch until theres a win, when theres a win or a tie i want the innerHTML to change to display that and the win to save to local storage but the whole page to be reset
function declarationOfGameStatus() {
  // if (currentGame.win) {
  // turnDisplay.innerText = 'Looks like we have a tie!'
  //setTimeOut(startGameOver, 2000)
    if (currentGame.win) {
    turnDisplay.innerText = `${currentGame.turnTracker.name} IS THE WINNER!`
  }
}

function startNewGame() {
  currentGame.resetGame();
  endPlayability();
  showCurrentTurn();
}

function startGameOver(){
  resetGame();
  currentGame.terminateGame();
  endPlayability();
  showCurrentTurn();
}

function endPlayability() {
  //how do you turn off an event listener that triggers the whole playGame method
  //toggle?
}

function resetGame() {
  for (var i = 0; i < gameBoardSquares.length; i++) {
    gameBoardSquares[i].innerText = '';
    currentGame.turnTracker.squaresPlayedList = [];
    currentGame.turnTracker.iconCounter = 0;
    currentGame.win = false;
    //update headers on load
  }
}

function persistStorage() {

  resetGame();
}
