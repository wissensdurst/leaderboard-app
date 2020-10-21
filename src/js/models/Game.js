import uniqid from "uniqid";

export default class Game {
  constructor(name, start) {
    this.name = name;
    this.start = start;
    this.id = uniqid();
    this.players = Math.floor(Math.random() * (2000 - 1000 + 1) + 1000);
    this.registered = Math.floor(Math.random() * (this.players - 1 + 1) + 1);
    this.position = Math.floor(Math.random() * (this.registered - 1 + 1) + 1);
    this.reg = false;

    const now = new Date().getHours() * 60 + new Date().getMinutes();

    // PARSE INPUT
    let gameStart = start.replace(":", "");
    gameStart =
      parseInt(gameStart.substring(0, 2) * 60) +
      parseInt(gameStart.substring(2, 4));

    function formatTime(min) {
      const hours = min / 60;
      const rhours = Math.floor(hours);
      const minutes = (hours - rhours) * 60;
      const rminutes = Math.round(minutes);
      return `${rhours}h ${rminutes}m`;
    }

    //GET GAME END
    const gameEnd = gameStart - now;
    if (gameEnd < 60 && gameEnd > 0) {
      this.gameEnd = `${gameEnd.toString()}m`;
    } else if (gameEnd > 60) {
      this.gameEnd = formatTime(gameEnd);
    } else if (gameEnd < 0) {
      this.gameEnd = "Finished";
    }

    // GET GAME START
    const regEnd = gameEnd - 5;
    if (regEnd < 60 && regEnd > 0) {
      this.regEnd = `${regEnd.toString()}m`;
    } else if (regEnd > 60) {
      this.regEnd = formatTime(regEnd);
    } else if (regEnd < 0) {
      this.regEnd = "Finished";
    }

    // GET GAME STATUS
    if (gameStart - now <= 480 && gameStart - now > 0) {
      this.status = "active";
    } else if (gameStart - now >= 480) {
      this.status = "upcoming";
    } else if (gameStart - now < 0) {
      this.status = "finished";
    }

    // GET GAME COVER
    if (name === "lucky lady's charm") {
      this.img_url = "./img/lucky.jpg";
    } else if (this.name === "dolphin's pearl") {
      this.img_url = "./img/dolphins.jpg";
    } else if (this.name === "gemorama") {
      this.img_url = "./img/gemorama.jpg";
    } else if (this.name === "jump") {
      this.img_url = "./img/jump.jpg";
    } else if (this.name === "81 fruit awards") {
      this.img_url = "./img/81fruit.jpg";
    } else if (this.name === "river queen") {
      this.img_url = "./img/river.jpg";
    }

    let rankings = [];
    for (let i = 0; i < 9; i++) {
      const player = {
        rank: i + 1,
        name: "Rad*****z21",
        points: 4230 - 4230 * (i / 10),
        prize: 10000 - 10000 * (i / 10),
      };
      rankings.push(player);
    }
    rankings.push({
      rank: this.players,
      name: "Rad*****z21",
      points: 0,
      prize: 0,
    });
    this.rankings = rankings;
  }
}
