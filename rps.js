const rps = ['Rock', 'Paper', 'Scissors']

// function userInput() {

//     let choice = prompt("Please type Rock, Paper, or Scissors: ").toLowerCase();
//     if (choice != 'rock' && choice != 'paper' && choice != 'scissors'){
//         alert('Please try again')
//         choice = userInput();
//     }
//     return choice;
// }


function rockPaperScissors(userChoice) {
    let random = Math.floor(Math.random()*3)
    let compChoice = rps[random];

    console.log(userChoice);
    console.log(compChoice);

    if (userChoice == compChoice){

        return 1
    }
    else if ((userChoice == 'Rock' && compChoice == 'Paper') || (userChoice == 'Paper' && compChoice == 'Scissors') || (userChoice == 'Scissors' && compChoice == 'Rock')){

        return 2
        
    }
    else if ((userChoice == 'Paper' && compChoice == 'Rock') || (userChoice == 'Scissors' && compChoice == 'Paper') || (userChoice == 'Rock' && compChoice == 'Scissors')){

        return 3
    }
}

let winner = false;
let win;
let userScore = 0;
let compScore = 0;

function addScore (result) {

    if (result == 3) {

        userScore++;
        userScoreDisp.textContent = 'User Score: ' + userScore;

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

userScoreDisp.textContent = 'User Score: ' + userScore;
compScoreDisp.textContent = 'Computer Score: ' + compScore;

let userChoice;

rockBtn.addEventListener('click', () => {
    
    userChoice = 'Rock';
    let result = rockPaperScissors(userChoice);
    addScore(result);

})


paperBtn.addEventListener('click', () => {
    
    userChoice = 'Paper';
    let result = rockPaperScissors(userChoice);
    addScore(result);
})


scissorsBtn.addEventListener('click', () => {
    
    userChoice = 'Scissors';
    let result = rockPaperScissors(userChoice);
    addScore(result);
})






