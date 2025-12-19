/*-------------------------------- Constants --------------------------------*/
const words = [
    {word: "crystal", hint: "A shiny, see-through rock that sparkles" },
    {word: "cristiano ronaldo", hint: " The Best Player In Football History ? " },
    {word: "penguin", hint: "A bird that cant fly but wears a tuxedo :) !" },
    {word: "yoyo", hint: "A circular object that returns to you after throwing it" } ,           
    {word: "ninja" , hint: "You ll never see one… and thats exactly the point" },
    {word:  "apple", hint:"A popular fruit and tech company"},
    {word:"butterfly", hint:"An insect with colorful wings"},
    {word:"pyramid", hint:"A triangular structure built in ancient Egypt"}

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
const hangmanpics = document.querySelectorAll(".hangman-pic");
const message = document.getElementById("message");


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
    message.textContent = "";
    selectedWord = words [Math.floor(Math.random() * words.length)];
    secretWord = selectedWord.word;
    hint = selectedWord.hint;
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



function wrongGuess(){
    if(mistakes < hangmanpics.length - 1){
        hangmanpics[mistakes].style.display = 'none';
        mistakes++;
        hangmanpics[mistakes].style.display= 'block';
    } 

    }
    


 

/*----------------------------- Event Listeners -----------------------------*/
submitBtn.addEventListener("click",function(){
    if(gameOver) return;
    let guess = playerGuessInput.value.trim().toLowerCase();
    playerGuessInput.value = "";
    playerGuessInput.focus();
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
        
        
    displaySecretWord();    
    updateStatus();
        
        
       
        // lose condition
        if (lives <= 0){
        message.textContent="YOU LOST ! Correct Answer Is : " + secretWord ;
        gameOver = true;
        restartBtn.style.display = "inline-block";
        return;
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
 message.textContent= "YOU WON ! The Word Is: " + secretWord ;
    gameOver = true;
    restartBtn.style.display = "inline-block";
}
});
restartBtn.addEventListener("click", restartGame);

playerGuessInput.addEventListener("keydown", function(e){
    if(e.key === "Enter"){ 
        submitBtn.click();  
    }
});