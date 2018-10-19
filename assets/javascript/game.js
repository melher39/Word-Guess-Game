// I have to set random words that will be used as the ones being guessed by the user
// these can possibly be stored in an array and called upon at random

var seinLanguage = ["jerry", "kramer", "george", "elaine", "new york", "soup nazi", "assman", "junior mints", "puffy shirt", "newman"];

// randomize the selection from seinLanguage
// var randomWord = seinLanguage[Math.floor(Math.random() * seinLanguage.length)];

// eliminate the spaces in between words for when taking into account the number of guesses the user has left
// var finalWord= randomWord.replace(/ +/g, "");
// var finalWord = randomWordNoSpace.toLowerCase();

// console.log(finalWord);

// testing link between html and js 
// console.log(randomWord);

// declare an object for for the propery values and methods needed to play this Seinfeld game

var seinfeldGame = {
    wins: 0, //starts at 0 but will increase as the user plays if they win a round
    losses: 0, //starts at 0 but will increase as the user plays if they lose a round
    initialNumberOfGuesses: finalWord.length, //number of guesses will always equal to the number of characters in the computer randomized word, the shorter the word, the less tries the user will be given
    finalWord: "", //this has the computer randomized correct word until the user guesses it
    incorrectGuessedKey: "", //ths stores the wrong guessed letters the player types
    correctGuessedKey: [], //this saves the correct guessed letters the player types
    underlines: [], //this will store the underlines to be used as the player is guessing the computer randomized word
    guessedKey: "", //this stores any key typed by the user

    // this will show the underlines in place of the finalWord
    showUnderlineForCorrectGuessedKey: function () {
        for (var i=0; i < this.finalWord.length; i++) {
            this.correctGuessedKey[i] = this.correctGuessedKey[i] + " ";
            this.underlines = this.underlines + "_";
        }
    }, 
    // function will keep track of the number of wins
    winsCounter: function() {
        var counter = 1; //keeps track of the correct number of guessed letters
        for (var i=0; i < finalWord.length; i++) {
            if (this.correctGuessedKey[i].indexOf(" " === -1)) {
                counter++;
            }
            if (counter === this.finalWord.length) {
                this.wins++;
                this.gameReset();
            }


        }

    },
    //function will keep track of the number of losses
    lossesCounter: function() {
        if (this.initialNumberOfGuesses === 0) {
            this.losses++;
            this.gameReset();
        }
    },

    //function will reset the game once the player loses or wins, but will not reset the score of losses or wins
    gameReset: function() {
        this.initialNumberOfGuesses = finalWord.length;
        // this.finalWord = "";
        this.incorrectGuessedKey = "";
        this.correctGuessedKey = [];
        this.underlines = [];
        this.guessedKey = "";
        this.showUnderlineForCorrectGuessedKey();

        // randomize the selection from seinLanguage
        var randomWord = seinLanguage[Math.floor(Math.random() * seinLanguage.length)];

        // eliminate the spaces in between words for when taking into account the number of guesses the user has left
        this.finalWord= randomWord.replace(/ +/g, "");
    },
    //check to see if the user guessed letter matches with one in the finalWord
    compareGuessedKeyToFinalWord: function() {
        for (var i=0; i<this.finalWord.length; i++){
            if(this.finalWord.indexOf(this.guessedKey > -1)) {
                this.correctGuessedKey[this.guessedKey];
            }
            else{
                this.incorrectGuessedKey = this.incorrectGuessedKey + this.guessedKey + " ";
                this.initialNumberOfGuesses--;
            }
        }
    }


     

};

console.log(seinfeldGame.initialNumberOfGuesses)

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