const rps = ['rock', 'paper', 'scissors']

function userInput() {

    let choice = prompt("Please type Rock, Paper, or Scissors: ").toLowerCase();
    if (choice != 'rock' && choice != 'paper' && choice != 'scissors'){
        alert('Please try again')
        choice = userInput();
    }
    return choice;
}


function rockPaperScissors(userChoice) {

    let userChoice = userInput();
    let compChoice = rps[Math.floor(Math.random()*4)];



    if (userChoice == compChoice){

        alert("You chose: " + userChoice + "\nThe Computer chose: " + compChoice + "\nIt's a tie")
        return 1
    }
    else if ((userChoice == 'rock' && compChoice == 'paper') || (userChoice == 'paper' && compChoice == 'scissors') || (userChoice == 'scissors' && compChoice == 'rock')){

        alert("You chose: " + userChoice + "\nThe Computer chose: " + compChoice + "\nYou lose!")
        return 2
        
    }
    else if ((userChoice == 'paper' && compChoice == 'rock') || (userChoice == 'scissors' && compChoice == 'paper') || (userChoice == 'rock' && compChoice == 'scissors')){

        alert("You chose: " + userChoice + "\nThe Computer chose: " + compChoice + "\nYou win!")
        return 3
    }
}

let winner = false;
let win;
let userScore = 0;
let compScore = 0;

while (!winner) {
    
    win = rockPaperScissors()

    if (win == 3) {

        userScore++;
        alert("The current score is\nPlayer: " + userScore + "\nComputer: " + compScore)

    }
    else if (win == 2){

        compScore++;
        alert("The current score is\nPlayer: " + userScore + "\nComputer: " + compScore)

    }


    

    if (userScore == 3 || compScore == 3){

        winner = true

    }
}
if (userScore > compScore) {

    alert("You win!")

}
else {

    alert("You lose!")

}

