const apiKey_newsAPI = process.env.apiKey_newsAPI;
const apiKey_newsDataAPI = process.env.apiKey_newsDataAPI;
const apiKey_weather_stack = process.env.apikey_weather_stack;
const searchTerm = document.getElementById("search");
const btn = document.getElementById("btn");

/**
 *{
    "request": {
        "type": "City",
        "query": "Lagos, Nigeria",
        "language": "en",
        "unit": "m"
    },
    "location": {
        "name": "Lagos",
        "country": "Nigeria",
        "region": "Lagos",
        "lat": "6.453",
        "lon": "3.396",
        "timezone_id": "Africa/Lagos",
        "localtime": "2024-09-10 14:39",
        "localtime_epoch": 1725979140,
        "utc_offset": "1.0"
    },
    "current": {
        "observation_time": "01:39 PM",
        "temperature": 30,
        "weather_code": 116,
        "weather_icons": [
            "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
        ],
        "weather_descriptions": [
            "Partly cloudy"
        ],
        "wind_speed": 19,
        "wind_degree": 180,
        "wind_dir": "S",
        "pressure": 1012,
        "precip": 0.5,
        "humidity": 70,
        "cloudcover": 75,
        "feelslike": 36,
        "uv_index": 6,
        "visibility": 10,
        "is_day": "yes"
    }
}
*/

function getWeather(term) {
  //steps

  const payload = {
    query: term,
  };
  let url =
    "http://api.weatherstack.com/current?" +
    "access_key=" +
    apiKey_weather_stack +
    "&query=" +
    payload.query;
  console.log(url);
  fetch(url, {
    method: "GET",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (res) {
      console.log(res);
      dataBind(res);
    })
    .catch(function () {
      alert("You need internet for this application");
    });
}

function search(event) {
  const val = searchTerm.value;
  getWeather(val);
}

// btn.addEventListener("click", search);
btn.onclick = search;

function dataBind(res) {
  const tempTag = document.getElementById("temperature");
  const humidityTag = document.getElementById("humidity");
  const windSpeedTag = document.getElementById("wind-speed");
  const weatherCondTag = document.getElementById("w-condition");

  tempTag.textContent =
    "Temperature" + " : " + res.current.temperature + "°" + "F";

  humidityTag.innerHTML =
    "Humidity" + " : " + res.current.humidity + " kg/" + "m<sup>3</sup>";
  windSpeedTag.textContent =
    "Wind Speed" + " : " + res.current.wind_speed + " m/s";
  weatherCondTag.textContent =
    "Weather Condition" + " : " + res.current.weather_descriptions[0];
}
