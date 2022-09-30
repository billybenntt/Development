let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//  Function to generate the new secret target number.
const generateTarget = () => {
    return Math.floor(Math.random() * 9)
}

// Function to be called each round to determine which guess is closest to the target number.
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    let humanResult = Math.abs(secretTarget - humanGuess)
    let computerResult = Math.abs(secretTarget - computerGuess)
    return humanResult < computerResult;
}

//  This function is to be used to correctly increase the winner’s score after each round.
const updateScore = (winner) => {
    if (winner === "human") {
        humanScore++
    } else if (winner === "computer") {
        computerScore++
    }
}

//  this function is to be used to update the round number after each round.
const advanceRound = () => {
    currentRoundNumber++
}


