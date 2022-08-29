// SCORE TRACKER
let computerScore = 0;
let playerScore = 0;
// TRACKING COMPUTER AND PLAYER CHOICE
function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    let choice = arr[Math.floor(Math.random() * arr.length)];
    return choice;
};
function getPlayerChoice() {
    let choice = prompt("What would you like to pick?").toLowerCase();
    if (choice === "rock") {
     return choice = "rock";
    } else if(choice === "paper") {
     return choice = "paper";
    } else if(choice === "scissors") {
     return choice = "scissors";
    } else {
        console.log("You didn't pick a valid option. Please pick again.");
        return(getPlayerChoice());
    }
};
// PLAY ONE ROUND
function playRound(player, computer) {
    let result = "";
     if ((player === "scissors" && computer === "paper") || 
    (player === "paper" && computer === "rock" ) ||
    (player === "rock" && computer === "scissors")) {
        result = `Player wins! Player picked ${player}, computer picked ${computer}`;
        ++playerScore;
    } else if ((computer === "scissors" && player === "paper") || 
    (computer === "paper" && player === "rock" ) ||
    (computer === "rock" && player === "scissors")) {
        result = `Computer wins! Computer picked ${computer}, player picked ${player}`
        ++computerScore;
    } else {
        result = `It's a draw! Computer picked ${computer}, player picked ${player}.`
    }
    return result;
};
// PLAY 5 ROUNDS
function game() {
    for(i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
}
game();
// SHOW WINNER
if (computerScore > playerScore) {
    console.log(`Computer's score is ${computerScore}. Player's score is ${playerScore}. Computer is the winner!`)
} else if (playerScore > computerScore) {
    console.log(`Computer's score is ${computerScore}. Player's score is ${playerScore}. Player is the winner!`)
} else {
    console.log(`Computer's score is ${computerScore}. Player's score is ${playerScore}. It's a draw!`)
}