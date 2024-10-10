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

userInput = "";
//eski yöntem
// let getHumanChoice = () => {
//   userchoice =userInput.toLowerCase() ;
//   return userchoice
// };

let humanScore = 0;
let computerScore = 0;

let score = document.querySelector(".score");

function playRound(humanChoice, computerChoice) {
  console.log("game started");
  console.log(computerChoice)
  if (humanChoice == computerChoice) {
    console.log("its a tie!");
    return
  }
  if (computerChoice == "rock") {
    if (humanChoice == "scissors") {
      computerScore++;
      console.log("computer won!");
    } else {
      humanScore++;
      console.log("meatbag won!");
    }
  }
  if (computerChoice == "scissors") {
    if (humanChoice == "paper") {
      computerScore++;
      console.log("computer won!");
    } else {
      humanScore++;
      console.log("meatbag won!");
    }
  }
  if (computerChoice == "paper") {
    if (humanChoice == "rock") {
      computerScore++;
      console.log("computer won!");
    } else {
      humanScore++;
      console.log("meatbag won!");
    }
  }

  if (humanScore == 5 || computerScore == 5) {
    score.textContent = humanScore > computerScore
      ?  "Meatbag won the game"
      : "Computer won the game";

    score.textContent += `Score : Meatbag : ${humanScore} | Computer: ${computerScore} `
    return;
  }
  score.textContent = `Score : Meatbag : ${humanScore} | Computer: ${computerScore} `;
}

let buttons = document.querySelectorAll(".choice");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const userInput = e.target.textContent;
    console.log(userInput); // Tıklanan butonun metni
    playRound(userInput,getComputerChoice())
  });
});
