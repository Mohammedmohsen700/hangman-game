/*-------------------------------- Constants --------------------------------*/
const words = [
    {word: "crystal", hint: "A shiny, see-through rock that sparkles" },
    {word: "Cristiano Ronaldo", hint: " The Best Player In Football History ? " },
    {word: "penguin", hint: "A bird that cant fly but wears a tuxedo :) !" },
    {word: "YOYO", hint: "A circular object that returns to you after throwing it" } ,           
    {word: "ninja" , hint: "You ll never see one… and thats exactly the point" }
];



/*---------------------------- Variables (state) ----------------------------*/
let selectedWord = words [Math.floor(Math.random() * words.length)];
let secretWord = selectedWord.word;
let hint = selectedWord.hint
 




/*------------------------ Cached Element References ------------------------*/


const wordDisplayDiv = document.getElementById("wordDisplay");
const playerGuessInput = document.getElementById("playerGuess");
const submitBtn = document.getElementById("submitGuess");
const hintDisplay = document.getElementById("hint");

/*-------------------------------- Functions --------------------------------*/
function displaySecretWord () {
    let display = "";
   
    for (let i = 0 ; i < secretWord.length ; i++){
        if (secretWord [i] === " ") {
            display += " ";
        } else {
            display += "_";
        }
}
 wordDisplayDiv.textContent = display;
}
 displaySecretWord();


/*----------------------------- Event Listeners -----------------------------*/
submitBtn.addEventListener("click",function(){
    let guess = playerGuessInput.value;
    playerGuessInput.value = "";

})

hintDisplay.textContent = hint; 
// wordDisplayDiv.textContent = secretWord;

