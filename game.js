const rps = ["rock", "paper", "scissors"];
let gamesWon = 0;
let totalGames = 0;
const result = document.querySelector("#results");
const score = document.querySelector("#score");
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", () => {
    result.textContent = playRound("rock", getComputerChoice());
});
btnPaper.addEventListener("click", () => {
    result.textContent = playRound("paper", getComputerChoice());
});
btnScissors.addEventListener("click", () => {
    result.textContent = playRound("scissors", getComputerChoice());
});

function getComputerChoice(){
    return  rps[Math.floor(Math.random() * rps.length)];
}

function playRound(playerSelection, computerSelection){
    
    const lowerPlayerSel = playerSelection.toLowerCase();
    const lowerComputerSel = computerSelection.toLowerCase();

    if(lowerPlayerSel != "rock" && lowerPlayerSel != "paper" && lowerPlayerSel != "scissors"){return "Invalid input, the only options are rock, paper, or scissors";}

    if(totalGames < 5){
        if(lowerPlayerSel == lowerComputerSel) { 
            totalGames++;
            score.textContent = `Won ${gamesWon} out of ${totalGames}`;       
            return `It's a tie, both played ${lowerPlayerSel}`;
        }
        else if(lowerPlayerSel == "rock") {
            if(lowerComputerSel == "paper") {
                totalGames++;
                score.textContent = `Won ${gamesWon} out of ${totalGames}`;
                return `You lose, ${lowerComputerSel} beats ${lowerPlayerSel}`;
            } 
            else { 
                gamesWon++;
                totalGames++;
                score.textContent = `Won ${gamesWon} out of ${totalGames}`;
                return `You win, ${lowerPlayerSel} beats ${lowerComputerSel}`;
            }  
        }
        else if(lowerPlayerSel == "paper") {
            if(lowerComputerSel == "scissors") {
                totalGames++;
                score.textContent = `Won ${gamesWon} out of ${totalGames}`;
                return `You lose, ${lowerComputerSel} beats ${lowerPlayerSel}`;        
            } 
            else { 
                gamesWon++; 
                totalGames++;
                score.textContent = `Won ${gamesWon} out of ${totalGames}`;
                return `You win, ${lowerPlayerSel} beats ${lowerComputerSel}`;
            }        
        }
        else if(lowerPlayerSel == "scissors") {
            if(lowerComputerSel == "rock") {
                totalGames++;
                score.textContent = `Won ${gamesWon} out of ${totalGames}`;
                return `You lose, ${lowerComputerSel} beats ${lowerPlayerSel}`;
            } 
            else { 
                gamesWon++; 
                totalGames++;
                score.textContent = `Won ${gamesWon} out of ${totalGames}`;
                return `You win, ${lowerPlayerSel} beats ${lowerComputerSel}`;
            }                
        }
    } 
    else {
        if(gamesWon >= 3) {
            gamesWon = 0;
            totalGames = 0;
            return `Congratulations, You win`; 
        }
        else {
            gamesWon = 0;
            totalGames = 0;
            return `Sorry you lose`; 
        }
    }
}

function playGame(){
    gamesWon = 0;
    //for(let i = 0; i < 5; i++){
    //    playRound(prompt("Rock, Paper, or Scissors"), getComputerChoice());
    //}

    playRound(prompt("Rock, Paper, or Scissors"), getComputerChoice());
    alert(`You won ${gamesWon} out of 5 rounds`);


}

//playGame();