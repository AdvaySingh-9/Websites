const choice = ["rock", "paper", "scissor"];
let playerscore = 0;
let computerscore = 0;
function playgame(playerchoice) {
    const playerdisplay = document.getElementById("playerdisplay");
    const computerdisplay = document.getElementById("computerdisplay");
    const resultdisplay = document.getElementById("resultdisplay");
    const playerscoredisplay = document.getElementById("playerscoredisplay");
    const computerscoredisplay = document.getElementById("computerscoredisplay");
    const computerchoice = choice[Math.floor(Math.random() * 3)];

    if(playerchoice === computerchoice){
        result = resultdisplay.textContent = "It's a tie!";
    }
    else{
        switch(playerchoice){
            case "rock":
                result = computerchoice === "paper" ? resultdisplay.textContent = "You lose!" : resultdisplay.textContent = "You win!";
                break;
            case "paper":
                result = computerchoice === "scissor"? resultdisplay.textContent = "You lose!": resultdisplay.textContent = "You win!";
                break;
            case "scissor":
                result = computerchoice === "rock"? resultdisplay.textContent = "You lose!" : resultdisplay.textContent = "You win!";
                break;
        }
    }
    if(computerchoice === "rock"){
        computerdisplay.textContent = "TaskBot: 👊"
    }
    else if(computerchoice ==="paper"){
        computerdisplay.textContent = "TaskBot: 🤚"
    }
    else{
        computerdisplay.textContent = "TaskBot: ✌️"
    }
    if(playerchoice === "rock"){
        playerdisplay.textContent = "You: 👊"
    }
    else if(playerchoice === "paper"){
        playerdisplay.textContent = "You: 🤚"
    }
    else{
        playerdisplay.textContent = "You: ✌️"
    }
    switch(result){
        case "You win!":
            playerscore++;
            playerscoredisplay.textContent = "You: " + playerscore
            break;
        case "You lose!":
            computerscore++;
            computerscoredisplay.textContent = "TaskBot: " + computerscore
            break;
    }
}