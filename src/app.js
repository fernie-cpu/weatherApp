const name = document.querySelector('.name');
const temperature = document.querySelector('.temp');
const main = document.querySelector('.main');
const icon = document.querySelector('.icon');
const desc = document.querySelector('.desc');
const feel = document.querySelector('.feel');
const minTemp = document.querySelector('.min');
const maxTemp = document.querySelector('.max');
const humidity = document.querySelector('.humidity');
const searchBtn = document.querySelector('.search-btn');
const searchCity = document.querySelector('#search-city');

let api = 'http://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&appid=78f46276c074c96c7cc3e739da828101';

const getWeather = async () => {
  const unit = document.querySelector('.checkbox').value;

  let searchTerm = searchCity.value;
  if (!searchTerm) {
    searchTerm = 'Detroit';
  }

  let units = `${unit}`;
  let url = api + searchTerm + '&units=' + units + API_KEY;

  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();
  displayWeather(data);
};

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  getWeather();
});

const displayWeather = async (data) => {
  name.textContent = data.name;
  temperature.textContent = parseInt(data.main.temp) + '°';
  main.textContent = data.weather[0].main;
  icon.src =
    'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
  desc.textContent = 'Description: ' + data.weather[0].description;
  feel.textContent = 'Feels like: ' + parseInt(data.main.feels_like) + '°';
  minTemp.textContent = 'Min: ' + parseInt(data.main.temp_min) + '°';
  maxTemp.textContent = 'Max: ' + parseInt(data.main.temp_max) + '°';
  humidity.textContent = 'Humidity: ' + data.main.humidity + '%';
  document.body.style.backgroundImage =
    'url("https://source.unsplash.com/1600x900/?' + data.name + '-city")';
  console.log(data);
};

const toggleUnit = document.querySelector('.checkbox');
toggleUnit.addEventListener('click', (e) => {
  if (e.target.value === 'imperial') {
    e.target.value = 'metric';
    getWeather();
  } else {
    e.target.value = 'imperial';
    getWeather();
  }
});

export { getWeather };
