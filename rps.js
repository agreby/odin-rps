function getComputerChoise(){
    let items = ["rock", "paper", "scissors"];
    let comp_choice = items[Math.floor(Math.random()*items.length)];
    console.log(comp_choice);
    return comp_choice;
}

function playRound(playerSelection,getComputerChoise){
    if ( playerSelection == getComputerChoise ){
        alert("tie");
    }
    else{
        switch(playerSelection){
            case "rock":
                if (getComputerChoise == "scissors"){
                    alert("you won this round");
                    victorp1 +=1;
                }
                else{
                    alert("you lost this round");
                    victorai +=1;
                }
                break;
            case "paper":
                if (getComputerChoise == "rock"){
                    alert("you won this round");
                    victorp1 +=1;
                }
                else{
                    alert("you lost this round");
                    victorai +=1;
                }
                break;
            case "scissors":
                if (getComputerChoise == "paper"){
                    alert("you won this round");
                    victorp1 +=1;
                }
                else{
                    alert("you lost this round");
                    victorai +=1;
                }
                break;
        }
    }
    console.log(victorp1);
    console.log(victorai);
}

function playerSelection(){
    while(true){
        var player_choice = prompt("what will you choose");
        player_choice = player_choice.toLowerCase();
        if(player_choice == "rock" || player_choice == "paper" || player_choice == "scissors"){
            break;
        }
    }
    console.log(player_choice);
    return player_choice;
}

function game(){
    while (victorp1 != 5 || victorp1 != 5){
        playRound(playerSelection(),getComputerChoise());
        if(victorp1 == 5){
            alert("player won the game");
            break;
        }
        else if(victorai == 5){
            alert("the computer won the game");
            break;
        }
    }
    
}


let victorp1 = 0;
let victorai = 0;
game();