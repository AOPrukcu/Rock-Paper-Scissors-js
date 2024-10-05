function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3 + 1);
  return RockPaperScissors(computerChoice);
}
let RockPaperScissors = (n) => {
  if (n == 1) {
    return "rock";
  }
  if (n == 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

userInput = window.prompt("Wrote your choice rock paper scissors");
let getHumanChoice = () => {
  userchoice =userInput.toLowerCase() ;
  return userchoice
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    console.log(humanChoice,computerChoice)
  if (humanChoice == computerChoice) {
    console.log("its a tie!");
  }
  if (computerChoice == "rock") {
    if (humanChoice == "scissors") {
      computerScore++;
      console.log("computer won!") ;
    } else {
      humanScore++;
      console.log("meatbag won!");
    }
  }
  if (computerChoice == "scissors") {
    if (humanChoice == "paper") {
      computerScore++;
      console.log("computer won!")
    } else {
      humanScore++;
      console.log("meatbag won!");
    }
  }
  if (computerChoice == "paper") {
    if (humanChoice == "rock") {
      computerScore++;
      console.log("computer won!")
    } else {
      humanScore++;
      console.log("meatbag won!");
    }
  }
  return humanScore,computerScore
}

playRound(getHumanChoice(),getComputerChoice());
