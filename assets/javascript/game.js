// the words the user will have to guess and these will be randomized later in the game
var seinLanguage = ["jerry", "kramer", "george", "elaine", "new york", "soup nazi", "assman", "junior mints", "puffy shirt", "newman"];

var initialNumberOfGuesses = 8;//predefined number of guesses player will have before losing
var finalWord = ""; //this has the computer randomized correct word until the user guesses it
var incorrectGuessedKey = ""; //this stores the wrong guessed letters the player types
var correctGuessedKey = []; //this saves the correct guessed letters the player types
var guessedKey = ""; //this stores any key typed by the user

// declare an object for for the propery values and methods needed to play this Seinfeld game
var seinfeldGame = {
    wins: 0, //starts at 0 but will increase as the user plays if they win a round
    losses: 0, //starts at 0 but will increase as the user plays if they lose a round

    // this will show the underlines in place of the finalWord
    showUnderlineForCorrectGuessedKey: function () {
        for (var i = 0; i < finalWord.length; i++) {
            correctGuessedKey[i] = " _ ";
            // this.underlines = this.underlines + "_";
        }
    },

    // function will keep track of the number of wins
    winsCounter: function () {
        // converts correctGuessedKey array to string to compare
        var stringConvert = "";
        for (var i = 0; i < finalWord.length; i++) {
            stringConvert = stringConvert + correctGuessedKey[i];
        }
        // if the var stringConvert is equal to the finalWord, then user has won, wins will increase by 1
        // and game will reset
        if (stringConvert === finalWord) {
            alert("You won! :)");
            this.wins++;
            this.gameReset();
        }
    },

    //function will keep track of the number of losses and reset the game if user loses
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
        initialNumberOfGuesses = 8;
        finalWord = "";
        incorrectGuessedKey = "";
        correctGuessedKey = [];
        guessedKey = "";
        
        // randomize the selection from seinLanguage and make it lowercase
        var randomWord = seinLanguage[Math.floor(Math.random() * seinLanguage.length)].toLowerCase();

        // eliminate the spaces in between words for when taking into account the number of guesses the user has left
        finalWord = randomWord.replace(/ +/g, "");

        this.showUnderlineForCorrectGuessedKey();
    },

    //check to see if the user guessed letter matches with one in the finalWord by its index
    compareGuessedKeyToFinalWord: function () {

        var letterFound = false;

        for (var i = 0; i < finalWord.length; i++) {
            if (finalWord[i].indexOf(guessedKey) > -1) {
                correctGuessedKey[i]= guessedKey;
                letterFound = true;
            }

        }

        if (letterFound == false && incorrectGuessedKey.indexOf(guessedKey) === -1) {
            incorrectGuessedKey = incorrectGuessedKey + guessedKey + " ";
            initialNumberOfGuesses--;
        }
        


    },

    // items to be changed once game has begun
    display: function () {

        // if the key press is a correct letter, then it will display in the word-placeholder div along with the underlines
        document.getElementById("word-placeholder").textContent = correctGuessedKey.join("");
        // document.getElementById("word-placeholder-underline").textContent = this.underlines;

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

        this.display();

    }
};

// setup of the game
function setupGame() {
    // randomize the selection from seinLanguage
    var randomWord = seinLanguage[Math.floor(Math.random() * seinLanguage.length)].toLowerCase();
    // eliminate the spaces in between words for when taking into account the number of guesses the user has left
    finalWord = randomWord.replace(/ +/g, "");
    console.log(finalWord);

    // seinfeldGame.finalWord = finalWord;
    seinfeldGame.showUnderlineForCorrectGuessedKey();
}

// letters that have been guessed for a certain word have to be disabled throughout that game
// these guessed words have to fill up an individual space on the screen and cannot be overwritten by the next guess
document.onkeyup = function (event) {
    // once key is pressed, record it and make it lowercase
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
    // seinfeldGame.playSeinfeldGame();
}