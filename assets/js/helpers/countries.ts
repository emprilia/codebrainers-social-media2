//ejsinkełejt

// {
//     id: "email",
//     isValid: false,
//     validate: validateEmail,
//   },

// DOM

interface CountriesApiResponeType {
  name: {
    common: string;
  };
  cca2: string;
  continents: string[];
}

interface CountryDataType {
  name: string;
  code: string;
  continents: string[];
}

const countrySelect = document.getElementById("choose-country");

async function getCountries(): Promise<CountryDataType[]> {
  try {
    //zaciaga liste z danego linku (poczekaj na ten "fecz")
    const response = await fetch("https://restcountries.com/v3.1/all");
    // nasze dane
    const data = await response.json();
    return data.map((country: CountriesApiResponeType) => ({
      name: country.name.common,
      code: country.cca2,
      continents: country.continents,
    }));
  } catch (error) {
    console.error("error: fetching countries", error);
    return [];
  }
}

export const populateCountrySelect = async () => {
  const countries = await getCountries();
  console.log(countries);

  const countriesEu = countries.filter((country) =>
    country.continents.includes("Europe")
  );

  const countriesOthers = countries.filter(
    (country) => !country.continents.includes("Europe")
  );

  const defaultOption = document.createElement("option");
  defaultOption.value = "choose-country";
  defaultOption.textContent = "Choose country";
  countrySelect?.appendChild(defaultOption);

  const europeLabel = document.createElement("optgroup");
  europeLabel.label = "Europe";
  countrySelect?.appendChild(europeLabel);

  countriesEu.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.code;
    option.textContent = country.name;
    countrySelect?.appendChild(option);
  });

  const othersLabel = document.createElement("optgroup");
  othersLabel.label = "Others";
  countrySelect?.appendChild(othersLabel);

  countriesOthers.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.code;
    option.textContent = country.name;
    countrySelect?.appendChild(option);
  });
};
