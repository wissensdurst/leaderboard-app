import { elements } from "./base";
import * as modal from "../models/Modal";
import * as gameView from "./gameView";

export const renderModal = (game) => {
  const position = modal.getPosition(game);
  const rankings = modal.getRankings(game);
  const register = gameView.getRegister(game);
  const markup = `
<div id="${game.id}" class="modal">
  <div class="modal__container">
    <figure id="modalHeader" class="modal__header">
      <div class="modal__name">
        <p class="modal__name-text">${game.name}</p>
        <button id="exit" class="btn btn__exit">Exit</button>
        ${register}
      </div>
    </figure>
    <div class="modal__rankings">
      <div class="modal__rankings--title"> 
      <i class='bx bxs-trophy' ></i>   
        <p>Rankings</p>
      </div>
      <div class="modal__rankings--item">
        <p class="modal__rankings--user-title">Username</p>
        <p class="modal__rankings--pts-title">Points</p>
        <p class="modal__rankings--prz-title">Prizes</p>
      </div>
     ${rankings}
    </div>
    <div class="modal__footer">
      <div class="modal__rules">
        <p class="modal__rules-title">Tourney rules</p>
        <p class="modal__rules-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
          fugit qui neque amet non quaerat, illo adipisci molestias
          ratione. Aspernatur, cumque eos nihil ipsum sint aliquid,
          consequuntur blanditiis voluptas voluptatem tenetur dolorem
          asperiores quae quidem ex possimus! Quaerat perferendis qui
          temporibus hic tempora optio aperiam eum. Nisi enim amet saepe
          quia consectetur recusandae necessitatibus pariatur nihil,
          commodi minus placeat voluptas officia. Rerum, reiciendis culpa
          aperiam numquam cumque illo veniam. Quisquam ducimus voluptatem
          voluptatum vitae ad. Maiores neque nostrum optio in minima quos
          voluptatem officiis, vel iusto aut corrupti consequatur sequi
          dicta quasi eveniet ex doloremque ratione qui beatae totam
          inventore!
        </p>
      </div>
      <div class="modal__info">
        <div class="modal__info--players">
          <p class="modal__info--title">Players</p>
          <p class="modal__info--text">${game.players}</p>
        </div>
        <div class="modal__info--reg">
          ${position}
        </div>
        <div class="modal__info--status">
          <p class="modal__info--title">Registration</p>
          <p class="modal__info--text">${game.status}</p>
        </div>
        <div class="modal__info--games">
          <p class="modal__info--title">Included games</p>
          <p class="modal__info--text">58</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<div id="${game.id}sub" class="submitModal">
      <div class="submitModal__container">
        <div class="submitModal__header">
          <p>Registration confirmation</p>
        </div>
        <div class="submitModal__body">
          <p>Are you sure you want to register to <span class="submitModal__title">${game.name}</span>?</p>
        </div>
        <div class="submitModal__footer">
          <button id="cancel" class="btn btn__cancel">Cancel</button>
          <button id= ${game.id}  value=${game.status} class="btn btn__register confirm">Confirm</button>
        </div>
      </div>
    </div>
  `;

  elements.gameList.insertAdjacentHTML("afterbegin", markup);
  modal.getHeader(game);
};
