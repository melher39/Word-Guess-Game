//global variables set
// the words the user will have to guess and these will be randomized later in the game
var seinLanguage = ["Jerry", "Kramer", "George", "Elaine", "Seinfeld", "Festivus", "Assman", "Cosmo", "Costanza", "Newman"];
//predefined number of guesses player will have before losing
var initialNumberOfGuesses = 10;
//this has the computer randomized correct word until the user guesses it
var finalWord = "";
//this stores the wrong guessed letters the player types
var incorrectGuessedKey = "";
//this saves the correct guessed letters the player types
var correctGuessedKey = [];
//this stores any key typed by the user
var guessedKey = "";

// declare an object for the propery values and methods needed to play this Seinfeld game
var seinfeldGame = {
    wins: 0, //starts at 0 but will increase as the user plays if they win a round
    losses: 0, //starts at 0 but will increase as the user plays if they lose a round

    // this will show the underlines in place of the finalWord
    showUnderlineForCorrectGuessedKey: function () {
        for (var i = 0; i < finalWord.length; i++) {
            correctGuessedKey[i] = " _ ";
        }
    },

    // function will keep track of the number of wins
    winsCounter: function () {
        // converts correctGuessedKey array to string so it can be read as a complete word to compare to the final word the computer randomized
        var stringConvert = "";
        for (var i = 0; i < finalWord.length; i++) {
            stringConvert = stringConvert + correctGuessedKey[i];
        }
        // if the complete word stringConvert is equal to the finalWord, then user has won, wins will increase by 1
        // and game will reset
        if (stringConvert === finalWord) {
            alert("Yep! It's " + finalWord + "!\nYou won! :)");
            this.wins++;
            this.gameReset();
        }
    },

    // function will keep track of the number of losses and reset the game if user loses by running out of guesses
    lossesCounter: function () {
        if (initialNumberOfGuesses === 0) {
            alert("You Lost! :( Try again");
            this.losses++;
            this.gameReset();
        }
    },

    // javascript function that allows only letters as an input
    allLetter: function (inputtxt) {

        var letters = /^[A-Za-z]+$/;
        if (inputtxt.match(letters)) {
            return true;
        }
        else {

            return false;
        }
    },

    //function will reset the game once the player loses or wins, but will not reset the score of losses or wins
    gameReset: function () {
        initialNumberOfGuesses = 10;
        finalWord = "";
        incorrectGuessedKey = "";
        correctGuessedKey = [];
        guessedKey = "";

        // randomize the selection from seinLanguage and make it lowercase
        finalWord = seinLanguage[Math.floor(Math.random() * seinLanguage.length)].toLowerCase();

        // underlines will show up blank again
        this.showUnderlineForCorrectGuessedKey();
    },

    //check to see if the user guessed letter matches with one in the finalWord by its index
    compareGuessedKeyToFinalWord: function () {

        // initial condition if letter has been found set to false
        var letterFound = false;

        // if guessedKey is found in the array of string characters in the finalWord, change var letterFound to true and assign the guessedKey to the correctGuessedKey array
        for (var i = 0; i < finalWord.length; i++) {
            if (finalWord[i].indexOf(guessedKey) > -1) {
                correctGuessedKey[i] = guessedKey;
                letterFound = true;
            }

        }

        // only if var letterFound is false and guessedKey is not found in the incorrectly guessed key list,
        //  then add it with space in between and decrease the number of guesses remaining
        // this limits duplicate letters as input
        if (letterFound == false && incorrectGuessedKey.indexOf(guessedKey) === -1) {
            incorrectGuessedKey = incorrectGuessedKey + guessedKey + " ";
            initialNumberOfGuesses--;
        }

    },

    // items to be changed on screen as game progresses
    screen: function () {

        // if the key press is a correct letter, then it will display in the word-placeholder div along with the underlines
        document.getElementById("word-placeholder").textContent = correctGuessedKey.join("");

        // the number of guesses remaining will decrease and show if the wrong letter is pressed
        document.getElementById("guesses-remaining").textContent = initialNumberOfGuesses;

        // the incorrectly guessed letters will be displayed for the player to see
        document.getElementById("incorrectly-guessed").textContent = incorrectGuessedKey;

        // every time a letter is pressed, check for wins and losses and display them in their respective div 
        this.winsCounter();
        document.getElementById("wins-counter").textContent = this.wins;

        this.lossesCounter();
        document.getElementById("losses-counter").textContent = this.losses;
    },

    // once game begins...
    playSeinfeldGame: function () {

        // start comparing pressed key to this.finalWord
        this.compareGuessedKeyToFinalWord();

        //start the on screen changes
        this.screen();

    }
};

// setup of the game to be loaded by html
function setupGame() {
    // randomize the selection from seinLanguage
    finalWord = seinLanguage[Math.floor(Math.random() * seinLanguage.length)].toLowerCase();

    //make sure underlines show up blank
    seinfeldGame.showUnderlineForCorrectGuessedKey();
}

// once user types a key...
document.onkeyup = function (event) {
    // record key and make it lowercase
    var letter = event.key.toLowerCase();

    // if pressed key is alphabetical then assign it to guessedKey and continue game
    if (seinfeldGame.allLetter(letter)) {
        guessedKey = letter;
        seinfeldGame.playSeinfeldGame();
    }

    // if not then alert to try again
    else {
        alert("Invalid Entry! Letters only. Try again.")
    }
}