class Player {
  constructor() {
    this.id = Date.now();
    this.icon = false;
    this.winCount = 0;
    this.winsContainer = [];
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
