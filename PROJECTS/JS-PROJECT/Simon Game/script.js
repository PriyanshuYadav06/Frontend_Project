const btn=document.querySelector(".btn");
const btnn=document.querySelector(".btnn");
const boxes=document.querySelectorAll(".box");
const Level=document.querySelector(".Level");
const overCon=document.querySelector(".overCon");
let arr=[];
let currentCount = 0;
let acceptingInput = false;
let level=1;
function resetGame() {
    arr = [];
    currentCount = 0;
    acceptingInput = false;
    Level.innerText="Start the Game!";
    level=0;
    overCon.style.transform="scale(1)";
}
function RandomGen(){
    return  Math.floor(Math.random() * 4);
}
function checkInput(input) {
    if (input !== arr[currentCount]){
      resetGame();
    } else {
      currentCount++;
      if (currentCount === arr.length) {
        setTimeout(() => {
          level++;
          Level.innerText=`Level ${level}`
          ComputerTurn();
        }, 500);
      }
    }
}
function  ComputerTurn(){
    acceptingInput = false; 
    let next=RandomGen();
    arr.push(next);
    Blink(boxes[next]);
    currentCount = 0;
    setTimeout(() => {
        acceptingInput = true;
      }, 600);
}
function handleBoxClick(e) {
    if (!acceptingInput) return;
    let input;
    if (e.target.classList.contains("box1")) {
      input = 0;
    } else if (e.target.classList.contains("box2")) {
      input = 1;
    } else if (e.target.classList.contains("box3")) {
      input = 2;
    } else if (e.target.classList.contains("box4")) {
      input = 3;
    } 
    console.log("User input:", input, "Current count:", currentCount);
    checkInput(input);
}
boxes.forEach((box) => {
    box.addEventListener("click", handleBoxClick);
});
function Blink(box){
     box.style. transform="scale(1.2)"
     setTimeout(() => {
        box.style. transform="scale(1)"
     },500);
}
btn.addEventListener("click",()=>{
    ComputerTurn();
    Level.innerText=`Level ${level}`
})
btnn.addEventListener("click",()=>{
    overCon.style.display="none";
})

