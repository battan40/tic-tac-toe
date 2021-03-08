class Player {
  constructor(playerName, icon) {
    this.icon = icon;
    this.iconCounter = 0;
    this.name = playerName;
    this.squaresPlayedList = [];
    this.winCount = 0;
  }

  saveWinsToStorage() {
    var stringifyIt = JSON.stringify(this.winCount);
    localStorage.setItem(`${this.name} winCount`, stringifyIt)
  }

  retrieveWinsFromStorage() {
    JSON.parse(localStorage.getItem(`${this.name} winCount`))

  }
}
