const Start=document.querySelector(".start");
const Stop=document.querySelector(".stop");
const Reset=document.querySelector(".reset");
const Progress=document.querySelector(".progress");
const pro=document.querySelector(".pro");
flag=true;
let Progress_width=0;
let intervalId;

Start.addEventListener("click",()=>{
     Start.classList.add("on");
     Stop.classList.remove("on");
     Reset.classList.remove("on");
     if(flag){
        intervalId=setInterval(() => {
            if(Progress_width>100){
                flag=true;
                clearInterval(intervalId);
                pro.textContent="100%";
                return;
            }
            Progress_width+=1;
            Progress.style.width=Progress_width+"%";
            pro.textContent=Progress_width+"%";
         },100);
        flag=false;
     }
})
Stop.addEventListener("click",()=>{
    Start.classList.remove("on");
    Stop.classList.add("on");
    Reset.classList.remove("on");
    clearInterval(intervalId);
    flag=true;
})

Reset.addEventListener("click",()=>{
    Start.classList.remove("on");
    Stop.classList.remove("on");
    Reset.classList.add("on");
    Progress.style.width="0";
    Progress_width=0;
    flag=true;
    pro.textContent=Progress_width+"%";
    clearInterval(intervalId);

})