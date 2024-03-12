document.addEventListener("DOMContentLoaded", () => {
  getCountries();
});

const dropDown = document.getElementById("countries-dropdown");
console.log(dropDown)

const selectedCountry = document.getElementById('selectedCountry')





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
  const countries = data.map((e) => {
    const option = new Option(e.name.common, e.ccn3);
    dropDown.add(option);

  });

   

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

getCountriesById();




