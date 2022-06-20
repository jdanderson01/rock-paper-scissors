let compScore = 0;
let playerScore = 0;

const choices = ["rock", "paper", "scissors"]

const computerChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
}


const playRound = (playerSelection, computerSelection) => {
  console.log(playerSelection, computerSelection)
    if (playerSelection === "rock" && computerSelection === "rock") {
      return "Tie!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      compScore++
      return "You lost!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore++
      return "You won!"
    } else if (playerSelection === "paper" && computerSelection === "paper") {
      return "You tied!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      compScore++
      return "You lost!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++
      return "You won!"
    } else if (playerSelection === "scisors" && computerSelection === "paper") {
      playerScore++
      return "You won!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      compScore++
      return "You lost!"
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
      return "You tied!"
    }
  }


  const game = () => {
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Select rock, paper, or scissors").toLowerCase();
      const computerSelection = computerChoice();
      playRound(playerSelection, computerSelection);
   }

   if (playerScore > compScore) {
     return "You beat the computer!"
   } else if (playerScore < compScore) {
     return "You lost to the computer!"
   } else {
     return "You tied!"
   }

  }
console.log(game());