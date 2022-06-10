// Get User's Choice
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    switch (userInput) {
        case "rock":
            break;
        case "paper":
            break;
        case "scissors":
            break;
        case "bomb":
            break;
        default:
            userInput = "error";
            console.log("Invalid Option");
            break
    }
    return userInput;
}

// Get Computer's Choice
const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3)
    let result;
    switch (randomNumber) {
        case 0:
            result = "rock"
            break;
        case 1:
            result = "paper"
            break;
        case 2:
            result = "scissors"
            break;
        default:
            result = "scissors"
            break;
    }
    return result
}


// Determine Winner Function
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "tie"
    } else if (userChoice === "bomb") {
        return "win"
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        return "win"
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        return "win"
    } else if (userChoice === "paper" && computerChoice === "rock") {
        return "win"
    } else {
        return "lost"
    }
}

// Play Game
const playGame = () => {
    let userChoice = "bomb";
    let computerChoice = getComputerChoice();

    console.log(determineWinner(userChoice, computerChoice))

}

playGame();