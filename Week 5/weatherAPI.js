function getLocationWeather(location) {
  var apiKey = "31eea274dbb42a560e587b785456144f";
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    location +
    "&appid=" +
    apiKey;

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      displayWeather(response);
    }
  };
  xhr.send();
}

function displayWeather(data) {
  var weatherInfo = document.getElementById("weather-info");
  weatherInfo.innerHTML = "";
  var cityName = data.name;
  var temperature = Math.round(data.main.temp - 273.15); // Convert temperature to Celsius
  var description = data.weather[0].description;
  var humidity = data.main.humidity;

  var cityElement = document.createElement("p");
  cityElement.textContent = "City: " + cityName;
  var temperatureElement = document.createElement("p");
  temperatureElement.textContent = "Temperature: " + temperature + "°C";
  var descriptionElement = document.createElement("p");
  descriptionElement.textContent = "Description: " + description;
  var humidityElement = document.createElement("p");
  humidityElement.textContent = "Humidity: " + humidity + "%";

  weatherInfo.appendChild(cityElement);
  weatherInfo.appendChild(temperatureElement);
  weatherInfo.appendChild(descriptionElement);
  weatherInfo.appendChild(humidityElement);
}
