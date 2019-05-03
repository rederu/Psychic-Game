
//Array with all the options available to choose for computerGuess
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
//Global variables
var wins = 0;
var losses = 0;
var numGuess = 10;
var userInput = [];

//DOM Manipulation 
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var attemptsText = document.getElementById("attempts-left");
var userInputText = document.getElementById("user-guess");


//Reset Stats except Wins and Losses
function resetStats() {
    numGuess = 10;
    userInput = [];
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    // questionMarkText.textContent = "?";

};

//Computer selects a random letter from the alphabet array. 
// Math.floor(Math.random() * alphabet.length) allows to get a random integer number that will be the index of the letter chosen.
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeyup = function (event) {
    //User guess is lower case even if capslock is active in the keyboard
    var userGuess = event.key.toLowerCase();

    //This avoids to add repeated letters to the userInput array
    //IF the letter is not repeated it will be added to the userInput array
    //Also, IF the letter the user guessed is not the same as the computer chose it will decrease the attempts available for the user.
    if (userInput.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess >= 0)) {
        console.log(computerGuess);
        userInput[userInput.length] = userGuess;
        numGuess--;
    }
    //If the letter the computer chose (?) is the same the user guessed....
    //User wins so we will add a victory to its wins
    //It also will display an alert showing the letter the computer had chosen and the user guessed correctly.
    if (computerGuess == userGuess) {
        wins++;
        alert("Congrats! The letter I was thinking of was " + computerGuess.toUpperCase());
        resetStats();



    }
    //If the letter the computer chose (?) is not the same the user tried to guess and there are no attempts left for the user...
    //Number of times the user has lost +1.
    //it will show an alert with the letter user could not guess.
    //Calls to resetStats function to continue playing.
    if (numGuess == 0) {
        losses++;
        alert("Well, at least you tried! The letter I was thinking of was " + computerGuess.toUpperCase());
        resetStats();
    }

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    attemptsText.textContent = "Guesses left: " + numGuess;
    userInputText.textContent = "Your Guesses so Far: " + userInput.join(" - ");

};