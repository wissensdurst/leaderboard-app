export const elements = {
  gameList: document.querySelector(".main"),
  navItem: document.getElementsByClassName("nav__item"),
  active: document.getElementById("active"),
  activeNr: document.getElementById("activeNr"),
  upcomingNr: document.getElementById("upcomingNr"),
  finishedNr: document.getElementById("finishedNr"),
  upcoming: document.getElementById("upcoming"),
  finished: document.getElementById("finished"),
  modal: document.querySelector(".modal"),
  subModal: document.getElementById("submitModal"),
  modalHeader: document.getElementById("modalHeader"),
  btn: document.getElementById("myBtn"),
  window: document.querySelector(".window"),
};

export const clearList = () => {
  elements.gameList.innerHTML = "";
};

export const clearNav = (status) => {
  if (status === "active" || "upcoming" || "finished") {
    elements.active.parentNode.className = "nav__item";
    elements.upcoming.parentNode.className = "nav__item";
    elements.finished.parentNode.className = "nav__item";
  }
};
