let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10)
}

const compareGuesses = (humanGuess, computerGuess, generateTarget) => {
  if (Math.abs(humanGuess - target) <= Math.abs(computerGuess - target)) {
    return true;
  } else {
    return false;
  }
}

const updateScore = compareGuesses => {
  if (compareGuesses) {
    humanScore++
  } else {
    computerScore++
  }
}

const advanceRound = () => {
  currentRoundNumber++
}