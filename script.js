document.addEventListener("DOMContentLoaded", () => {
  getCountries();
});

const dropDown = document.querySelector(".dropdown-menu");
const countryDetails = document.querySelector(".country-details");

const getCountries = async () => {
  const url = "https://restcountries.com/v3/all";
  try {
    const res = await fetch(url);
    const data = await res.json();
    options(data);
  } catch (err) {
    console.log(err);
  }
};

const options = (data) => {
  data.forEach((e) => {
    dropDown.innerHTML += `<li><a class="dropdown-item" href="#" id='${e.ccn3}'>${e.name.common}</a></li>`;
  });
};

const getCountriesById = async (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    getCountryDetails(data);
  } catch (err) {
    console.log(err);
  }
};


const getCountryDetails = (data) => {
  data.forEach((e) => {
    countryDetails.innerHTML = `
    <div class="card m-auto " style="width: 18rem">
        <img src="${e.flags.png}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${e.name.common}</h5>
          <table class='table'>
          <tbody>
          <tr>
          <th>Capital:</th>
          <td>${e.capital}</td>
          </tr>
          <tr>
          <th>Region:</th>
          <td>${e.subregion}</td>
          </tr>
          <tr>
          <th>Languages:</th>
          <td>${e.languages}</td>
          </tr>
          <tr>
          <th>Borders:</th>
          <td>${e.borders}</td>
          </tr>
          <tr>
          <th>Population:</th>
          <td>${e.population}</td>
          </tr>
          <tr>
          <th>Currience:</th>
          <td>${e.currencies}</td>
          </tr>
          </tbody>
          </table>
          
          
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    `;
  });
};

dropDown.addEventListener('click', (e)=>{
  countryId = e.target.id
  getCountriesById(countryId);
})