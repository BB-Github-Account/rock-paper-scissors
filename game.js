const rps = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return  rps[Math.floor(Math.random() * rps.length)];
}

function playRound(playerSelection, computerSelection){
    
    const lowerPlayerSel = playerSelection.toLowerCase();
    const lowerComputerSel = computerSelection.toLowerCase();

    if(lowerPlayerSel == lowerComputerSel) {
        console.log(`It's a tie, both selected ${lowerPlayerSel}`);
        return `It's a tie, both selected ${lowerPlayerSel}`;
    }
    else if(lowerPlayerSel == "rock") {
        if(lowerComputerSel == "paper"){
            return `You lose, ${lowerComputerSel} beats ${lowerPlayerSel}`;
        } 
        else { return `You win, ${lowerPlayerSel} beats ${lowerComputerSel}`;}
                
    }
    else if(lowerPlayerSel == "paper") {
        if(lowerComputerSel == "scissors"){
            return `You lose, ${lowerComputerSel} beats ${lowerPlayerSel}`;
        } 
        else { return `You win, ${lowerPlayerSel} beats ${lowerComputerSel}`;}
        
    }
    else if(lowerPlayerSel == "scissors") {
        if(lowerComputerSel == "rock"){
            return `You lose, ${lowerComputerSel} beats ${lowerPlayerSel}`;
        } 
        else { return `You win, ${lowerPlayerSel} beats ${lowerComputerSel}`;}
                
    }
}
