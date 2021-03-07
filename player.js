class Player {
  constructor(playerName, icon) {
    this.name = playerName;
    this.id = Date.now();
    this.icon = icon;
    this.squaresPlayedList = [];
    this.winCount = 0;
  }

  saveWinsToStorage() {
    var stringifyIt = JSON.stringify(this);
    localStorage.setItem(this.id, stringifyIt)
  }

  retrieveWinsFromStorage() {
    var idDWin = Object.keys(localStorage);
    for (var i = 0; i < idDWin.length; i++){
      var parseWinReveal = JSON.parse(localStorage.getItem(idDWin[i]));
       return parseWinReveal;
    }
  }
}
