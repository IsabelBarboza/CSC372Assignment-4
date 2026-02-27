document.addEventListener('DOMContentLoaded', function() {
const rock=document.getElementById('rock');
const paper=document.getElementById('paper');
const scissors=document.getElementById('scissors');
const computerimg=document.getElementById('computer-result');
const resultDiv=document.getElementById('result');

const choices=[
    {name:'rock', img:'images/rock.png'},
    {name:'paper', img:'images/paper.png'},
    {name:'scissors', img:'images/scissors.png'}
];
rock.addEventListener('click', function() {
    playerChoice('rock',rock);
});
paper.addEventListener('click', function() {
    playerChoice('paper',paper);
}
);
scissors.addEventListener('click', function() {
    playerChoice('scissors',scissors);
}); 

 function playerChoice(playerSelection,playerImg){
    removehighlight();
    playerImg.classList.add('selected');

    startcomputerChoice(playerSelection);
    }

function removehighlight(){
    rock.classList.remove('selected');
    paper.classList.remove('selected');
    scissors.classList.remove('selected');
}

function startcomputerChoice(playerSelection){
    const shuffleInterval=setInterval(function() {
        const randomIndex=Math.floor(Math.random()*choices.length);
        computerimg.src=choices[randomIndex].img;
    },500);

    setTimeout(function() {
        clearInterval(shuffleInterval);
        const finalIndex=Math.floor(Math.random()*choices.length);
        const computerSelection=choices[finalIndex];
        computerimg.src=computerSelection.img;
        determineWinner(playerSelection,computerSelection.name);
    },3000);
}

function determineWinner(playerSelection,computerSelection){
    if(playerSelection===computerSelection){
        resultDiv.textContent="It's a tie!";
    } else if((playerSelection==='rock' && computerSelection==='scissors') ||
              (playerSelection==='paper' && computerSelection==='rock') ||
              (playerSelection==='scissors' && computerSelection==='paper')) {
        resultDiv.textContent="You win!";
    } else {
        resultDiv.textContent="Computer wins!";
    }
}
});
