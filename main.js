var game = new Game();

var gameBoardSquares = document.querySelector('#gameBoardGrid');

gameBoardSquares.addEventListener('click', pickSquare);

function pickSquare(event) {
  var clickedSquare = event.target;
  console.log(clickedSquare);
  console.log(game);
  game.playGame(clickedSquare);
}
