const btns = document.querySelectorAll(".button");
const result = document.getElementsByClassName(
  "result"
) as HTMLCollectionOf<HTMLElement>;
let num: string[] = [];
let exp: string = "";
function Calculate(param: number[], opr: string[]): void {
  if (param.length === 0) return;
  let res = param[0];
  let opIdx = 0;
  for (let i = 1; i < param.length; i++) {
    const operator = opr[opIdx++];
    const value = param[i];
    switch (operator) {
      case "+":
        res += value;
        break;
      case "-":
        res -= value;
        break;
      case "x":
        res *= value;
        break;
      case "/":
        res /= value;
        break;
      default:
        break;
    }
  }
  if (result.length > 0) {
    result[0].textContent = res.toString();
  }
}
function ExpCalculate(): void {
  let param: number[] = [];
  let opr: string[] = [];
  let str: string = "";
  for (let i = 0; i < num.length; i++) {
    if (num[i] === "+" || num[i] === "-" || num[i] === "x" || num[i] === "/") {
      if (str !== "") {
        param.push(Number(str));
        str = "";
      }
      opr.push(num[i]);
    } else {
      str += num[i];
    }
  }
  if (str !== "") {
    param.push(Number(str));
  }
  Calculate(param, opr);
  num = [];
}
btns.forEach((btn, idx) => {
  btn.addEventListener("click", (e) => {
    let curr = String(btn.textContent);
    if (curr == "C") {
      exp = "";
      num = [];
      if (result.length > 0) {
        result[0].textContent = exp;
      }
    } else if (curr == "=") {
      exp = "";
      if (result.length > 0) {
        result[0].textContent = exp;
      }
      ExpCalculate();
    } else if (
      curr !== "+" &&
      curr !== "-" &&
      curr !== "x" &&
      curr !== "/" &&
      curr !== "."
    ) {
      exp += curr;
      if (result.length > 0) {
        result[0].textContent = exp;
      }
      num.push(curr);
    } else {
      exp += curr;
      result[0].textContent = exp;
      num.push(curr);
    }
  });
});
