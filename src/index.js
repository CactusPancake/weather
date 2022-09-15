//--------------------Current Location ------------------------------------
function currentCity(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "91e4be9d3f0ce62462b88df7804804ae";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(currentCity);
}

let currentButton = document.querySelector("#current-btn");
currentButton.addEventListener("click", getCurrentLocation);

//--------------------Current Temp ------------------------------------

function showTemperature(response) {
  let temperature = document.querySelector("#temp");
  temperature.innerHTML = `${Math.round(response.data.main.temp)}`;
  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = response.data.name;
  console.log(response);
}

function changeCity(event) {
  event.preventDefault();

  let city = document.querySelector("#city-search-input");
  let apiKey = "91e4be9d3f0ce62462b88df7804804ae";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

// ------------------- Search City -----------------------------------
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-search-input");

  let cityNameResult = document.querySelector("#city-name");
  cityNameResult.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#city-search-form");
form.addEventListener("submit", changeCity);

// ------------------- Current Time -----------------------------------

let now = new Date();

let h6 = document.querySelector("h6");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let hours = now.getHours();
let minutes = now.getMinutes();
let day = days[now.getDay()];

if (minutes < 9) {
  minutes = "0" + minutes;
}

if (hours < 9) {
  hours = "0" + hours;
}

h6.innerHTML = `${day}  ${hours}:${minutes}`;

//--------------- C|F Links ------------------------------------------
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahr);

let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", showCelc);

function showFahr(event) {
  event.preventDefault();
  let temp = document.querySelector("#temp");
  temp.innerHTML = `66`;
}

function showCelc(event) {
  event.preventDefault();
  let temp = document.querySelector("#temp");
  temp.innerHTML = `20`;
}
