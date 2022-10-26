const token = "58ec155056d8130732898e461d368045";

const cityField = document.querySelector("#cityField");
const mainLabel = document.querySelector("#mainWeatherLabel");
const tempWeatherLabel = document.querySelector("#tempWeatherLabel");
const mainImage = document.querySelector("#mainImage");

const mainApiAddr = "https://api.openweathermap.org/data/2.5/weather?q=";
const tokenApiAddr = "&appid=" + token;

const Worker = async () => {
  const response = await fetch(
    mainApiAddr + cityField.value + "&units=metric" + tokenApiAddr
  );
  const json = await response.json();
  if (response.ok == true) {
    console.log(json);
    mainLabel.innerHTML = json.weather[0].main + " " + json.clouds.all + "%";
    tempWeatherLabel.innerHTML =
      "Temp Min/Actual/Max: " +
      json.main.temp_min +
      "°C/" +
      json.main.temp +
      "°C/" +
      json.main.temp_max +
      "°C";
    mainImage.src =
      "http://openweathermap.org/img/wn/" + json.weather[0].icon + "@2x.png";
  }
};

cityField.addEventListener("change", Worker);
