/*-------------------------------- Constants --------------------------------*/
const words = [
    {word: "crystal", hint: "A shiny, see-through rock that sparkles" },
    {word: "cristiano ronaldo", hint: " The Best Player In Football History ? " },
    {word: "penguin", hint: "A bird that cant fly but wears a tuxedo :) !" },
    {word: "yoyo", hint: "A circular object that returns to you after throwing it" } ,           
    {word: "ninja" , hint: "You ll never see one… and thats exactly the point" }
];



/*---------------------------- Variables (state) ----------------------------*/
let selectedWord = words [Math.floor(Math.random() * words.length)];
let secretWord = selectedWord.word;
let hint = selectedWord.hint
let correctGuesses = [];
let wrongGuesses = [];
let maxLives = 6;
let lives = maxLives
let gameOver = false;
let mistakes = 0;
/*------------------------ Cached Element References ------------------------*/


const wordDisplayDiv = document.getElementById("wordDisplay");
const playerGuessInput = document.getElementById("playerGuess");
const submitBtn = document.getElementById("submitGuess");
const hintDisplay = document.getElementById("hint");
const restartBtn = document.getElementById("restartBtn")
const livesDisplay = document.getElementById("livesDisplay");
const wrongGuessesDisplay = document.getElementById("wrongGuessesDisplay");
const gameMessage = document.getElementById("message");
const hangmanpics = document.querySelectorAll(".hangman-pic");



/*-------------------------------- Functions --------------------------------*/
function displaySecretWord () {
    let display = "";
   
    for (let i = 0 ; i < secretWord.length ; i++){
        let letter = secretWord[i];
        if (letter === " "){
            display += " ";
        } else if (correctGuesses.includes(letter.toLowerCase())){
            display += letter;
        } else {
            display += "_"; 
        }
}
 wordDisplayDiv.textContent = display;
 hintDisplay.textContent = hint; 
}
 displaySecretWord();

 function restartGame(){
    correctGuesses = [];
    wrongGuesses = [];
    lives = maxLives;
    gameOver = false;
    selectedWord = words [Math.floor(Math.random() * words.length)];
    secretWord = selectedWord.word;
    hint = selectedWord.hint;
    showMessage = ("");
    restartBtn.style.display = "none";
    mistakes = 0;
    for(let i = 0; i < hangmanpics.length; i++){
        hangmanpics[i].style.display = "none";
    }
    hangmanpics[0].style.display="block";
    
    displaySecretWord();
    updateStatus();
 }
  function updateStatus() {
    livesDisplay.textContent = "Lives:" + lives;
    wrongGuessesDisplay.textContent = "Wrong Guesses :" + wrongGuesses.join(", ");
  }
  updateStatus();

//   hangmanpics

function wrongGuess(){
    if(mistakes < hangmanpics.length - 1){
        hangmanpics[mistakes].style.display = 'none';
        mistakes++;
        hangmanpics[mistakes].style.display= 'block';
    } else {
        alert("Game Over!");

    }
    }


 

/*----------------------------- Event Listeners -----------------------------*/
submitBtn.addEventListener("click",function(){
    if(gameOver) return;
    let guess = playerGuessInput.value.trim().toLowerCase();
    playerGuessInput.value = "";
if (!guess) return;

for(let i = 0 ; i < guess.length; i++){
    let letter = guess[i];
    
        if (letter !== " " && !correctGuesses.includes(letter)&& !wrongGuesses.includes(letter)){
            if(secretWord.toLowerCase().includes(letter)){
                correctGuesses.push(letter);
            } else {
                wrongGuesses.push(letter);
                lives --;
                wrongGuess();
            }
            }
        }
        function showMessage(text) {
             gameMessage.textContent = text;
        }
    displaySecretWord();    
    updateStatus();
        
        
       
        // lose condition
        if (lives <= 0){
        showMessage("YOU LOST !, Correct Answer Is : " + secretWord );
        gameOver = true;
        restartBtn.style.display = "inline-block";
    }   
    
    // win condition
    let hasWon = true;
    for(let i = 0; i < secretWord.length; i ++){
        let letter = secretWord[i].toLowerCase();
        if (letter !== " " && !correctGuesses.includes(letter)){
            hasWon = false;
            break;
        }
   }
if (hasWon) {
    showMessage("YOU WON ! The Word Is: " + secretWord );
    gameOver = true;
    restartBtn.style.display = "inline-block";
}
});
restartBtn.addEventListener("click", restartGame);


