
var options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    var choice = options[Math.floor(Math.random() * options.length)]
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper") 
    ){
        return "Player"
    } else if(playerSelection == computerSelection) {
        return "Tie"
    } else {
        return "Computer"
    }
}

function round(playerSelection, computerSelection) {
    var result = checkWinner(playerSelection, computerSelection)

    if(result == "Player") {
        console.log("Player won!")
        return "Player won!"
    } else if(result == "Computer") {
        console.log("Computer won!")
        return "Computer won!"
    } else if(result == "Tie") {
        console.log("It's a tie!")
        return "It's a tie!"
    }
}

function game() {

    var playerScore = 0;
    var computerScore = 0;
    
    for (let index = 0; index < 5; index++) {
        var playerSelection = prompt("choose something!").toLowerCase();
        var computerSelection = getComputerChoice()
        round(playerSelection, computerSelection)
        
        console.log("------------------")

        if(checkWinner(playerSelection, computerSelection) == "Player") {
            playerScore++;
        } else if(checkWinner(playerSelection, computerSelection) == "Computer") {
            computerScore++;
        }
    }

    if(playerScore > computerScore) {
        console.log("PLAYER WON!")
    } else if(computerScore > playerScore) {
        console.log("COMPUTER WON!")
    } else if(playerScore == computerScore) {
        console.log("IT'S A TIE!")
    }

    console.log("Final player score: " + playerScore)
    console.log("Final computer score: " + computerScore)
}

game()