document.addEventListener('DOMContentLoaded', () => {
    
    fetch('../data/cities.json')
      .then(response => response.json())
      .then(data => {
        
        console.log(data)
        const departureDatalist = document.getElementById('departureCityNames');
        const destinationDatalist = document.getElementById('destinationCityNames');
  
    
        data.forEach(city => {
          const optionElement = document.createElement('option');
          optionElement.value = `${city.city} (${city.code})`;
          departureDatalist.appendChild(optionElement.cloneNode(true)); 
          destinationDatalist.appendChild(optionElement);
        });
      })
      .catch(error => {
        console.error('Error fetching the cities JSON:', error);
      });
  });
  c