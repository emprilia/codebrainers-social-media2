//ejsinkełejt


// {
//     id: "email",
//     isValid: false,
//     validate: validateEmail,
//   },


// DOM
const countrySelect = document.getElementById("choose-country");

async function getCountries() {
    try {
        //zaciaga liste z danego linku (poczekaj na ten "fecz")
        const response = await fetch("https://restcountries.com/v3.1/all");
        // nasze dane
        const data = await response.json();
        console.log(data);
        return data.map(country => ({
            name: country.name.common,
            code: country.cca2
        }));
    } catch (error) {
        console.error("error: fetching countries", error);
    }
};

export const populateCountrySelect = async () => {
    const countries = await getCountries();
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.code;
        option.textContent = country.name;
        countrySelect?.appendChild(option);
    });
};