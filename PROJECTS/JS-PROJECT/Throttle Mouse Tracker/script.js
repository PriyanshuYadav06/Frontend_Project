const Center=document.querySelector(".center");
function throttleFunction(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
}
Center.addEventListener("mousemove",throttleFunction((e)=>{
    var div=document.createElement("div");
    div.classList.add("imagediv");
    div.style.left=e.clientX+"px";
    div.style.top=e.clientY+"px";
    var img=document.createElement("img");
    img.setAttribute("src","https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    div.appendChild(img);
    document.body.appendChild(div);
    setTimeout(() => {
        div.remove();
    },1000);

},400)
);