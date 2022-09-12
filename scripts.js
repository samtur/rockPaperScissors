// SELECTORS
const gametext = document.querySelector(".gametext");
const rockbtn = document.querySelector(".rockbtn");
const paperbtn = document.querySelector(".paperbtn");
const scissorsbtn = document.querySelector(".scissorsbtn");
const newGameBtn = document.querySelector(".newGame");
const playerScoreDisplay = document.querySelector(".playerScore");
const computerScoreDisplay = document.querySelector(".computerScore");

let computerSelection = getComputerChoice();
let playerSelection = "";

// SCORE TRACKER
let computerScore = 0;
let playerScore = 0;

playerScoreDisplay.textContent = playerScore;
computerScoreDisplay.textContent = computerScore;
// TRACKING COMPUTER AND PLAYER CHOICE
function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    let choice = arr[Math.floor(Math.random() * arr.length)];
    return choice;
};

newGame();

function newGame() {
    newGameBtn.classList.toggle("display")
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
    });
}

    
    rockbtn.addEventListener("click", () => {
         playerSelection = "rock"
         playRound(playerSelection, computerSelection);
    }) 
    paperbtn.addEventListener("click", () => {
         playerSelection = "paper"
         playRound(playerSelection, computerSelection);
    }) 
    scissorsbtn.addEventListener("click", () => {
         playerSelection = "scissors"
         playRound(playerSelection, computerSelection);
    }) 


// PLAY ONE ROUND
function playRound(player, computer) {
    
    let result = "";
    computerSelection = getComputerChoice();
     if ((player === "scissors" && computer === "paper") || 
    (player === "paper" && computer === "rock" ) ||
    (player === "rock" && computer === "scissors")) {
        result = `Player wins! Player picked ${player}, computer picked ${computer}`;
        ++playerScore;
        playerScoreDisplay.textContent = playerScore;
        if(playerScore >= 5 && playerScore !== computerScore) {
            result = `Player wins the game! Player's final score is ${playerScore} computer's score is ${computerScore}`;
            rockbtn.classList.toggle("display");
            paperbtn.classList.toggle("display");
            scissorsbtn.classList.toggle("display");
            newGameBtn.classList.toggle("display");
            gametext.textContent = "Do you want to play again!";
        }
    } else if ((computer === "scissors" && player === "paper") || 
    (computer === "paper" && player === "rock" ) ||
    (computer === "rock" && player === "scissors")) {
        result = `Computer wins! Computer picked ${computer}, player picked ${player}`
        ++computerScore;
        computerScoreDisplay.textContent = computerScore;
        if(computerScore >= 5 && computerScore !== playerScore) {
            result = `Computer wins the game! Computer's final score is ${computerScore} player's score is ${playerScore}`;
            rockbtn.classList.toggle("display");
            paperbtn.classList.toggle("display");
            scissorsbtn.classList.toggle("display");
            newGameBtn.classList.toggle("display");
            gametext.textContent = "Do you want to play again!";
        }
    } else {
        result = `It's a draw! Computer picked ${computer}, player picked ${player}.`
        ++playerScore;
        ++computerScore;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
    }
    gametext.textContent = result;
};


// PLAY 5 ROUNDS
// function game() {
//         let result = playRound(playerSelection, computerSelection);
//         console.log(result);
// }
// game();
// SHOW WINNER
// if (computerScore > playerScore) {
//     console.log(`Computer's score is ${computerScore}. Player's score is ${playerScore}. Computer is the winner!`)
// } else if (playerScore > computerScore) {
//     console.log(`Computer's score is ${computerScore}. Player's score is ${playerScore}. Player is the winner!`)
// } else {
//     console.log(`Computer's score is ${computerScore}. Player's score is ${playerScore}. It's a draw!`)
// }