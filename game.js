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
            showScore(false);      
            return `It's a tie, both played ${lowerPlayerSel}`;
        }
        else if(lowerPlayerSel == "rock") {
            if(lowerComputerSel == "paper") {
                showScore(false);
                return `You lose, ${lowerComputerSel} beats ${lowerPlayerSel}`;
            } 
            else { 
                showScore(true);
                return `You win, ${lowerPlayerSel} beats ${lowerComputerSel}`;
            }  
        }
        else if(lowerPlayerSel == "paper") {
            if(lowerComputerSel == "scissors") {
                showScore(false);
                return `You lose, ${lowerComputerSel} beats ${lowerPlayerSel}`;        
            } 
            else { 
                showScore(true);
                return `You win, ${lowerPlayerSel} beats ${lowerComputerSel}`;
            }        
        }
        else if(lowerPlayerSel == "scissors") {
            if(lowerComputerSel == "rock") {
                showScore(false);
                return `You lose, ${lowerComputerSel} beats ${lowerPlayerSel}`;
            } 
            else { 
                showScore(true);
                return `You win, ${lowerPlayerSel} beats ${lowerComputerSel}`;
            }                
        }
    } 

    function showScore(won){
        if(won == true){
            gamesWon++;        
        }
        totalGames++;
        score.textContent = `Won ${gamesWon} out of ${totalGames}`;

        if(totalGames == 5) {            
            if(gamesWon >= 3) {              
                score.textContent = `Congratulations, You win`; 
            }
            else {                
                score.textContent = `Sorry you lose`; 
            }
            gamesWon = 0;
            totalGames = 0;
        }
    }
}