function computerPlay(){
    let rand = Math.floor(Math.random() * 3);
    let ans = "";
    if(rand === 0){
        ans = "rock";
        document.getElementById("compImage").src = "https://i.ibb.co/7Kqr5Lh/rock.png";
    }
    else if(rand === 1){
        ans = "paper";
        document.getElementById("compImage").src = "https://i.ibb.co/ZJ6G0W8/3-39313-cartoon-notebook-paper-cartoon-notebook-paper-free-sheet-of-notebook-paper.jpg";
    }
    else{
        ans = "scissors";
        document.getElementById("compImage").src = "https://i.ibb.co/7GkyfN9/scissors3.png";
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
            document.getElementById("result").innerHTML = "Win!";
        }
        else if(res === -1){
            addLoss();
            document.getElementById("result").innerHTML = "Loss!"; 
        }
        
        else{
            console.log("Tie.");
            document.getElementById("result").innerHTML = "Tie.";
        
        }

}
function rock(){
    game("rock");
    document.getElementById("myImage").src = "https://i.ibb.co/7Kqr5Lh/rock.png";
}
function paper(){
    game("paper");
    document.getElementById("myImage").src = "https://i.ibb.co/ZJ6G0W8/3-39313-cartoon-notebook-paper-cartoon-notebook-paper-free-sheet-of-notebook-paper.jpg";
}
function scissors(){
    game("scissors");
    document.getElementById("myImage").src = "https://i.ibb.co/7GkyfN9/scissors3.png";
}
let win = 0;
let loss = 0;
let result = "";
function addWin(){
    win++;
    status();
}
function addLoss(){
    loss++;
    status();
}
function reset(){
    win = 0;
    loss = 0;
    document.getElementById("result").innerHTML = "";
    document.getElementById("myImage").src = "";
    document.getElementById("compImage").src = "";
    status();
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
        reset();
    
}
function status(){
    if(win < 5 && loss < 5){
        result = win + " : " + loss;
    }
    else if(win === 5 || loss === 5){
        if(win === 5){
            result = "You win! " + win + " to " + loss;
            run();
        }
        else{
            result = "You lose! " + win + " to " + loss;
            run();
        }
    }
    document.getElementById("status").innerHTML = result;
}