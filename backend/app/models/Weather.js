const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
    },
    temp: {
      type: Number,
      required: true,
    },
    feels_like: Number,
    temp_min: Number,
    temp_max: Number,
    pressure: Number,
    humidity: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Weather = mongoose.model("weather", weatherSchema);
module.exports = Weather;
