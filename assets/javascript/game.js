// I have to set random words that will be used as the ones being guessed by the user
// these can possibly be stored in an array and called upon at random

var seinLanguage = ["Jerry", "Kramer", "George", "Elaine", "New York", "Soup Nazi", "Assman", "Junior Mints", "Puffy Shirt", "Newman"];

// randomize the selection from seinLanguage
var randomWord = seinLanguage[Math.floor(Math.random() * seinLanguage.length)];

// eliminate the spaces in between words for when taking into account the number of guesses the user has left
var randomWordNoSpace= randomWord.replace(/ +/g, "");
var finalWord = randomWordNoSpace.toLowerCase();

console.log(finalWord);

// testing link between html and js 
console.log(randomWord);

// declare variables
var wins = 0;
var losses = 0;
var initialNumberOfGuesses = randomWordNoSpace.length;
var correctWord = []
var guessedKey = "";

console.log(initialNumberOfGuesses)

// maybe use the push keyword to push guessed letters to the screen once they're guessed

// document.getElementById("word-placeholder").innerHTML = randomWord;

// letters that have been guessed for a certain word have to be disabled throughout that game
// these guessed words have to fill up an individual space on the screen and cannot be overwritten by the next guess
document.onkeyup = function (event) {

    guessedKey = guessedKey + event.key + " - ";
    // make it lowercase

    // var correctWord = correctWord +  event.key;

    

    document.getElementById("incorrectly-guessed").textContent = guessedKey;

    // index of > -1 if letter found in array of characters
    // correctWord[i]=guessedkey;

    for ( var i = 0; i < finalWord.length; i++) {
        

    if (finalWord[i] === event.key) {
        console.log(event.key);
    
    }

    if (finalWord[i] !== event.key ) {
        console.log(guessesRemaining);
        var guessesRemaining = initialNumberOfGuesses-4;
        document.getElementById("guesses-remaining").textContent = guessesRemaining;
        }
    }
    
    
}

// if else statement to compare user input and selected word and compare the letters within the strings...


// used words whether guessed correctly or not will have to be removed from the queue

// letter strokes on keyboard can be tracked by onkey or eventlistener?

// only incorrect  guessed letters will de displayed on screen under "guessed letters"

// correctly guessed letters will be displayed in the space of the random word

// every incorrectly guessed letter will deduct from the number of guesses remaining


// once word is guessed correctly, game will restart with a new word but keep track of the wins

// onload even loads the word and preserves it

// init function intializes something when it is over (in this case the random word will be reset)