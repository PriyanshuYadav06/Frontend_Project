const countriesContainer=document.querySelector(".contries-container");
let allCountryData=[];
const SearchInput=document.querySelector(".search-container input");
// localStorage.setItem('sharedFlag', 'false');
const sun=document.querySelector(".sun");
const moon=document.querySelector(".moon");
fetch("https://restcountries.com/v3.1/all")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((country) => {
        allCountryData.push(country);
        const countryCard=document.createElement('a');
        countryCard.classList.add("country-card");
        countryCard.href = `/country.html?name=${country.name.common}`;
        const cardHTML=`
        <img src=${country.flags.svg} alt="flag" />
                  <div class="card-text">
                    <h3 class="card-title">${country.name.common}</h3>
                    <p><b>Population: </b>${(country.population).toLocaleString('en-US')}</p>
                    <p><b>Region: </b>${country.region}</p>
                    <p><b>Capital: </b>${country.capital[0]}</p>
                  </div>
        `
        countryCard.innerHTML=cardHTML;
        countriesContainer.append(countryCard);
    });
  });

const FilterByRegion=document.querySelector(".filter-by--region");
FilterByRegion.addEventListener("change",(e)=>{
  fetch(`https://restcountries.com/v3.1/region/${e.target.value}`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    countriesContainer.innerHTML="";
    data.forEach((country) => {
        const countryCard=document.createElement('a');
        countryCard.classList.add("country-card");
        countryCard.href = `/country.html?name=${country.name.common}`;
        const cardHTML=`
        <img src=${country.flags.svg} alt="flag" />
                  <div class="card-text">
                    <h3 class="card-title">${country.name.common}</h3>
                    <p><b>Population: </b>${(country.population).toLocaleString('en-US')}</p>
                    <p><b>Region: </b>${country.region}</p>
                    <p><b>Capital: </b>${country.capital[0]}</p>
                  </div>
        `
        countryCard.innerHTML=cardHTML;
        countriesContainer.append(countryCard);
    });
  });

})
SearchInput.addEventListener("input",(e)=>{
    console.log(e.target.value);
    console.log(allCountryData)
    let x=allCountryData.filter((country)=>country.name.common.toLowerCase().includes(e.target.value.toLowerCase()));
    countriesContainer.innerHTML="";
    x.forEach((country)=>{
      const countryCard=document.createElement('a');
      countryCard.classList.add("country-card");
      countryCard.href = `/country.html?name=${country.name.common}`;
      const cardHTML=`
      <img src=${country.flags.svg} alt="flag" />
                <div class="card-text">
                  <h3 class="card-title">${country.name.common}</h3>
                  <p><b>Population: </b>${(country.population).toLocaleString('en-US')}</p>
                  <p><b>Region: </b>${country.region}</p>
                  <p><b>Capital: </b>${country.capital[0]}</p>
                </div>
      `
      countryCard.innerHTML=cardHTML;
      countriesContainer.append(countryCard);
    })
});
const ThemeSwitcher=document.querySelector(".ThemeSwitcher");
if(localStorage.getItem('sharedFlag')=='true'){
  document.body.classList.add("dark");
  moon.style.display="block";
  sun.style.display="none";
}else{
  document.body.classList.remove("dark");
  moon.style.display="none";
  sun.style.display="block";
}

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
