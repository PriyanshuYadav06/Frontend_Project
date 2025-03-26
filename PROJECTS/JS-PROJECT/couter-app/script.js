const Count=document.querySelector(".count");
const Minus_btn=document.querySelector(".minus-btn");
const Plus_btn=document.querySelector(".plus-btn");
const Reset_btn=document.querySelector(".reset-btn");
const Input=document.querySelector(".changeBy");
let sum=0;
let IncrementBy=1;
Input.addEventListener("input",(e)=>{
    IncrementBy=parseInt(e.target.value) || 1;
})
function Plus(x){
    sum+=x;
    Count.textContent=sum;
}
function Minus(x){
    sum-=x;
    Count.textContent=sum;
}
Plus_btn.addEventListener("click",()=>{
    Plus(IncrementBy);
})
Minus_btn.addEventListener("click",()=>{
    Minus(IncrementBy);
})
Reset_btn.addEventListener("click",()=>{
    Count.innerText="0";
    IncrementBy=1;
    sum=0;
    Input.value=1;
})
