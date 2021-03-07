var currentGame = new Game();

var gameBoardSquares = document.querySelector('#gameBoardGrid');

gameBoardSquares.addEventListener('click', pickedSquare);

function pickedSquare(event) {
  var clickedSquare = event.target.id;
  currentGame.playGame(clickedSquare);
}
