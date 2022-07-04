import axios from "axios";

const currentDate = document.querySelector("#current-date");
const currentTime = document.querySelector("#current-time");

const now = new Date();
let weekDayLong = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurthday",
  "Friday",
  "Saturday"
];
let weekDay = weekDayLong[now.getDay()];
let dayNumber = now.getDate();
let currentHours = now.getHours();
let currentMinutes = now.getMinutes();

currentDate.innerHTML = `${weekDay}, ${dayNumber}`;
currentTime.innerHTML = `${currentHours}:${currentMinutes}`;
// challenge to input the cityname

let form = document.querySelector("#form-search");

const showRealTemp = (response) => {
  document.querySelector("#city-name").innerHTML = response.data.name;
  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  console.log(response.data);
  document.querySelector("#state").innerHTML = response.data.weather[0].main;
};

const search = (city) => {
  // cityNameInput = cityNameInput.value.toLowerCase().trim();
  // console.log(cityNameInput.value);

  let APIKEY = "bd71345693d3c57b7742e27f41d36a4d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=${units}`;

  axios.get(apiUrl).then(showRealTemp);
};

const submitHandler = (e) => {
  e.preventDefault();
  let cityName = document.querySelector("#search-input").value;
  search(cityName);
};
form.addEventListener("submit", submitHandler);

// const checkbox = document.querySelector('input[type="checkbox"]');

let units = "metric";
// if (checkbox.checked) {
//   units = "metric";
// } else {
//   units = "imperial";
// }

const showLocation = (position) => {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let APIKEY = "bd71345693d3c57b7742e27f41d36a4d";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`;

  axios.get(apiURL).then((response) => {
    // console.log(response.data);
    document.querySelector("#city-name").innerHTML = response.data.name;
  });
};

const getCurrentLocation = (e) => {
  e.preventDefault();
  navigator.geolocation.getCurrentPosition(showLocation);
};

let btn = document.querySelector("#current-location-btn");
btn.addEventListener("click", getCurrentLocation);

// city.innerHTML =

search("Vienna");
// checkbox.addEventListener("change", );

// change temperature by click on metric system
