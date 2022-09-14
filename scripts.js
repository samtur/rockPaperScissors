// SELECTORS
const gametext = document.querySelector(".gametext");
const rockbtn = document.querySelector(".rockbtn");
const paperbtn = document.querySelector(".paperbtn");
const scissorsbtn = document.querySelector(".scissorsbtn");
const newGameBtn = document.querySelector(".newGame");
const playerScoreDisplay = document.querySelector(".playerScore");
const computerScoreDisplay = document.querySelector(".computerScore");
const playagain = document.querySelector(".playagain");
// TRACKING SELECTIONS
let computerSelection = getComputerChoice();
let playerSelection = "";
// SCORE TRACKER
let computerScore = 0;
let playerScore = 0;
playerScoreDisplay.textContent = playerScore;
computerScoreDisplay.textContent = computerScore;
// TRACKING COMPUTER AND PLAYER CHOICE AND PLAYING A ROUND
function getComputerChoice() {
  let arr = ["rock", "paper", "scissors"];
  let choice = arr[Math.floor(Math.random() * arr.length)];
  return choice;
}
rockbtn.addEventListener("click", () => {
  playerSelection = "rock";
  playRound(playerSelection, computerSelection);
});
paperbtn.addEventListener("click", () => {
  playerSelection = "paper";
  playRound(playerSelection, computerSelection);
});
scissorsbtn.addEventListener("click", () => {
  playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
});
// FUNCTION CALL TO CHECK FOR NEW GAME
newGame();
// FUNCTION TO PLAY ONE ROUND
function playRound(player, computer) {
  let result = "";
  computerSelection = getComputerChoice();
  if (
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock") ||
    (player === "rock" && computer === "scissors")
  ) {
    result = `Player wins! Player picked ${player}, computer picked ${computer}.`;
    gametext.textContent = result;
    ++playerScore;
    playerScoreDisplay.textContent = playerScore;
  } else if (
    (computer === "scissors" && player === "paper") ||
    (computer === "paper" && player === "rock") ||
    (computer === "rock" && player === "scissors")
  ) {
    result = `Computer wins! Computer picked ${computer}, player picked ${player}.`;
    gametext.textContent = result;
    ++computerScore;
    computerScoreDisplay.textContent = computerScore;
  } else {
    result = `It's a draw! Computer picked ${computer}, player picked ${player}.`;
    gametext.textContent = result;
    ++playerScore;
    ++computerScore;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
  }
  checkwinner(playerScore, computerScore);
}
// FUNCTION TO CHECK WINNER
function checkwinner(player, computer) {
  if (player >= 5 && player > computer) {
    result = `Player wins the game! Player's final score is ${player} computer's score is ${computer}.`;
    gametext.textContent = result;
    playagain.textContent = `Do you want to play again?`;
    rockbtn.classList.toggle("display");
    paperbtn.classList.toggle("display");
    scissorsbtn.classList.toggle("display");
    newGameBtn.classList.toggle("display");
  }
  if (computer >= 5 && computer > player) {
    result = `Computer wins the game! Computer's final score is ${computer} player's score is ${player}.`;
    gametext.textContent = result;
    playagain.textContent = `Do you want to play again?`;
    rockbtn.classList.toggle("display");
    paperbtn.classList.toggle("display");
    scissorsbtn.classList.toggle("display");
    newGameBtn.classList.toggle("display");
  }
}
// FUNCTION TO CHECK FOR NEW GAME
function newGame() {
  newGameBtn.classList.toggle("display");
  newGameBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    rockbtn.classList.toggle("display");
    paperbtn.classList.toggle("display");
    scissorsbtn.classList.toggle("display");
    newGameBtn.classList.toggle("display");
    gametext.textContent = "Select your weapon!";
    playagain.textContent = "";
  });
}
