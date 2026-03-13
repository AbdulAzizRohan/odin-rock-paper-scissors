function getComputerChoice() {
  let randomVal = Math.floor(Math.random() * 3) + 1;
  if (randomVal === 1) return "rock";
  else if (randomVal === 2) return "paper";
  else return "scissor";
}

function getHumanChoice() {
  return prompt("What is your move (Rock, Paper or Scissor)?");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  let didHumanWon = false;
  let isDraw = false;

  const roundResult = document.querySelector(".round-result");
  const resultPara = document.createElement("p");
  roundResult.style.display = "none";
  roundResult.appendChild(resultPara);

  const gameResult = document.querySelector(".game-result");
  const gameResultPara = document.querySelector(".game-result-para");
  const gameResultBtn = document.querySelector("#game-result-btn");
  gameResult.style.display = "none";
  gameResult.appendChild(gameResultPara);

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

    const humanScoreUpdate = document.querySelector(".human");
    const computerScoreUpdate = document.querySelector(".computer");

    if (isDraw) {
      resultPara.textContent = `It's a draw! Both of you played ${humanChoice}`;
      roundResult.style.display = "block";
    } else if (didHumanWon) {
      resultPara.textContent = `You won! ${humanChoice} beats ${computerChoice}.`;
      roundResult.style.display = "block";

      humanScore++;
      humanScoreUpdate.textContent = `You: ${humanScore}`;
    } else {
      resultPara.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
      roundResult.style.display = "block";

      computerScore++;
      computerScoreUpdate.textContent = `Computer: ${computerScore}`;
    }

    if (humanScore === 5) {
      gameResultPara.textContent = "Wow! You won!";
      gameResult.style.display = "block";

      gameResultBtn.addEventListener("click", resetGame);
    } else if (computerScore === 5) {
      gameResultPara.textContent = "You lose!";
      gameResult.style.display = "block";

      gameResultBtn.addEventListener("click", resetGame);
    }

    didHumanWon = false;
    isDraw = false;

    function resetGame() {
      computerScore = 0;
      humanScore = 0;

      humanScoreUpdate.textContent = `You: ${humanScore}`;
      computerScoreUpdate.textContent = `Computer: ${computerScore}`;

      roundResult.style.display = "none";
      gameResult.style.display = "none";
    }
  }

  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissor = document.querySelector("#scissor");

  rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
  });

  paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
  });

  scissor.addEventListener("click", () => {
    playRound("scissor", getComputerChoice());
  });
}

playGame();
