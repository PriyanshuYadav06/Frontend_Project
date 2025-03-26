const span=document.querySelector(".var");
const wordsList=["Devloper.","Coder.","GymFreak.","Student."];
let i=0;
let wordIndex=0; 
let reverseType=false;
let skippUpdate=0;
const IntervalId=setInterval(() => {
    if(skippUpdate){
        skippUpdate--;
        return;
    }
    if(!reverseType){
        skippUpdate=1;
        span.textContent+=wordsList[wordIndex][i];
        i++; 
    }else{
            span.textContent=span.textContent.slice(0,span.textContent.length-1);
    }
    if(span.textContent.length===0 && reverseType){
        reverseType=false;
        i=0;
       wordIndex = (wordIndex+1) % wordsList.length;

    }
    if(i===wordsList[wordIndex].length){

        reverseType=true;
    }
},200);
