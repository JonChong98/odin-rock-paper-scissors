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
            choice = "void";
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

// Updates the Score
function updateScore(input) {
    let result = document.querySelector(".result");
    if (input === "player") {
        let playerScore = document.querySelector(".player-score");
        let newScore = parseInt(playerScore.textContent, 10) + 1;
        playerScore.textContent = newScore;
        if (newScore === 5) {
            result.textContent = "Player wins!";
            disableButtons();
        } else {
            result.textContent = "Player scores a point!";
        }
    } else if (input === "computer") {
        let computerScore = document.querySelector(".computer-score");
        let newScore = parseInt(computerScore.textContent, 10) + 1;
        computerScore.textContent = newScore;
        if (newScore === 5) {
            result.textContent = "Computer wins!";
            disableButtons;
        } else {
            result.textContent = "Computer scores a point!";
        }
    } else {
        result.textContent = "It's a draw!";
    }
}

// Disable button once someone wins 5 points
function disableButtons() {
    const btns = document.querySelectorAll("button");
    btns.forEach(btn => {
        btn.setAttribute("disabled", "");
    });
}

const btns = document.querySelectorAll("button");
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        let result = playRound(btn.textContent, getComputerChoice());
        updateScore(result);
    })
});