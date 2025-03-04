let score = 0;
let wickets = 0;
let overs = 0;
let gameStatus = "";

const scoreElement = document.getElementById("score");
const wicketsElement = document.getElementById("wickets");
const oversElement = document.getElementById("overs");
const gameStatusElement = document.getElementById("game-status");
const hitButton = document.getElementById("hit-button");
const runButton = document.getElementById("run-button");

hitButton.addEventListener("click", hit);
runButton.addEventListener("click", run);

function hit() {
    const runs = Math.floor(Math.random() * 6) + 1;
    score += runs;
    scoreElement.textContent = score;
    gameStatus = `You hit ${runs} runs!`;
    gameStatusElement.textContent = gameStatus;
}

function run() {
    const runs = Math.floor(Math.random() * 2) + 1;
    score += runs;
    scoreElement.textContent = score;
    wickets += 1;
    wicketsElement.textContent = wickets;
    gameStatus = `You ran ${runs} runs, but lost a wicket!`;
    gameStatusElement.textContent = gameStatus;
    if (wickets >= 10) {
        gameStatus = "Game over! You lost.";
        gameStatusElement.textContent = gameStatus;
        hitButton.disabled = true;
        runButton.disabled = true;
    }
}

setInterval(() => {
    overs += 1;
    oversElement.textContent = overs;
}, 10000); // increment overs every 10 seconds