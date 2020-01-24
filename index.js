const speedDash = document.querySelector(".speedDash");
const scoreDash = document.querySelector(".scoreDash");
const lifeDash = document.querySelector(".lifeDash");
const container = document.getElementById("container");

const btnStart = document.querySelector(".btnStart");

btnStart.addEventListener("click", startGame);
document.addEventListener("keydown", pressKeyOn);
document.addEventListener("keyup", pressKeyOff);

//game variable...

let animationGame;

let gamePlay = false;

let player;

let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false
};

function pressKeyOff(event) {
  event.preventDefault();
  keys[event.key] = false;
}

function pressKeyOn(event) {
  event.preventDefault();
  console.log(keys);
  console.log(event.key);
  keys[event.key] = true;
}

function updateDash() {
  //   console.log(player);
  scoreDash.innerHTML = player.gameScore;
  lifeDash.innerHTML = player.lives;
  speedDash.innerHTML = player.speed;
}

function startGame() {
  btnStart.style.display = "none";
  var div = document.createElement("div");
  div.setAttribute("class", "playerCar");
  div.x = 250;
  div.y = 500;
  container.appendChild(div);
  gamePlay = true;
  animationGame = requestAnimationFrame(playGame);
  player = {
    speed: 1,
    lives: 3,
    gameScore: 0,
    carstoPass: 10,
    score: 0,

    roadWidth: 250
  };
  startBoard();
}

function startBoard() {
  for (let x = 0; x < 13; x++) {
    let div = document.createElement("div");
    div.setAttribute("class", "road");
    div.style.top = x * 50 + "px";
    div.style.width = player.roadWidth + "px";
    container.appendChild(div);
  }
}

function playGame() {
  console.log(gamePlay);
  if (gamePlay) {
    updateDash();
  }
  let animationGame = requestAnimationFrame(playGame);
}
