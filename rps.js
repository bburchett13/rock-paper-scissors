const rps = ['Water', 'Grass', 'Fire'];
const wgf = ['💧', '🌱', '🔥'];

// Function to play the game
function rockPaperScissors(userChoice) {
    let random = Math.floor(Math.random()*3);
    let compChoice = rps[random];
    console.log(random);
    userSign.textContent = wgf[rps.indexOf(userChoice)];
    compSign.textContent = wgf[random];

    if (userChoice == compChoice){

        gameRes.textContent = 'It\'s a Tie!';
        gameComment.textContent = userChoice + ' and ' + compChoice + ' tie!'

    }
    else if ((userChoice == 'Water' && compChoice == 'Grass') || (userChoice == 'Grass' && compChoice == 'Fire') || (userChoice == 'Fire' && compChoice == 'Water')){
        
        compScore++;
        compScoreDisp.textContent = 'Computer: ' + compScore;
        gameRes.textContent = 'You Lose!';
        gameComment.textContent = compChoice + ' beats ' + userChoice + '!';

        
    }
    else if ((userChoice == 'Grass' && compChoice == 'Water') || (userChoice == 'Fire' && compChoice == 'Grass') || (userChoice == 'Water' && compChoice == 'Fire')){
        
        userScore++;
        userScoreDisp.textContent = 'Player: ' + userScore;
        gameRes.textContent = 'You Win!';
        gameComment.textContent = userChoice + ' beats ' + compChoice + '!';

    }
}

let userScore = 0;
let compScore = 0;


const rockBtn = document.querySelector("#Rock");
const paperBtn = document.querySelector("#Paper");
const scissorsBtn = document.querySelector("#Scissors");
const userScoreDisp = document.querySelector('#userScore');
const compScoreDisp = document.querySelector('#compScore');
const gameRes = document.querySelector('#gameResult');
const gameComment = document.querySelector('#gameComment');
const userSign = document.querySelector('.userSign');
const compSign = document.querySelector('.compSign');

userScoreDisp.textContent = 'Player: ' + userScore;
compScoreDisp.textContent = 'Computer: ' + compScore;
gameRes.textContent = 'Press a button to play!'

let userChoice;

rockBtn.addEventListener('click', () => {
    
    userChoice = 'Water';
    rockPaperScissors(userChoice);

})


paperBtn.addEventListener('click', () => {
    
    userChoice = 'Grass';
    rockPaperScissors(userChoice);

})


scissorsBtn.addEventListener('click', () => {
    
    userChoice = 'Fire';
    rockPaperScissors(userChoice);

})






