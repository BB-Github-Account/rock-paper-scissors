const rps = ["rock", "paper", "scissors"];
let gamesWon = 0;

function getComputerChoice(){
    return  rps[Math.floor(Math.random() * rps.length)];
}

function playRound(playerSelection, computerSelection){
    
    const lowerPlayerSel = playerSelection.toLowerCase();
    const lowerComputerSel = computerSelection.toLowerCase();

    if(lowerPlayerSel != "rock" && lowerPlayerSel != "paper" && lowerPlayerSel != "scissors"){return alert("Invalid input, the only options are rock, paper, or scissors");}

    if(lowerPlayerSel == lowerComputerSel) {        
        return alert(`It's a tie, both played ${lowerPlayerSel}`);
    }
    else if(lowerPlayerSel == "rock") {
        if(lowerComputerSel == "paper") {
            return alert(`You lose, ${lowerComputerSel} beats ${lowerPlayerSel}`);
        } 
        else { 
            gamesWon++;
             return alert(`You win, ${lowerPlayerSel} beats ${lowerComputerSel}`);
        }  
    }
    else if(lowerPlayerSel == "paper") {
        if(lowerComputerSel == "scissors") {
            return alert(`You lose, ${lowerComputerSel} beats ${lowerPlayerSel}`);        
        } 
        else { 
            gamesWon++; 
            return alert(`You win, ${lowerPlayerSel} beats ${lowerComputerSel}`);
        }        
    }
    else if(lowerPlayerSel == "scissors") {
        if(lowerComputerSel == "rock") {
            return alert(`You lose, ${lowerComputerSel} beats ${lowerPlayerSel}`);
        } 
        else { 
            gamesWon++; 
            return alert(`You win, ${lowerPlayerSel} beats ${lowerComputerSel}`);
        }                
    }
}

function playGame(){
    gamesWon = 0;
    for(let i = 0; i < 5; i++){
        playRound(prompt("Rock, Paper, or Scissors"), getComputerChoice());
    }
    alert(`You won ${gamesWon} out of 5 rounds`);
}

playGame();