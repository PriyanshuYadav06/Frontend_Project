h4=document.querySelector("h4");
add=document.querySelector("#add");
remove=document.querySelector("#remove")
add.addEventListener("click",()=>{
    h4.innerText="Friends";
    add.style.backgroundColor="green";
    remove.style.backgroundColor=" #007bff";

})
remove.addEventListener("click",()=>{
    h4.innerText="Stranger";
    remove.style.backgroundColor="red";
    add.style.backgroundColor=" #007bff";
})