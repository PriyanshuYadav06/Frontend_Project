let formm=document.querySelector(".form");
let previousGuesses=[];
let updateGuesses = document.querySelector(".guesses");
let lastGuess = document.querySelector(".lastResult");
let flag=true;
function GameOver(){
    alert("Game Over! You have used all your chances");
    previousGuesses=[];
    lastGuess.innerHTML="10";
    updateGuesses.innerHTML="";
    flag=true;
}
function GenerateRandomNumber(){
     return Math.floor(Math.random() * 100) + 1;
}
function checkRandomNumber(num){
    if(flag){
        randomNumber=GenerateRandomNumber();
        flag=false;
        console.log("hello");
    }
    console.log(randomNumber);
    if(num==randomNumber){
        alert("Congratulations! You have guessed the correct number");
        previousGuesses=[];
        lastGuess.innerHTML="10";
        updateGuesses.innerHTML="";
        randomNumber=GenerateRandomNumber();
        flag=true;
     } else{
        updateGuesses.innerHTML=updateGuesses.innerHTML+previousGuesses[previousGuesses.length-1]+" ";
        lastGuess.innerHTML=parseInt(lastGuess.innerHTML)-1;
        if(lastGuess.innerHTML==="0"){
           GameOver();
        }else if(randomNumber>num){
            alert("Your guess is too low");
        }else{
            alert("Your guess is too high");
        }
    }
}
function resetTxt(){
    let x=document.getElementById("guessField").value="";

}
formm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let num=parseInt(document.getElementById("guessField").value);
    previousGuesses.push(num);
    if(num>100 || num<1 || isNaN(num)){
        alert("Please enter a number between 1 and 100");
        resetTxt();
        return;
    }
    checkRandomNumber(num);
    resetTxt();
})