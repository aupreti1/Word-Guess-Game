var words = ["jim", "pam", "dwight", "michael", "angela", "sprinkles", "andy", 
"narddog", "bigtuna", "kelly", "kevin", "oscar", "ryan", "erin", "phyllis", "stanley", 
"toby", "meredith", "creed", "darryl", "dundermifflin", "paper", "scranton", "schrutefarms"]

var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess = [];

var wins = 0;
var losses = 0;
var guessesRemaining = 9;

function Game() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    lettersOfWord = randomWord.split("");
    blanks = lettersOfWord.length;

    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

    console.log(randomWord);
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}


var office = document.getElementById("office");



function aud() {
    if (randomWord === words[0]) {
        office.play();
        document.getElementById("image").src = "./assets/images/office1.gif";
    }
    
    else if (randomWord === words[1]) {
        office.play();
        document.getElementById("image").src = "./assets/images/office2.gif";
    }
    
    else if (randomWord === words[2]) {
        office.play();
        document.getElementById("image").src = "./assets/images/office3.gif";
    }
    
    else if (randomWord === words[3]) {
        office.play();
        document.getElementById("image").src = "./assets/images/office4.gif";
    }
    
    else if (randomWord === words[4]) {
        office.play();
        document.getElementById("image").src = "./assets/images/office5.gif";
    }
    
    else if (randomWord === words[5]) {
        office.play();
        document.getElementById("image").src = "./assets/images/office6.gif";
    }
    
    else if (randomWord === words[6]) {
        office.play();
        document.getElementById("image").src = "./assets/images/office7.gif";
    }
    else if (randomWord === words[7]) {
        office.play();
        document.getElementById("image").src = "./assets/images/office1.gif";
    }
    else if (randomWord === words[8]) {
        office.play();
        document.getElementById("image").src = "./assets/images/office2.gif";
    }
    else if (randomWord === words[9]) {
        office.play();
        document.getElementById("image").src = "./assets/images/.gif";
    }
    else if (randomWord === words[10]) {
        office.play();
        document.getElementById("image").src = "./assets/images/office4.gif";
    }
    else if (randomWord === words[11]) {
        office.play();
        document.getElementById("image").src = "./assets/images/office5.gif";
    }
    else if (randomWord === words[12]) {
        office.play();
        document.getElementById("image").src = "./assets/images/office6.gif";
    }
    else if (randomWord === words[13]) {
        office.play();
        document.getElementById("image").src = "./assets/images/office7.gif";
    }
    else if (randomWord === words[14]) {
        office.play();
        document.getElementById("image").src = "./assets/images/office1.gif";
    }
    else if (randomWord === words[15]) {
        office.play();
        document.getElementById("image").src = "./assets/images/office2.gif";
    }
    else if (randomWord === words[16]) {
        office.play();
        document.getElementById("image").src = "./assets/images/office3.gif";
    }
    else if (randomWord === words[17]) {
        office.play();
        document.getElementById("image").src = "./assets/images/office4.gif";
    }
    else if (randomWord === words[18]) {
        office.play();
        document.getElementById("image").src = "./assets/images/office5.gif";
    }
    else if (randomWord === words[19]) {
        office.play();
        document.getElementById("image").src = "./assets/images/office6.gif";
    }
    else if (randomWord === words[20]) {
        office.play();
        document.getElementById("image").src = "./assets/images/office7.gif";
    }
    else if (randomWord === words[21]) {
        office.play();
        document.getElementById("image").src = "./assets/images/office1.gif";
    }
    else if (randomWord === words[22]) {
        office.play();
        document.getElementById("image").src = "./assets/images/office2.gif";
    }
    else if (randomWord === words[23]) {
        office.play();
        document.getElementById("image").src = "./assets/images/office3.gif";
    }
    else if (randomWord === words[24]) {
        office.play();
        document.getElementById("image").src = "./assets/images/office4.gif";
    }
};

function reset() {
    guessesRemaining = 9;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game()
}


function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterInWord = true;
        }
    }
    
    if (letterInWord) {
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}

function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        aud()
        reset()
        document.getElementById("winstracker").innerHTML = " " + wins;

    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/lose.gif"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}


Game()
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    console.log(guesses);

    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}

