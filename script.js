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

// main function for the game

function playGame() {
  // initialize the score and booleans

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

    // determine the round winner and update their score

    if (isDraw) {
      console.log(`It's a draw! Both of you played ${humanChoice}`);
    } else if (didHumanWon) {
      console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    }

    // reset the booleans for the next round

    didHumanWon = false;
    isDraw = false;
  }

  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice().toLowerCase(), getComputerChoice());
  }

  // determine the winner of the game

  if (humanScore === computerScore) {
    console.log("It's a draw!");
  } else if (humanScore > computerScore) {
    console.log("Wow! You won!");
  } else {
    console.log("You lose!");
  }

  // reset the score for the next game

  humanScore = 0;
  computerScore = 0;
}

playGame();
