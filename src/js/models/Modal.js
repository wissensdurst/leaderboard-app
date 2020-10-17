const currentlyOpenModals = [];

const noModalsOpen = () => !currentlyOpenModals.length;

const openModal = (modalId) => {
  const modalWrapper = document.getElementById(modalId);
  modalWrapper.classList.add("visible");
  currentlyOpenModals.push(modalWrapper);
  // console.log(currentlyOpenModals);
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
  // console.log(event.target);
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
  } else if (trigger.id === "playerId") {
    alert("Your player ID is " + trigger.value);
  } else if (trigger.id === "cancel") {
    closeTopmostModal();
  } else if (trigger.id === "exit") {
    closeTopmostModal();
  }
}

export const getRankings = function (game) {
  let markup = [];
  const random = Math.floor(Math.random() * 10);
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
  }
  return markup.join("");
};

export const getHeader = function (game) {
  const header = document.getElementById("modalHeader");
  header.style.backgroundImage = `url(${game.img_url})`;
};
