import React from "react";
import { useState } from "react";
import Navbar from "./navbar";
import { weatherCity } from "../services/api";
import { toast } from "react-toastify";

function Home(props) {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const data = await weatherCity(search);
      setWeather(data);
    } catch (error) {
      toast.error("City Not found");
    }
  };

  const toCelsius = (k) => (
    <span>
      {(k - 273.15).toFixed(2)}
      <span> &#8451;</span>
    </span>
  );

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <form className="form-inline">
          <div className="d-flex">
            <input
              className="form-control"
              type="search"
              placeholder="Enter your city name"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="btn btn-outline-success mx-3"
              type="submit"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </form>
        {weather && (
          <div className="m-auto w-50 mt-5">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>City :</td>
                  <td>{weather.city}</td>
                </tr>
                <tr>
                  <td>Temperature :</td>
                  <td>{toCelsius(weather.temp)}</td>
                </tr>
                <tr>
                  <td>Feels Like :</td>
                  <td>{toCelsius(weather.feels_like)}</td>
                </tr>
                <tr>
                  <td>Temperature Min :</td>
                  <td>{toCelsius(weather.temp_min)}</td>
                </tr>
                <tr>
                  <td>Temperature Max:</td>
                  <td>{toCelsius(weather.temp_max)}</td>
                </tr>
                <tr>
                  <td>Pressure :</td>
                  <td>{weather.pressure} hPa</td>
                </tr>
                <tr>
                  <td>Humidity :</td>
                  <td>{weather.humidity} %</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
