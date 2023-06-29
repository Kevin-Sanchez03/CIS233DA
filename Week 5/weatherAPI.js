function getLocationWeather(city) {
  const apiKey = "31eea274dbb42a560e587b785456144f";

  // Fetch weather data for the specified city
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      // Extract relevant weather information from the response
      const temperature = Math.round(data.main.temp - 273.15); // Convert temperature to Celsius
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
      const weatherDescription = data.weather[0].description;

      // Update the weather information in the HTML document
      const cityElement = document.getElementById(city);
      if (cityElement) {
        cityElement.querySelector(".item-1").textContent = `${temperature}°C`;
        cityElement.querySelector(".item-3").innerHTML = `
          <h2>${city.charAt(0).toUpperCase() + city.slice(1)}</h2>
          <p>Percipitation: 0%</p>
          <p>Wind: ${windSpeed}mph</p>
          <p>Humidity: ${humidity}%</p>
          <p>Conditions: ${weatherDescription}</p>
        `;
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

function setCity(cityNumber) {
  const cities = ["sedona", "denver", "seattle", "honolulu", "portland"];
  const city = cities[cityNumber - 1];

  // Show the selected city and hide others
  for (let i = 1; i <= 5; i++) {
    const cityElement = document.getElementById(`city${i}`);
    if (i === cityNumber) {
      cityElement.style.display = "block";
    } else {
      cityElement.style.display = "none";
    }
  }

  // Fetch weather data for the selected city
  getLocationWeather(city);
}
