const Btn=document.querySelector(".Btn");
const Horizontal=document.querySelector(".Horizontal-position");
const Vertical=document.querySelector(".Vertical-position");
const ToastType=document.querySelector(".Status");
const toastContainer=document.querySelector(".toast-container");
const toastmessage=document.querySelector(".toast-message");
const duration=document.querySelector(".duration");
Btn.addEventListener("click",()=>{
    const newToast=document.createElement("div");
    newToast.classList.add("toast");
    newToast.innerText=`${toastmessage.value}`
    const crossIcon=document.createElement("span");
    crossIcon.innerText=" ✕";
    newToast.append(crossIcon);
    if(ToastType.value==="Success"){
        newToast.classList.add("success");
    }else if(ToastType.value==="Error"){
        newToast.classList.add("error");
    }else if(ToastType.value=="Warning"){
        newToast.classList.add("warning");
    }else if(ToastType.value==="Info"){
        newToast.classList.add("info");
    }
    toastContainer.append(newToast);
    crossIcon.addEventListener("click",()=>{
        newToast.remove();
    })
        if(Horizontal.value=="Right"){
            toastContainer.classList.add("right");
        }else{
            toastContainer.classList.remove("right");
        }
        if(Vertical.value=="Bottom"){
            console.log("hello")
            toastContainer.classList.add("bottom");
        }else{
            toastContainer.classList.remove("bottom")
        }
        setTimeout(() => {
            newToast.remove();
        },`${duration.value}00`);
})