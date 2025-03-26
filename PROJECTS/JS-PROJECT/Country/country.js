const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const name = params.get('name');
let languages="";
let currencies="";
let  subRegion ="";
let nativeName="";
console.log(name);
let Container=document.querySelector(".container");
const sun=document.querySelector(".sun");
const moon=document.querySelector(".moon");

fetch("https://restcountries.com/v3.1/all")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((country) => {
        if(country.name.common.toLowerCase() === name?.toLowerCase()){
            if (country.languages) {
                languages = Object.values(country.languages).join(', ');
              }
              if (country.currencies) {
                currencies = Object.values(country.currencies)
                  .map((currency) => currency.name)
                  .join(', ')
              }
              if (country.subregion) {
                subRegion = country.subregion;
              }
              if (country.name.nativeName) {
                nativeName = Object.values(country.name.nativeName)[0].common
              } else {
              nativeName = country.name.common
              }  

            const ContainerHTML=`<div class="left">
          <img src=${country.flags.svg} alt="flag" />
        </div>
        <div class="right">
          <div class="information">
            <h2 class="country-name">${country.name.common}</h2>
            <div class="text">
              <div class="text1">
                <p><b>Native Name:</b>${nativeName}</p>
                <p><b>Population:</b>${(country.population).toLocaleString('en-US')}</p>
                <p><b>Region:</b>${country.region}</p>
                <p><b>Sub Region:</b>${ subRegion }</p>
                <p><b>Capital:</b>${country.capital[0]}</p>
              </div>
              <div class="text2">
                <p><b>Top Level Domain:</b>${ country.tld.join(', ')}</p>
                <p><b>Currencies:</b>${currencies}</p>
                <p><b>Languages:</b>${languages}</p>
              </div>
            </div>
            <div class="BordersCountry"><b>Borders Countries:</b></div>
          </div>
        </div>`;
      
        Container.innerHTML = ContainerHTML;
        const BordersCountryy = document.querySelector(".BordersCountry");
        if(country.borders){
          country.borders.forEach((border)=>{
             fetch(`https://restcountries.com/v3.1/alpha/${border}`)
             .then((res)=>{
              return res.json();
             }).then(([borderCountry])=>{
                console.log(borderCountry);
                const borderCountryTag=document.createElement("a");
                borderCountryTag.innerText=borderCountry.name.common;
                borderCountryTag.href=`/country.html?name=${borderCountry.name.common}`; 
                console.log(borderCountryTag)
                BordersCountryy.append(borderCountryTag);
             })
          })
        }
        }
    });
  });
const Back=document.querySelector(".back");
Back.addEventListener("click",()=>{
    window.location.href = "/index.html";
})
if(localStorage.getItem('sharedFlag')=='true'){
  document.body.classList.add("dark");
    moon.style.display="block";
    sun.style.display="none";
}else{
  document.body.classList.remove("dark");
  moon.style.display="none";
  sun.style.display="block";
}


const ThemeSwitcher=document.querySelector(".ThemeSwitcher");
ThemeSwitcher.addEventListener("click",()=>{
  if(localStorage.getItem('sharedFlag')=='false'){
    localStorage.setItem('sharedFlag', 'true');
    document.body.classList.add("dark");
    moon.style.display="block";
    sun.style.display="none";
  }else{
    localStorage.setItem('sharedFlag', 'false');
    document.body.classList.remove("dark");
    moon.style.display="none";
    sun.style.display="block";
  }
})