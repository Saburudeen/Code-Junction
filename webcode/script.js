const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const breweriesTable = document.getElementById('breweries-table').getElementsByTagName('tbody')[0];

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value;
  getBreweries(searchTerm);
});

async function getBreweries(searchTerm) {
  try {
    const response = await fetch(`https://api.openbrewerydb.org/breweries/search?query=${searchTerm}`);
    const breweries = await response.json();
    displayBreweries(breweries);
  } catch (error) {
    console.log(error);
  }
}

function displayBreweries(breweries) {
  // clear previous search results
  breweriesTable.innerHTML = '';
  
  // iterate through breweries and display necessary info in table
  breweries.forEach(brewery => {
    const row = breweriesTable.insertRow();
    const nameCell = row.insertCell();
    const typeCell = row.insertCell();
    const addressCell = row.insertCell();
    const websiteCell = row.insertCell();
    const phoneCell = row.insertCell();
    const searchInput = document.getElementById('searchInput');
    const searchInput.addEventListener('input', getBreweries);
    
    nameCell.innerHTML = brewery.name;
    typeCell.innerHTML = brewery.brewery_type;
    addressCell.innerHTML = `${brewery.street}, ${brewery.city}, ${brewery.state} ${brewery.postal_code}`;
    websiteCell.innerHTML = `<a href="${brewery.website_url}">${brewery.website_url}</a>`;
    phoneCell.innerHTML = brewery.phone || 'N/A';
  });
}
