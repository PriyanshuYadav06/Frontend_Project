const body=document.querySelector(".body");
const circle=document.querySelector(".circle");
const check=document.querySelector("#check");
const range=document.querySelector('#range');
const checkcontainer=document.querySelector(".check-container");
body.addEventListener("mousemove",(e)=>{
    const circleRadius = circle.offsetWidth / 2;
    circle.style.left = (e.x - circleRadius) + "px";
    circle.style.top = (e.y - circleRadius) + "px";
})
check.addEventListener("change",(e)=>{
    if(check.checked){
        body.classList.add("true");
        checkcontainer.classList.add("true");
    }else{
        body.classList.remove("true");
        checkcontainer.classList.remove("true");
    }
})
range.addEventListener("input",()=>{
    console.log(range.value)
    circle.style.transition=`all 0.${100-(range.value)}s linear`
})