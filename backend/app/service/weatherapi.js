const axios = require("axios");
const Weather = require("../models/Weather");

const { API_key } = process.env;
const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

async function getWeatherData(city) {
  const { data } = await axios.post(`${API_URL}?q=${city}&appid=${API_key}`);
  return data;
}

module.exports = getWeatherData;
