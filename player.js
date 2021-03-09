class Player {
  constructor(playerName, icon) {
    this.icon = icon;
    this.iconCounter = 0;
    this.name = playerName;
    this.squaresPlayedList = [];
    this.winCount = this.retrieveWinsFromStorage() || 0;
  }

  saveWinsToStorage() {
    localStorage.setItem(`${this.name} winCount`, this.winCount);
  }

  retrieveWinsFromStorage() {
    return localStorage.getItem(`${this.name} winCount`);
  }
}
