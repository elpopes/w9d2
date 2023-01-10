class View {
  constructor(game, el) {}

  setupBoard() {
    const ul = document.createElement("ul");
    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        const li = document.createElement("li");
        li.dataset.pos = JSON.stringify([rowIdx, colIdx]);
        ul.append(li);
      }
    }
    this.el.append(ul);
  }

  bindEvents() {}

  handleClick(e) {
    const el = e.target
    if (el.nodeName === "LI") {
      this.makeMove(el)
    }
  }

  makeMove(square) {
    const pos = JSON.parse(square.dataset.pos);
    const currentPlayer = this.game.currentPlayer;

    try {
      this.game.playMove(pos);
    } catch (e){
      alert(`This ${e.msg.toLowerCase()}`)
    }
    square.classList.add(currentPlayer);

    if (this.game.isOver()) this.handleGameOver()
  }
}

module.exports = View;
