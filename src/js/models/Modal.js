import uniqid from "uniqid";
const currentlyOpenModals = [];

const noModalsOpen = () => !currentlyOpenModals.length;

const openModal = (modalId) => {
  const modalWrapper = document.getElementById(modalId);
  modalWrapper.classList.add("visible");
  currentlyOpenModals.push(modalWrapper);
};

const closeTopmostModal = () => {
  if (noModalsOpen()) {
    return;
  }

  const modalWrapper = currentlyOpenModals[currentlyOpenModals.length - 1];
  modalWrapper.classList.remove("visible");
  currentlyOpenModals.pop();
};

document.body.addEventListener("keyup", (keyEvent) => {
  if (keyEvent.key === "Escape") {
    closeTopmostModal();
  }
});

window.onclick = function (event) {
  if (
    event.target.classList.contains("modal") ||
    event.target.classList.contains("submitModal")
  ) {
    closeTopmostModal();
  }
};

document.addEventListener("click", listener);

function listener(event) {
  const trigger = event.target;

  const modalId = trigger.getAttribute("data-modal-id");

  if (trigger.id === "myBtn") {
    openModal(modalId);
  } else if (trigger.id === "regBtn") {
    openModal(modalId);
  } else if (trigger.classList.contains("confirm")) {
    console.log(uniqid());
  } else if (trigger.id === "cancel") {
    closeTopmostModal();
  } else if (trigger.id === "exit") {
    closeTopmostModal();
  }
}

export const getRankings = function (game) {
  let markup = [];
  const random = Math.floor(Math.random() * 9);
  const highlited = `<div class="modal__rankings--item modal__rankings--focused">
  <p class="modal__rankings--nr">${game.rankings[random].rank}</p>
  <p class="modal__rankings--user">noobmaster69</p>
  <p class="modal__rankings--pts">${game.rankings[random].points}</p>
  <p class="modal__rankings--prz">${game.rankings[random].prize}Kn</p>
</div>`;

  game.rankings.forEach((e) => {
    markup.push(
      `<div class="modal__rankings--item">
        <p class="modal__rankings--nr">${e.rank}</p>
        <p class="modal__rankings--user">${e.name}</p>
        <p class="modal__rankings--pts">${e.points}</p>
        <p class="modal__rankings--prz">${e.prize}Kn</p>
      </div>`
    );
  });

  if (game.status === "finished") {
    markup.splice(random, 1, highlited);

    const registration = document.querySelector(".game__reg");
    registration.innerHTML = `<p class="game__side--title">Your  position</p>
    <p class="game__side--text">${game.position}</p>`;
  }
  return markup.join("");
};

export const getHeader = function (game) {
  const header = document.getElementById("modalHeader");
  header.style.backgroundImage = `url(${game.img_url})`;
};

export const getPosition = function (game) {
  if (game.status === "finished") {
    return `<p class="modal__info--title">Position</p>
    <p class="modal__info--text">${game.position}</p>`;
  } else {
    return `<p class="modal__info--title">Registered</p>
    <p class="modal__info--text">${game.registered}</p>`;
  }
};
