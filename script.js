//your JS code here. If required.
let player1 = "";
let player2 = "";
let currentPlayer = "X";
let gameActive = true;
const boardState = Array(9).fill("");

const submitBtn = document.getElementById("submit");
const message = document.querySelector(".message");
const gameBoard = document.getElementById("game");
const cells = document.querySelectorAll(".cell");

submitBtn.addEventListener("click", () => {
  player1 = document.getElementById("player-1").value.trim();
  player2 = document.getElementById("player-2").value.trim();

  if (player1 && player2) {
    document.querySelector(".player-inputs").style.display = "none";
    gameBoard.style.display = "block";
    updateMessage();
  }
});

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (!gameActive || boardState[index] !== "") return;

    boardState[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWinner()) {
      gameActive = false;
      message.textContent = `${getCurrentPlayerName()} congratulations you won!`;
    } else if (boardState.every(cell => cell)) {
      gameActive = false;
      message.textContent = "It's a draw!";
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      updateMessage();
    }
  });
});

function updateMessage() {
  const name = getCurrentPlayerName();
  message.textContent = `${name}, you're up`;
}

function getCurrentPlayerName() {
  return currentPlayer === "X" ? player1 : player2;
}

function checkWinner()
