const baseUrl = 'https://api.openbrewerydb.org/breweries';

async function getBreweries() {
  const searchQuery = document.getElementById('search').value;
  const url = `${baseUrl}?by_name=${searchQuery}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    data.forEach(brewery => {
      const breweryDiv = document.createElement('div');
      const name = document.createElement('h2');
      name.textContent = brewery.name;
      const type = document.createElement('p');
      type.textContent = `Type: ${brewery.brewery_type}`;
      const address = document.createElement('p');
      address.textContent = `Address: ${brewery.street}, ${brewery.city}, ${brewery.state} ${brewery.postal_code}`;
      const website = document.createElement('a');
      website.href = brewery.website_url;
      website.textContent = brewery.website_url;
      const phone = document.createElement('p');
      phone.textContent = `Phone: ${brewery.phone}`;
      breweryDiv.appendChild(name);
      breweryDiv.appendChild(type);
      breweryDiv.appendChild(address);
      breweryDiv.appendChild(website);
      breweryDiv.appendChild(phone);
      resultsDiv.appendChild(breweryDiv);
    });
  } catch (error) {
    console.error(error);
  }
}

document.getElementById('search').addEventListener('input', getBreweries);
