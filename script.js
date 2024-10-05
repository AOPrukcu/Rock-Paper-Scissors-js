function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()* 3 + 1)
    console.log(RockPaperScissors(computerChoice))
    return RockPaperScissors(computerChoice);
}
let RockPaperScissors= (n)=>{
    if(n==1){
        console.log("1")
        return "rock"
        
    } 
    if (n==2) {
        console.log("2")
        return "paper"
    } else{
        console.log("3")
        return "scissors"
    }
}
getComputerChoice();
getComputerChoice();
getComputerChoice();
getComputerChoice();
getComputerChoice();
getComputerChoice();
