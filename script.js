let player1 = "";
let player2 = "";
let currentPlayer = "X";
let gameActive = true;
const boardState = Array(9).fill("");

document.getElementById("submit").addEventListener("click", () => {
  player1 = document.getElementById("player-1").value.trim();
  player2 = document.getElementById("player-2").value.trim();

  if (player1 && player2) {
    document.querySelector(".player-inputs").style.display = "none";
    document.getElementById("game").style.display = "block";
    updateMessage();
  }
});

function updateMessage() {
  const currentName = currentPlayer === "X" ? player1 : player2;
  document.querySelector(".message").textContent = `${currentName}, you're up`;
}

function getCurrentPlayerName() {
  return currentPlayer === "X" ? player1 : player2;
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  return winPatterns.some(([a, b, c]) => {
    return boardState[a] && boardState[a] === boardState[b] && boardState[b] === boardState[c];
  });
}

document.querySelectorAll(".cell").forEach((cell, index) => {
  cell.addEventListener("
