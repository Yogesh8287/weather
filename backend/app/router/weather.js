const express = require("express");
const router = express.Router();
const Weather = require("../models/Weather");
const getWeatherData = require("../service/weatherapi");

router.get("/:city", async (req, res) => {
  const { city } = req.params;
  const weatherData = await getWeatherData(req.params.city);

  let weather = await Weather.findOne({ city });
  if (!weather) weather = new Weather();
  weather.set({ city, ...weatherData.main });
  await weather.save();

  res.send(weather);
});

module.exports = router;
