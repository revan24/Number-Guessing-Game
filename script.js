// create secrete number
var secretNum = 6;
// ask user to guess
var stringGuess = prompt("Guess a number between 1 and 10");
var guess = Number(stringGuess);
//check guess
if(guess > secretNum){
    alert("Too high, try again");
} else if (guess < secretNum){
    alert("Too low, try again");
} else {
    alert("You guessed correct!");
}