const CheckBoxOne=document.querySelector(".checkbox_one");
const CheckBoxTwo=document.querySelector(".checkbox_two");
const Container=document.querySelector(".box");
const DarkSec=document.querySelector(".section2");
const DarkSecc=document.querySelector(".section1");
const Label=document.querySelector(".label2");
const spann=document.querySelector(".span2");
flagC = localStorage.getItem("flagC") === "true";
flagB = localStorage.getItem("flagB") === "true";
if(flagC){
    DarkSec.classList.add("darkMode");
}if(flagB){
    document.body.style.backgroundColor = "black";
    DarkSecc.classList.add("DarkMode");
    DarkSec.classList.add("DARK");
}
CheckBoxTwo.checked = flagC;
CheckBoxOne.checked = flagB;
CheckBoxTwo.addEventListener("change",()=>{
        flagC = CheckBoxTwo.checked; 
        DarkSec.classList.toggle("darkMode");
        localStorage.setItem("flagC", flagC.toString());
})
CheckBoxOne.addEventListener("change",()=>{
        flagB = CheckBoxOne.checked;
        document.body.style.backgroundColor =  flagB? "black" : "white";
        DarkSecc.classList.toggle("DarkMode");
        DarkSec.classList.toggle("DARK");
        localStorage.setItem("flagB", flagB.toString());

})
