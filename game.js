var wins = 0;
var losses = 0;
var guessLeft = 10;
var computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var winsText = document.getElementById("wins-text");
var lossText = document.getElementById("losses-text");
var choicesLeft = document.getElementById("guess-left");
var lettersGuessed = document.getElementById("lets-guessed");

winsText.textContent = "Wins: " + wins;
lossText.textContent = "Losses: " + losses;
choicesLeft.textContent = "Guesses Left: " + guessLeft;
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

function resetFunction() {
    guessLeft = 10;
    lettersGuessed.textContent = ""
    computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

document.onkeyup = function(event) {
    var userGuess = event.key;


    

        if (userGuess === computerGuess) {
            wins++;
            resetFunction();
        }
        console.log(computerGuess)
        if (userGuess != computerGuess) {
            guessLeft--;
        }
        if (guessLeft === 0) {
            losses++;
            resetFunction();
        }
        
        winsText.textContent = "Wins: " + wins;
        lossText.textContent = "Losses: " + losses;
        choicesLeft.textContent = "Guesses Left: " + guessLeft;
        var textnode = document.createTextNode(" " + userGuess + " ");
        lettersGuessed.appendChild(textnode);
}