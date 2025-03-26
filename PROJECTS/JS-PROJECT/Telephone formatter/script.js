const Input=document.querySelector(".unitInput");
let formattedString = "";
function formater(str){
    str=str.replace(/[^0-9]/g, "");
    if(str.length>=4){
        formattedString = `+(${str.slice(0, 3)}) - ${str.slice(3)}`;
    }
    else{
        formattedString=str;
    }
    Input.value = formattedString;
}
Input.addEventListener("input",(e)=>{
    formater(e.target.value);
})
