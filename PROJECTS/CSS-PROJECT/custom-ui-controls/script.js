document.querySelectorAll(".check").forEach((check) => {
    check.addEventListener("click", function () {
        this.classList.toggle("fill");
    });
});
const ON=document.querySelector(".outerLayer");
ON.addEventListener("click",()=>{
        ON.classList.toggle("on");
});
const dropdowncontainer=document.querySelector(".dropdowncontainer");
dropdowncontainer.addEventListener("click",()=>{
    dropdowncontainer.classList.toggle("down");
})