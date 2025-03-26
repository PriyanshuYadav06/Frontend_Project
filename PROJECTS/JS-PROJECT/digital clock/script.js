const Hour=document.querySelector("#hour");
const Minute=document.querySelector("#minutes");
const Second=document.querySelector("#seconds");
const AmPm=document.querySelector("#ampm");


const Update=setInterval(() => {
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm=new Date().getHours()>=12?"PM":"AM";
    Hour.innerText=h;
    Minute.innerText=m;
    Second.innerText=s;
    AmPm.innerText = ampm;

},1000);