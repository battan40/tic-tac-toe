var game = new Game();

var gameBoardSquares = document.querySelector('#gameBoardGrid');

gameBoardSquares.addEventListener('click', pickSquare);

function pickSquare(event) {
  console.log(game);
  var clickedSquare = event.target.id;
  console.log("Inside PickSquare var", clickedSquare)
  game.playGame(clickedSquare);
}
