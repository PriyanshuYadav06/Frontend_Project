const hamburgerCon=document.querySelector(".hamburger-menu-container");
const header=document.querySelector(".header-content");
const closeIcon=document.querySelector(".close-icon");
hamburgerCon.addEventListener("click",()=>{
    header.classList.add("menu-open");
})
closeIcon.addEventListener("click",()=>{
    header.classList.remove("menu-open");
})