var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];

var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var lettersGuessedText = document.getElementById("lettersGuessed-text");


document.onkeyup = function(event) {
  var userGuess = event.key;
  var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
  lettersGuessed.push(userGuess);

  if ((userGuess === computerGuess)){
    wins++;
  }else if (guessesLeft > 1) {
    guessesLeft--;
  }else {
    losses++;
    guessesLeft = 9;
    lettersGuessed = [];
  }

  winsText.textContent = "Wins: " + wins;
  lossesText.textContent = "Losses: " + losses;
  guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
  lettersGuessedText.textContent = "Letters Guessed: " + lettersGuessed;
}
