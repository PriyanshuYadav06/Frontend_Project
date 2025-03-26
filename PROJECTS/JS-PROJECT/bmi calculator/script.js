let x=document.querySelector(".formm");
let y=document.getElementById("result-txt");
let w=document.querySelector(".weight");
let h=document.querySelector(".height");
function showResult(bmi){
    y.textContent=`YOUR BMI IS:${bmi}`;
    y.classList.remove("hide");
    console.log(bmi);
}
function calculateBmi(weight,height){
    height=height/100;
    let bmi=((weight/(height*height)).toFixed(2));
    showResult(bmi);
}
function resetTxt(){
    w.value="";
    h.value="";
}
x.addEventListener("submit",(event)=>{
    event.preventDefault();
    let weight=document.querySelector(".weight").value;
    let height=document.querySelector(".height").value;
    if (weight==="" || height==="" || weight<=0 || height<=0 || isNaN(weight) || isNaN(height)){
        alert("Please enter valid values");
        resetTxt();
        return;
    }else{
        calculateBmi(weight,height);
        resetTxt();
    }
   
})