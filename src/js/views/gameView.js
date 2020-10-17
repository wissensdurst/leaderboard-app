import { elements } from "./base";

export const renderGame = (game) => {
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
    <button id="regBtn" data-modal-id="${game.id}sub"  class="btn btn__register">Register</button>
  </div>
</div>
  `;

  elements.gameList.insertAdjacentHTML("afterbegin", markup);
};
