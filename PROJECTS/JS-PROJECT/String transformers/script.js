Input=document.querySelector(".inputContainer");
const LowerCase=document.querySelector(".div1");
const UpperCase=document.querySelector(".div2");
const CamelCase=document.querySelector(".div3");
const PascalCase=document.querySelector(".div4");
const SnakeCase=document.querySelector(".div5");
const KebabCase=document.querySelector(".div6");
const Trim=document.querySelector(".div7");
let flagc=false;
function isUpperCase(char) {
    return char === char.toUpperCase();
}
function Camel(str){
    if(str == "") return "";
    let result="";
    if(isUpperCase(str[0])){
        result+=str[0].toLowerCase();
        flagc=true;
    }
    for(let i=0;i<str.length;i++){
        if(flagc){
            flagc=false;
            continue;
        }
        if(str[i]==" "){
            result[i]+="";
            if(!isUpperCase(str[i+1])){
                result+=str[i+1].toUpperCase();
                i++;
                continue;
            }
        }else{
            result+=str[i];
        }
    }
    return result;
}

let flagp=false;
function Pascal(str){
    if(str == "") return "";
    let result="";
    if(!isUpperCase(str[0])){
        result+=str[0].toUpperCase();
        flagp=true;
    }
    for(let i=0;i<str.length;i++){
        if(flagp){
            flagp=false;
            continue;
        }
        if(str[i]==" "){
            result[i]+="";
            if(!isUpperCase(str[i+1])){
                result+=str[i+1].toUpperCase();
                i++;
                continue;
            }
        }else{
            result+=str[i];
        }
    }
    return result;
}
Input.addEventListener("input",(e)=>{
    LowerCase.innerText=(e.target.value.trim()).toLowerCase();
    UpperCase.innerText=(e.target.value.trim()).toUpperCase();
    SnakeCase.innerText=(e.target.value.trim()).replaceAll(" ","_");
    KebabCase.innerText=(e.target.value.trim()).replaceAll(" ","-");
    Trim.innerText=(e.target.value.trim()).replaceAll(" ","");
    CamelCase.innerText=Camel(e.target.value.trim());
    PascalCase.innerText=Pascal(e.target.value.trim());
});