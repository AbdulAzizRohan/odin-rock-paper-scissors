// logic to get the computer choice
// use Math.random() to get random numbers between 1 to 3
// use the numbers to get computer choice

function getComputerChoice() {
  let randomVal = Math.floor(Math.random() * 3) + 1;
  if (randomVal === 1) return "rock";
  else if (randomVal === 2) return "paper";
  else return "scissor";
}

function getHumanChoice() {
  return prompt("What is your move (Rock, Paper or Scissor)?");
}

let humanScore = 0;
let computerScore = 0;

let didHumanWon = false;
let isDraw = false;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock") {
    if (computerChoice === "paper") didHumanWon = false;
    else if (computerChoice === "scissor") didHumanWon = true;
    else isDraw = true;
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") didHumanWon = true;
    else if (computerChoice === "scissor") didHumanWon = false;
    else isDraw = true;
  } else if (humanChoice === "scissor") {
    if (computerChoice === "paper") didHumanWon = true;
    else if (computerChoice === "rock") didHumanWon = false;
    else isDraw = true;
  }

  if (isDraw) {
    console.log(`It's a draw! Both of you played ${humanChoice}`);
  } else if (didHumanWon) {
    console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
  }
}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
