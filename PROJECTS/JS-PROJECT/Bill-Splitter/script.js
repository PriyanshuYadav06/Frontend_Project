const Bill = document.querySelector(".BillInput");
const span = document.querySelectorAll(".percent");
const custom = document.querySelector(".custom");
const People = document.querySelector(".People");
const Gbtn = document.querySelector(".gbtn");
const TipAmount = document.querySelector(".TipAmount");
const TotalAmount = document.querySelector(".TotalAmount");
const EachPersonBill = document.querySelector(".EachPersonBill");
const ResetBtn = document.querySelector(".ResetBtn");
function RemoveSelect() {
  for (let i = 0; i < span.length; i++) {
    span[i].classList.remove("select");
  }
}
Bill.addEventListener("input", (e) => {
  if (Bill.value != "") {
    span.forEach((ele) => {
      ele.classList.add("update");
      custom.style.cursor = "pointer";
      People.style.cursor = "pointer";
    });
  } else {
    span.forEach((ele) => {
      ele.classList.remove("update");
      RemoveSelect();
      custom.style.cursor = "not-allowed";
      People.style.cursor = "not-allowed";
    });
  }
});
span.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (Bill.value != "") {
      RemoveSelect();
      ele.classList.add("select");
    }
  });
});
custom.addEventListener("input", (e) => {
  if (custom.value != "") {
    RemoveSelect();
  }
});
People.addEventListener("input", (e) => {
  if (People.value != "") {
    Gbtn.classList.add("update");
    Gbtn.style.color = "white";
  } else {
    Gbtn.classList.remove("update");
    Gbtn.style.color = "";
  }
});

Gbtn.addEventListener("click", (e) => {
  let BillAmount = Bill.value;
  let NumberOfPeo = People.value;
  let Tip = "";
  if (custom.value != "") {
    Tip = custom.value;
  } else {
    for (let i = 0; i < span.length; i++) {
      if (span[i].classList.contains("select")) {
        Tip = span[i].textContent;
        break;
      }
    }
  }
  Tip = parseFloat(Tip);
  BillAmount = parseFloat(BillAmount);
  NumberOfPeo = parseInt(NumberOfPeo);
  if(NumberOfPeo==0){
    alert("Please enter the number of people");
    return;
  }
  if(Tip<0 || BillAmount<0 || NumberOfPeo<0){
    alert("Please enter valid values");
    return;
  }
  TipAmount.innerHTML = BillAmount * (Tip / 100);
  TotalAmount.innerHTML = BillAmount + BillAmount * (Tip / 100);
  EachPersonBill.innerHTML =
    (BillAmount + BillAmount * (Tip / 100)) / NumberOfPeo;
  ResetBtn.classList.remove("update2");
  ResetBtn.addEventListener("click", () => {
    window.location.reload();
  });
});
