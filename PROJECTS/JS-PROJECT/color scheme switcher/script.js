let box=document.querySelectorAll('.box');
let container=document.querySelector('.container');
let body=document.querySelector('.body');
function ChangeColor(ele){
    let color = getComputedStyle(ele).backgroundColor; 
    body.style.backgroundColor =color; 
}
box.forEach((ele)=>{
    ele.addEventListener('click',()=>{
        ChangeColor(ele);
    })
})