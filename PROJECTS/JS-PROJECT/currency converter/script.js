const API_KEY = '4bd8b068f9247059665fab76'; // Replace with your actual API key
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest`;

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(".btn");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
    for (let currcode in countryList) {
        let option = document.createElement("option");
        option.value = currcode;
        option.innerText = currcode;
        select.append(option);
        if (currcode === "USD" && select.name === "from") {
            option.selected = "selected";
        }
        if (currcode === "INR" && select.name === "to") {
            option.selected = "selected";
        }
    }
}

dropdowns.forEach((element) => {
    element.addEventListener("change", () => {
        const currcode = element.value;
        const flag = element.previousElementSibling;
        const countrycode = countryList[currcode];
        const newSrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
        flag.src = newSrc;
    });
});

btn.addEventListener("click", async (event) => {
    event.preventDefault();
    let amount = document.querySelector(".amount input");
    let amountValue = amount.value;
    const URL = `${BASE_URL}/${fromCurr.value}`;
    const response = await fetch(URL);
    const data = await response.json();
    const rate = data.conversion_rates[toCurr.value];
    const finalAmount = rate * amountValue;
    msg.innerText = `${amountValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
});