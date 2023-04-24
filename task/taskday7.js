fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Problem 1
    const asianCountries = data.filter(
      (country) => country.region === "Asiacontinent"
    );
    console.log("Asian countries:", asianCountries);

    // Problem 2
    const smallPopulationCountries = data.filter(
      (country) => country.population < 200000
    );
    console.log("Small population countries:", smallPopulationCountries);

    // Problem 3
    data.forEach((country) => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital[0]);
      console.log("Flag:", country.flags.svg);
    });

    // Problem 4
    const totalPopulation = data.reduce(
      (accumulator, country) => accumulator + country.population,
      0
    );
    console.log("Total population:", totalPopulation);

    // Problem 5
    const usdCountries = data.filter(
      (country) => country.currencies.USD !== undefined
    );
    console.log("USD countries:", usdCountries);
  })
  .catch((error) => console.log(error));
