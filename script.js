var wins = document.getElementById('wins');
var losses = document.getElementById('losses');
var draws = document.getElementById('draws');
const restartBtn = document.getElementById('restartBtn');
const gameResult = document.getElementById('gameResult');
const computerChoice = document.getElementById('computerChoice');

let userChoice = ""; 

function startGame() {
    wins.innerText = 0;
    losses.innerText = 0;
    draws.innerText = 0;
    gameResult.innerText = "";
    computerChoice.innerText = "";
}

function restartGame() {
    startGame();
    console.log(`game restarted. secret number is ${randomNumber}`)
}

restartBtn.addEventListener('click', restartGame);


function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice.innerText = choices[randomIndex];
    return choices[randomIndex];
}

function playGame(userChoice) {
    let computer = computerPlay();
    if (userChoice === computer) {
        draws.innerText++;
        gameResult.innerText = "It's a draw!";
    } else if (userChoice === 'rock' && computer === 'scissors' || userChoice === 'paper' && computer === 'rock' || userChoice === 'scissors' && computer === 'paper') {
        wins.innerText++;
        gameResult.innerText = "You win!";
    } else {
        losses.innerText++;
        gameResult.innerText = "You lose!";
    }
}

startGame();


