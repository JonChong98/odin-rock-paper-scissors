 // Randomly returns either 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    let choice;
    switch (num) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
        default:
            console.log("No number between 0-2 found, unable to generate a choice");
    }
    return choice;
}

// Plays a round of rock, paper, scissors and returns the winner
function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection;
    let result;
    switch (playerChoice) {
        case "rock":
            if (computerChoice === "paper") {
                result = "computer";
            } else if (computerChoice === "scissors") {
                result = "player";
            } else {
                result = "draw";
            }
            break;
        case "paper":
            if (computerChoice === "scissors") {
                result = "computer";
            } else if (computerChoice === "rock") {
                result = "player";
            } else {
                result = "draw";
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                result = "computer";
            } else if (computerChoice === "paper") {
                result = "player";
            } else {
                result = "draw";
            }
            break;
        default:
            result = `Unable to read inputs:
                    p - ${p}
                    c - ${c}`;
    }
    return result;
}