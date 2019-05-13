//assign buttons to variables
var rockButton = document.querySelector('#rock');
var paperButton = document.querySelector('#paper');
var scissorsButton = document.querySelector('#scissors');
var h2 = document.querySelector('#h2');
var playAgainButton = document.querySelector('#playAgain');
var scores = document.querySelector('#scores');
var endButton = document.querySelector('#end');

playAgainButton.style.visibility = 'hidden';
endButton.style.visibility = 'hidden';

var compChoice;
var playerChoice;
var choices = ['Rock', 'Paper', 'Scissors'];
var wins = 0;
var losses = 0;
var ties = 0;


rockButton.addEventListener('click', function(){
    playerChoice = "Rock";
    disable();
    rollCompChoice();
    checkWinner();
});

paperButton.addEventListener('click', function(){
    playerChoice = "Paper";
    disable();
    rollCompChoice();
    checkWinner();
});

scissorsButton.addEventListener('click', function(){
    playerChoice = "Scissors";
    disable();
    rollCompChoice();
    checkWinner();
});

playAgainButton.addEventListener('click', function(){
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    h2.textContent = '';
    playAgainButton.style.visibility = 'hidden';
    endButton.style.visibility = 'hidden';
});

endButton.addEventListener('click', function(){
    h2.textContent = `Wins: ${wins} | Losses: ${losses} | Ties: ${ties}`;
})




function disable(){
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function rollCompChoice(){
    compChoice = choices[Math.floor(Math.random()*choices.length)];
}

function checkWinner(){
    //if both choices are the same (tie)
    if(compChoice == playerChoice){
        h2.textContent = `You choose ${playerChoice} and the Computer choose ${compChoice}. Its a tie.`;
        ties++;
        playAgain.style.visibility = 'visible';  
        endButton.style.visibility = 'visable';
    }

    //check if comp. choose Scissors
    if(compChoice == 'Scissors'){
        //Check who wins
        if(playerChoice == 'Rock'){
            h2.textContent = `You choose ${playerChoice} and the Computer choose ${compChoice}. You win!`
            wins++;
            
        }
        if(playerChoice == 'Paper'){
            h2.textContent = `You choose ${playerChoice} and the Computer choose ${compChoice}. You Lose!`
            losses++;
        }
        playAgain.style.visibility = 'visible';
        endButton.style.visibility = 'visable';
    }

    //check if comp. choose Rock
    if(compChoice == 'Rock'){
        //Check who wins
        if(playerChoice == 'Scissors'){
            h2.textContent = `You choose ${playerChoice} and the Computer choose ${compChoice}. You Lose!`
            losses++;
        }
        if(playerChoice == 'Paper'){
            h2.textContent = `You choose ${playerChoice} and the Computer choose ${compChoice}. You Win!`
            wins++;
        }  
        playAgain.style.visibility = 'visible';
        endButton.style.visibility = 'visable';
    }

    //check if comp. choose Papers
    if(compChoice == 'Paper'){

        //check who wins
        if(playerChoice == 'Scissors'){
            h2.textContent = `You choose ${playerChoice} and the Computer choose ${compChoice}. You Win!`
            wins++;
        }
        if(playerChoice == 'Rock'){
            h2.textContent = `You choose ${playerChoice} and the Computer choose ${compChoice}. You Lose!`
            losses++;
        }  
        playAgain.style.visibility = 'visible';
        endButton.style.visibility = 'visable';
    }

};



