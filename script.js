function computerPlay(){
    let rand = Math.floor(Math.random() * 3);
    let ans = "";
    if(rand === 0){
        ans = "rock";
    }
    else if(rand === 1){
        ans = "paper";
    }
    else{
        ans = "scissors";
    }
    return ans;
}
function playRound(playSelection, computerSelection){
    let result;
    if((playSelection === "rock" && computerSelection === "scissors") || (playSelection === "scissors" && computerSelection === "paper") || (playSelection === "paper" && computerSelection === "rock")){
        result = 1;
    }
    else if(playSelection === computerSelection){
        result = 0;
    }
    else{
        result = -1;
    }
    return result;
}
function game(playSelection){
        comp = computerPlay();
        let res = playRound(playSelection, comp);
        if(res === 1){
            addWin();
            console.log("win");
            console.log(win);
            console.log(loss);
        }
        else if(res === -1){
            addLoss();
            console.log("loss");
            console.log(win);
            console.log(loss);
        }
        
        else{
            console.log("Tie.")
            console.log(win);
            console.log(loss);
        
        }

}
function rock(){
    game("rock");
}
function paper(){
    game("paper");
}
function scissors(){
    game("scissors");
}
let win = 0;
let loss = 0;
function addWin(){
    win++;
}
function addLoss(){
    loss++;
}
function reset(){
    win = 0;
    loss = 0;
}
run();
function run(){
    document.getElementById("test").disabled = true;
    document.getElementById("test1").disabled = true;
    document.getElementById("test2").disabled = true;
    document.getElementById("restart").disabled = true;
}
function play(){
    document.getElementById("test").disabled = false;
    document.getElementById("test1").disabled = false;
    document.getElementById("test2").disabled = false;
    document.getElementById("restart").disabled = false;
    while(win < 5 && loss < 5){
        
    }
    
}