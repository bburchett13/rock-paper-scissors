const rps = ['Rock', 'Paper', 'Scissors']

// Function to play the game
function rockPaperScissors(userChoice) {
    let compChoice = rps[Math.floor(Math.random()*3)];

    if (userChoice == compChoice){

        gameRes.textContent = 'The Computer Chose ' + compChoice + '! It\'s a Tie!';

    }
    else if ((userChoice == 'Rock' && compChoice == 'Paper') || (userChoice == 'Paper' && compChoice == 'Scissors') || (userChoice == 'Scissors' && compChoice == 'Rock')){
        
        compScore++;
        compScoreDisp.textContent = 'Computer Score: ' + compScore;
        gameRes.textContent = 'The Computer Chose ' + compChoice + '! You Lose!';

        
    }
    else if ((userChoice == 'Paper' && compChoice == 'Rock') || (userChoice == 'Scissors' && compChoice == 'Paper') || (userChoice == 'Rock' && compChoice == 'Scissors')){
        
        userScore++;
        userScoreDisp.textContent = 'User Score: ' + userScore;
        gameRes.textContent = 'The Computer Chose ' + compChoice + '! You Win!';

    }
}

let userScore = 0;
let compScore = 0;

// function to take result of game and update score
function addScore (result) {

    if (result == 3) {

        userScore++;
        userScoreDisp.textContent = 'User Score: ' + userScore;
        gameRes.textContent = 'The Computer Chose' + compChoice + '! You Win!'

    }
    else if (result == 2){

        compScore++;
        compScoreDisp.textContent = 'Computer Score: ' + compScore;

    }
}

const rockBtn = document.querySelector("#Rock");
const paperBtn = document.querySelector("#Paper");
const scissorsBtn = document.querySelector("#Scissors");
const userScoreDisp = document.querySelector('#userScore')
const compScoreDisp = document.querySelector('#compScore')
const gameRes = document.querySelector('#gameResult')

userScoreDisp.textContent = 'User Score: ' + userScore;
compScoreDisp.textContent = 'Computer Score: ' + compScore;
gameRes.textContent = 'Press a button to play!'

let userChoice;

rockBtn.addEventListener('click', () => {
    
    userChoice = 'Rock';
    rockPaperScissors(userChoice);

})


paperBtn.addEventListener('click', () => {
    
    userChoice = 'Paper';
    rockPaperScissors(userChoice);

})


scissorsBtn.addEventListener('click', () => {
    
    userChoice = 'Scissors';
    rockPaperScissors(userChoice);

})






