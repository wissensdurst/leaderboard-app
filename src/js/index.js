import Game from "./models/Game";
import { clearList, clearNav, elements } from "./views/base";
import * as gameView from "./views/gameView";
import * as modalView from "./views/modalView";

const data = {
  games: {
    active: [],
    upcoming: [],
    finished: [],
  },
};

const newGame = (name, start) => {
  let game = new Game(name, start);
  if (game.status === "active") data.games.active.push(game);
  if (game.status === "upcoming") data.games.upcoming.push(game);
  if (game.status === "finished") data.games.finished.push(game);
};

/** GAME OPTIONS:
 * - lucky lady's charm
 * - gemorama
 * - jump
 * - 81 fruit awards
 * - river queen
 * - dolphin's pearl
 */

newGame("lucky lady's charm", "23:45");

newGame("gemorama", "09:35");

newGame("jump", "21:45");

newGame("81 fruit awards", "18:50");

newGame("lucky lady's charm", "19:15");

newGame("river queen", "23:30");

newGame("dolphin's pearl", "13:30");

newGame("jump", "11:00");

newGame("gemorama", "15:00");

elements.activeNr.innerHTML = `(${data.games.active.length})`;
elements.upcomingNr.innerHTML = `(${data.games.upcoming.length})`;
elements.finishedNr.innerHTML = `(${data.games.finished.length})`;

data.games.active.forEach((e) => {
  gameView.renderGame(e);
  modalView.renderModal(e);
});

document.addEventListener("click", (event) => {
  const status = event.target.id;

  if (status === "active" || status === "upcoming" || status === "finished") {
    clearList();
    clearNav(status);
    elements[status].parentNode.classList.add("nav__item--active");
    data.games[status].forEach((e) => {
      gameView.renderGame(e);
      modalView.renderModal(e);
    });
  }
});

document.addEventListener("click", (event) => {
  gameView.getRegistered(event, data);
});
