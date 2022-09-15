//--------------------Current Temp ------------------------------------

function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = `${temperature} °C`;
}

function search(city) {
  let apiKey = "8161b4309ee03faae957729ba7104797";
  let citytemp = document.querySelector("#search-form").value;
  let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather`;
  let apiUrl = `${apiEndpoint}?q=${citytemp}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}`).then(showTemperature);
}

// ------------------- Search City -----------------------------------
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

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
