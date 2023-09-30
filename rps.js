function getComputerChoise(){
    let items = ["rock", "paper", "scissors"];
    let comp_choice = items[Math.floor(Math.random()*items.length)];
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
    const body = document.querySelector('body');
    const div = document.createElement('div');
    div.textContent = `ai = "${victorai}" vs p1 = "${victorp1}"`;
    body.appendChild(div);
    const divs = document.querySelectorAll('div');
    if(victorp1 == 5 || victorai == 5){
            divs.forEach(div => {
                div.remove();
            });
        }
    }

function playerSelection(x){
    while(true){
        var player_choice = x;
        player_choice = player_choice.toLowerCase();
        if(player_choice == "rock" || player_choice == "paper" || player_choice == "scissors"){
            break;
        }
    }
    return player_choice;
}
/*
function game(){
    while (victorp1 != 1 || victorp1 != 1){
        playRound(playerSelection(),getComputerChoise());
        if(victorp1 == 1){
            alert("player won the game");
            break;
        }
        else if(victorai == 1){
            alert("the computer won the game");
            break;
        }
    }
    
}
*/
function game(){
    window.addEventListener("click",function(e){
        const btn = document.querySelector(`button[class="${e.target.getAttribute("class")}"]`);
        if(!btn){
            return;
        }
        const choice = btn.getAttribute("class");
        playRound(playerSelection(choice),getComputerChoise());
        if(victorp1 == 5){
            alert("player won the game");
            victorp1 = 0;
            victorai = 0;
        }
        else if(victorai == 5){
            alert("the computer won the game");
            victorp1 = 0;
            victorai = 0;
        }

    });
}

let victorp1 = 0;
let victorai = 0;
game();