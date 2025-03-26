const input=document.querySelector(".input");
const btn=document.querySelector(".icon");
const temp=document.querySelector(".temp");
const city=document.querySelector(".city");
const Humidity=document.querySelector(".Humidity");
const speed=document.querySelector(".speed");
const main=document.querySelector(".main");
const loading = document.querySelector(".loading");
const theme=document.querySelector(".theme");
let count=0;
let Theme=localStorage.getItem("Theme") || "linear-gradient(135deg, #4facfe, #00feba)";
document.body.style.background = Theme;
theme.addEventListener("click",()=>{
   if(count==0){
    document.body.style.background = "linear-gradient(135deg, #2c3e50, #4ca1af)";
    count++;
    localStorage.setItem("Theme", "linear-gradient(135deg, #2c3e50, #4ca1af)");
   }else if(count==1){
    document.body.style.background = "linear-gradient(135deg, #0f2027, #203a43, #2c5364)";
    count++;
    localStorage.setItem("Theme", "linear-gradient(135deg, #0f2027, #203a43, #2c5364)");
   }else if(count==2){
    document.body.style.background = "linear-gradient(135deg, #000428, #004e92)";
    count++;
    localStorage.setItem("Theme", "linear-gradient(135deg, #000428, #004e92)");
   }else if(count==3){
    document.body.style.background = "linear-gradient(135deg, #2c3e50, #4ca1af)";
    count++;
    localStorage.setItem("Theme", "linear-gradient(135deg, #2c3e50, #4ca1af)");
   }else{
    document.body.style.background = "linear-gradient(135deg, #4facfe, #00feba)";
    count=0;
    localStorage.setItem("Theme", "linear-gradient(135deg, #4facfe, #00feba)");
   }

})
input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        btn.click();
    }
});
input.addEventListener("input",(e)=>{
    if(e.target.value==""){
        main.style.display="none"
    }
})
btn.addEventListener("click",()=>{
    loading.style.display = "block";
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${input.value}&appid=46d47581a51a79782741111953e700af`)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        if (data.cod !== 200) {
            throw new Error(data.message);
        }else{
            console.log(data);
            temp.innerText=`${data.main.temp}°C`;
            city.innerText=`${data.name}`;
            speed.innerText=`${data.wind.speed}km/h`;
            Humidity.innerText=`${data.main.humidity}%`;
            main.style.display="flex";

        }
    })
    .catch((err)=>{
        alert(err);
    })
    .finally(() => {
        loading.style.display = "none";
    });
})