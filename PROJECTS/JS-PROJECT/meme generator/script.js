const Click=document.querySelector(".Click");
const img=document.querySelector(".img");
const Author=document.querySelector(".author");
const title=document.querySelector(".title");
const container=document.querySelector(".container");
window.onload = function() {
   Click.click();
};
Click.addEventListener("click",()=>{
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
        container.innerHTML=`
                             <div class="main">
                            <h1 class="title">${data.title}</h1>
                            <div class="img-container"><img class="img" src=${data.url} alt=""></div>
                            <p>Meme by: <span class="author">${data.author}</span></p>`
    })
})