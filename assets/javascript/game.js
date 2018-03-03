
var wordOptions = ["ferrari", "daewoo", "honda", "lambo", "chevy", "toyota", "peugeot", "tata", "maybach", "plymouth"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

function startGame () {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersInWord = selectedWord.split("");
	numBlanks = lettersInWord.length;

	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];

	for (var i = 0; i < numBlanks; i++) {
		blanksAndSuccesses.push("_");
}

	document.getElementById("wordToGuess").innerHTML=blanksAndSuccesses.join(" ");
	document.getElementById("numGuesses").innerHTML=guessesLeft;
	document.getElementById("winCounter").innerHTML=winCount;
	document.getElementById("lossCounter").innerHTML=lossCount;
}

function checkLetter(letter) {
	var isLetterInWord = false;

	for (var i = 0; i < numBlanks; i++) {
		if(selectedWord[i] == letter) {
			isLetterInWord = true;
	}
}

	if(isLetterInWord) {
		for (var i = 0; i < numLetters; i++) {
			if(selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
        }
	}
}

	else {
		wrongLetters.push(letter);
        numGuesses --
    }
}

    function roundComplete() {
        console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left " + numGuesses);
    }

    document.getElementById("numGuesses").innerHTML=guessesLeft;
    document.getElementById("wordToGuess").innerHTML=blanksAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML=wrongLetters.join(" ");

    if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
        winCount++
        alert("Congtratulations! You won!!!");
    }

    document.getElementById("winCounter").innerHTML = winCount;
    startGame();

        else if (guessesLeft == 0) {
            lossCount++;
            alert("You lost!");

    document.getElementById("lossCounter").innerHTML = lossCount;
    startGame();
}

startGame();

//Could not get any of my keyclicks to register.  Not sure what I'm missing. :-(
document.onkeyup=function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetter(letterGuessed);
	roundComplete();
}