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

  }
}
