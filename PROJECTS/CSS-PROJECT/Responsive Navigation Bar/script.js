const Links=document.querySelector(".name-links");
const hamburger=document.querySelector(".hamburger");
const hamburgeri=document.querySelector(".hamburgeri");
const cross=document.querySelector(".cross");
hamburgeri.addEventListener("click",()=>{
        Links.classList.add("open");
        hamburger.classList.add("open");
})
cross.addEventListener("click",()=>{
    hamburger.classList.remove("open");
    Links.classList.remove("open");
   
})
document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !Links.contains(e.target)) {
        hamburger.classList.remove("open");
        Links.classList.remove("open");
    }
});