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
  const resultPara = document.querySelector(".round-result-para");
  roundResult.appendChild(resultPara);

  const gameResult = document.querySelector(".game-result");
  const gameResultPara = document.querySelector(".game-result-para");
  const gameResultBtn = document.querySelector("#game-result-btn");
  gameResult.style.display = "none";

  function playRound(humanChoice, computerChoice) {
    const humanResultView = document.querySelector(
      "#round-result-move-human-icon",
    );
    const computerResultView = document.querySelector(
      "#round-result-move-computer-icon",
    );

    if (humanChoice === "rock") {
      removeUnneededClasses(humanResultView);
      humanResultView.classList.add("fa-solid");
      humanResultView.classList.add("fa-hand-back-fist");

      if (computerChoice === "paper") {
        didHumanWon = false;

        removeUnneededClasses(computerResultView);
        computerResultView.classList.add("fa-solid");
        computerResultView.classList.add("fa-hand");
      } else if (computerChoice === "scissor") {
        didHumanWon = true;

        removeUnneededClasses(computerResultView);
        computerResultView.classList.add("fa-solid");
        computerResultView.classList.add("fa-hand-peace");
      } else {
        isDraw = true;

        removeUnneededClasses(computerResultView);
        computerResultView.classList.add("fa-solid");
        computerResultView.classList.add("fa-hand-back-fist");
      }
    } else if (humanChoice === "paper") {
      removeUnneededClasses(humanResultView);
      humanResultView.classList.add("fa-solid");
      humanResultView.classList.add("fa-hand");

      if (computerChoice === "rock") {
        didHumanWon = true;

        removeUnneededClasses(computerResultView);
        computerResultView.classList.add("fa-solid");
        computerResultView.classList.add("fa-hand-back-fist");
      } else if (computerChoice === "scissor") {
        didHumanWon = false;

        removeUnneededClasses(computerResultView);
        computerResultView.classList.add("fa-solid");
        computerResultView.classList.add("fa-hand-peace");
      } else {
        isDraw = true;

        removeUnneededClasses(computerResultView);
        computerResultView.classList.add("fa-solid");
        computerResultView.classList.add("fa-hand");
      }
    } else if (humanChoice === "scissor") {
      removeUnneededClasses(humanResultView);
      humanResultView.classList.add("fa-solid");
      humanResultView.classList.add("fa-hand-peace");

      if (computerChoice === "paper") {
        didHumanWon = true;

        removeUnneededClasses(computerResultView);
        computerResultView.classList.add("fa-solid");
        computerResultView.classList.add("fa-hand");
      } else if (computerChoice === "rock") {
        didHumanWon = false;

        removeUnneededClasses(computerResultView);
        computerResultView.classList.add("fa-solid");
        computerResultView.classList.add("fa-hand-back-fist");
      } else {
        isDraw = true;

        removeUnneededClasses(computerResultView);
        computerResultView.classList.add("fa-solid");
        computerResultView.classList.add("fa-hand-peace");
      }
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

      resultPara.textContent = "Make your move";
      gameResult.style.display = "none";

      removeUnneededClasses(humanResultView);
      humanResultView.classList.add("fa-regular");
      humanResultView.classList.add("fa-circle-question");

      removeUnneededClasses(computerResultView);
      computerResultView.classList.add("fa-regular");
      computerResultView.classList.add("fa-circle-question");
    }

    function removeUnneededClasses(element) {
      element.classList.remove("fa-regular");
      element.classList.remove("fa-circle-question");
      element.classList.remove("fa-solid");
      element.classList.remove("fa-hand");
      element.classList.remove("fa-hand-peace");
      element.classList.remove("fa-hand-back-fist");
    }
  }

  const rock = document.querySelector("#rock");
  const paper = document.querySelector("#paper");
  const scissor = document.querySelector("#scissor");

  rock.addEventListener("click", () => {
    if (humanScore !== 5 && computerScore !== 5) {
      playRound("rock", getComputerChoice());
    }
  });

  paper.addEventListener("click", () => {
    if (humanScore !== 5 && computerScore !== 5) {
      playRound("paper", getComputerChoice());
    }
  });

  scissor.addEventListener("click", () => {
    if (humanScore !== 5 && computerScore !== 5) {
      playRound("scissor", getComputerChoice());
    }
  });
}

playGame();
