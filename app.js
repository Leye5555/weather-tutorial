const apiKey_newsAPI = process.env.apiKey_newsAPI;
const apiKey_newsDataAPI = process.env.apiKey_newsDataAPI;
const apikey_weather_stack = process.env.apikey_weather_stack;

getNews();
const userLocation = "Jos";
const defaultLocation = "Qatar";
getWeather(userLocation);
getWeather(defaultLocation);

function getNews() {
  const payload = {
    searchTerm: "game",
    sortBy: "popularity",
  };
  let url =
    "https://newsdata.io/api/1/latest?" +
    `q=${payload.searchTerm}&` +
    `apikey=${apiKey_newsDataAPI}`;
  var req = new Request(url);
  console.log({ req });
  fetch(req)
    .then(function (response) {
      return response.json();
    })
    .then((res) => dataBind(res.results));
}

function getWeather(location) {
  const payload = {
    searchTerm: location,
  };
  let url =
    "http://api.weatherstack.com/current?" +
    `query=${payload.searchTerm}&` +
    `access_key=${apikey_weather_stack}`;
  var req = new Request(url);
  console.log({ req });
  fetch(req)
    .then(function (response) {
      return response.json();
    })
    .then((res) => dataBindWeather(res, location));
}

function dataBind(data) {
  const sizeOfData = data.length;
  const slides = 6;
  const randomStart = Math.floor((sizeOfData - slides - 1) * Math.random());

  const subsetData = data.slice(randomStart, slides);
  console.log(subsetData);

  const images = document.querySelectorAll(".carousel-item > img");
  console.log({ images });
  images.forEach(function (item, index) {
    const eachObject = subsetData[index];
    const imgSrc = eachObject.image_url;
    item.src = imgSrc ? imgSrc : "./placeholder.jpg";
  });
}

function dataBindWeather(data, location) {
  if (location === userLocation) {
    console.log({ data });
    const cardTitle = document.querySelector(".my-location .card-title");
    const weatherDesc = document.querySelector(
      ".my-location .weather-description"
    );
    const time = document.querySelector(".my-location .observation-time");
    const icon = document.querySelector(".my-location .weather-icon > img");
    cardTitle.textContent = data.request.query;
    weatherDesc.textContent = data.current.weather_descriptions[0];
    time.textContent = data.current.observation_time;
    icon.src = data.current.weather_icons[0];
  } else {
    console.log({ data });
    const cardTitle = document.querySelector(".us-location .card-title");
    const weatherDesc = document.querySelector(
      ".us-location .weather-description"
    );
    const time = document.querySelector(".us-location .observation-time");
    const icon = document.querySelector(".us-location .weather-icon > img");
    time.textContent = data.current.observation_time;

    cardTitle.textContent = data.request.query;
    weatherDesc.textContent = data.current.weather_descriptions[0];
    icon.src = data.current.weather_icons[0];
  }
}
