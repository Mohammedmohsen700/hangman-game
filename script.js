/*-------------------------------- Constants --------------------------------*/
let words = ["crystal","Cristiano Ronaldo","penguin","YOYO","ninja"];




/*---------------------------- Variables (state) ----------------------------*/
let secretWord = words [Math.floor(Math.random() * words.length)];




/*------------------------ Cached Element References ------------------------*/
const wordDisplayDiv = document.getElementById("wordDisplay");
const playerGuessInput = document.getElementById("playerGuess");
const buttonsubmitGuess = document.getElementById("guessBtn");


/*-------------------------------- Functions --------------------------------*/
function displaySecretWord () {
    let displaySecretWord2 = "";
   
    for (let i = 0 ; i < secretWord.length ; i++){
        if (secretWord [i] === " ") {
            displaySecretWord2 += " ";
        } else {
            displaySecretWord2 += "_";
        }
}
 wordDisplayDiv.textContent = displaySecretWord2;
}
 displaySecretWord();



/*----------------------------- Event Listeners -----------------------------*/

