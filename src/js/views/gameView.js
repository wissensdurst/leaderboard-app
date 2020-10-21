import { clearList, elements } from "./base";
import * as modalView from "./modalView";

export const getRegistered = function (event, data) {
  const btn = event.target;
  const id = btn.id;
  const status = btn.value;
  if (btn.classList.contains("confirm")) {
    data.games[status].forEach((e) => {
      if (e.id === id && e.status !== "finished") {
        e.reg = true;
        e.status = "registered";
      }
    });
    clearList();
    data.games[status].forEach((e) => {
      renderGame(e);
      modalView.renderModal(e);
    });
  }
};

export const getRegister = function (game) {
  if (game.reg) {
    return `<button class="btn btn__logged"><i class='bx bx-check'></i>Registered</button>`;
  } else if (game.status == "finished") {
    return `<button class="btn btn__logged"><i class='bx bx-check'></i>Logged in</button>`;
  } else {
    return `<button id="regBtn" data-modal-id="${game.id}sub"  class="btn btn__register">Register</button>`;
  }
};

export const renderGame = (game) => {
  const regBtn = getRegister(game);
  const markup = `
<div class="game">
  <figure class="game__cover">
    <img src="${game.img_url}" class="game__img" alt="" />
  </figure>
  <div class="game__side game__name">${game.name}</div>
  <div class="game__side game__end">
    <p class="game__side--title">Tourney ends</p>
    <p class="game__side--text">${game.gameEnd}</p>
  </div>
  <div class="game__side game__reg">
    <p class="game__side--title">Registration ends</p>
    <p class="game__side--text">${game.regEnd}</p>
  </div>
  <div class="game__side game__players">
    <p class="game__side--title">Players</p>
    <p class="game__side--text">${game.players}</p>
  </div>
  <div class="game__side game__options">
    <button id="myBtn" data-modal-id="${game.id}" class="modal-trigger btn btn__display">Display</button>
    ${regBtn}
  </div>
</div>
  `;

  elements.gameList.insertAdjacentHTML("afterbegin", markup);
};
