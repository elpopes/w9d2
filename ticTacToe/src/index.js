const View = require("./ttt-view.js");
const Game = require("../ttt_node/game.js");

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  const containerElement = document.querySelector('.ttt')
  new View(game, containerElement);
});
