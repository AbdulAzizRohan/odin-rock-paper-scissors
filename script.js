// logic to get the computer choice
// use Math.random() to get random numbers between 1 to 3
// use the numbers to get computer choice

function getComputerChoice() {
  let randomVal = Math.floor(Math.random() * 3) + 1;
  if (randomVal === 1) return "Rock";
  else if (randomVal === 2) return "Paper";
  else return "Scissor";
}

function getHumanChoice() {
  return prompt("What is your move (Rock, Paper or Scissor)?");
}
