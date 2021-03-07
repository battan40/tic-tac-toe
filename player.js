class Player {
  constructor(playerName, icon) {
    this.icon = icon;
    this.iconCounter = 0;
    this.id = Date.now();
    this.name = playerName;
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
