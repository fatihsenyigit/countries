document.addEventListener("DOMContentLoaded", () => {
  getCountries();
});

const dropDown = document.querySelector(".dropdown-menu");

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

const getCountriesById = async (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

getCountriesById(112);



const options = (data) => {
  data.forEach((e) => {
    dropDown.innerHTML += `<li><a class="dropdown-item" href="#">${e.name.common}</a></li>`;
  });
};
