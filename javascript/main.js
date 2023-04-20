// * GLOBAL VARIABLES

const splashScreenDOM = document.querySelector("#splash-screen");
const gameOverScreenDOM = document.querySelector("#gameover-screen");
const startBtnDOM = document.querySelector("#start-btn");
const PlayAgainDOM = document.querySelector("#restart-btn")
const canvas = document.querySelector("#my-canvas");

const ctx = canvas.getContext("2d");

let gameObj;

// * STATE MANAGEMENT FUNCTIONS

const startGame = () => {
  console.log("intentando iniciar el juego");

  // 1- Cambiar las pantallas de juego
  splashScreenDOM.style.display = "none";
  canvas.style.display = "block";

  // 2- Crear los elementos del juego
  //vamos a crear una clase

  gameObj = new Game();
  console.log(gameObj);

  // 3- Iniciar el bucle del juego (recursion)

  gameObj.gameLoop();
};


const restartGame = () => {
    gameOverScreenDOM.style.display = "none";
    canvas.style.display = "block";
    gameObj = new Game();
    gameObj.gameLoop()

}
// * ADD EVENT LISTENERS

startBtnDOM.addEventListener("click", startGame);
PlayAgainDOM.addEventListener("click", restartGame)

window.addEventListener("keydown", (event) => {
  // todo: que ocurra solo cuando presionamos el espacio
  if (event.code === "Space") {
    gameObj.pollitoObj.jump();
  }
});
