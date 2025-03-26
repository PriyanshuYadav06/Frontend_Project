const play=document.querySelector(".play");
const Result=document.querySelector(".result");
function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}
function updateDice(playerClass, diceValue) {
    const diceSection = document.querySelector(`.${playerClass}`);
    const dice = diceSection.children;
    for (let die of dice) {
        die.style.display = "none";
    }
    dice[diceValue - 1].style.display = "flex";
}
play.addEventListener("click",()=>{
    let playerOne=generateRandomNumber();
    const one=document.getElementsByClassName("one");
    let playerTwo=generateRandomNumber();
    if(playerOne==playerTwo){
        Result.innerText=`Draw`;
    }else if(playerOne>playerTwo){
        Result.innerText=`Player1 Wins!`
    }else{
         Result.innerText=`Player2 Wins!`
    }
    updateDice("one", playerOne);
     updateDice("two",playerTwo);
})

