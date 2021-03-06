var game = new Game();

var gameBoardSquares = document.querySelector('#gameBoardGrid');

gameBoardSquares.addEventListener('click', pickSquare);

function pickSquare(event) {
  var clickedSquare = event.target.id;
  game.playGame(clickedSquare);
  changePlayer();
  console.log("Inside PickSquare var", clickedSquare)
}
