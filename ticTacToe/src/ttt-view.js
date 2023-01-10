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

  handleClick(e) {}

  makeMove(square) {}
}

module.exports = View;
