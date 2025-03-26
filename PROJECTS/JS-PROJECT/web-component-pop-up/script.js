const popup=document.querySelector(".popup-container");
const button=document.querySelector("button");
const close_icon=document.querySelector(".close-icon");
const overlay=document.querySelector(".overlay");
button.addEventListener("click",()=>{
    popup.classList.add("popup-open");
})
close_icon.addEventListener("click",()=>{
    popup.classList.remove("popup-open");
})
overlay.addEventListener("click",()=>{
    popup.classList.remove("popup-open");
})