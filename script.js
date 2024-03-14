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

// const options = (data) => {
//   data.forEach((e) => {
//     dropDown.innerHTML += `<li><a class="dropdown-item" href="#" id='${e.ccn3}'>${e.name.common}</a></li>`;
//   });
// };


const options = (data) => {
  countryArray = []
  data.forEach((e)=>{
    countryArray.push(
      `<li><a class="dropdown-item" href="#" id='${e.ccn3}'>${e.name.common}</a></li>`,
    );
  })
  console.log(countryArray.sort())
  countryArray.sort().forEach((e)=>{
    dropDown.innerHTML += e
  })
}




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
    const currencyArray = Object.values(e.currencies);
    const languagesArray = Object.values(e.languages);
    countryDetails.innerHTML = `
    <div class="card m-auto border-0" style="width: 32rem">
        <img src="${
          e.flags.png
        }" class="card-img-top m-auto mt-3" style="width: 18rem" alt="..." />
        <div class="card-body overflow-auto m-auto" style="width: 28rem" >
          <h5 class="card-title mb-3">${e.name.common}</h5>
          <table class='table  table-striped'>
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
          <td>${languagesArray}</td>
          </tr>
          <tr>
          <th>Borders:</th>
          <td>${e.borders || "None"}</td>
          </tr>
          <tr>
          <th>Population:</th>
          <td>${e.population}</td>
          </tr>
          <tr>
          <th>Currience:</th>
          <td>${currencyArray[0].name}</td>
          </tr>
          </tbody>
          </table>
          
        </div>
      </div>
    `;
  });
};

dropDown.addEventListener("click", (e) => {
  countryId = e.target.id;
  getCountriesById(countryId);
});


