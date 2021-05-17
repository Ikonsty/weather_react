import React, { useEffect, useState } from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import Weather from "../../modules/Weather/components/Weather";
import Forecast from "../../modules/Weather/components/Forecast";

const WeatherView = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);
  const REACT_APP_API_URL = "https://api.openweathermap.org/data/2.5";
  const REACT_APP_API_KEY = "9c6670249599c07830daeabda46ed1e9";

  useEffect(() => {
    // eslint-disable-next-line no-undef
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    // eslint-disable-next-line no-use-before-define
    getWeather(lat, long)
      .then((weather) => {
        setWeatherData(weather);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });

    // eslint-disable-next-line no-use-before-define
    getForecast(lat, long)
      .then((data) => {
        setForecast(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [lat, long, error]);

  function handleResponse(response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Please Enable your Location in your browser!");
  }

  // eslint-disable-next-line no-shadow
  function getWeather(lat, long) {
    // eslint-disable-next-line no-undef
    return (
      // eslint-disable-next-line no-undef
      fetch(
        `${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&appid=${REACT_APP_API_KEY}`
      )
        .then((res) => handleResponse(res))
        // eslint-disable-next-line consistent-return
        .then((weather) => {
          if (Object.entries(weather).length) {
            // eslint-disable-next-line no-use-before-define
            return mapDataToWeatherInterface(weather);
          }
        })
    );
  }

  // eslint-disable-next-line no-shadow
  function getForecast(lat, long) {
    // eslint-disable-next-line no-undef
    return (
      // eslint-disable-next-line no-undef
      fetch(
        `${REACT_APP_API_URL}/forecast/?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`
      )
        .then((res) => handleResponse(res))
        // eslint-disable-next-line consistent-return
        .then((forecastData) => {
          if (Object.entries(forecastData).length) {
            return (
              forecastData.list
                // eslint-disable-next-line no-shadow
                .filter((forecast) => forecast.dt_txt.match(/09:00:00/))
                // eslint-disable-next-line no-use-before-define
                .map(mapDataToWeatherInterface)
            );
          }
        })
    );
  }

  function mapDataToWeatherInterface(data) {
    const mapped = {
      date: data.dt * 1000, // convert from seconds to milliseconds
      description: data.weather[0].main,
      temperature: Math.round(data.main.temp),
    };

    // Add extra properties for the five day forecast: dt_txt, icon, min, max
    if (data.dt_txt) {
      mapped.dt_txt = data.dt_txt;
    }

    return mapped;
  }

  return (
    <div className="App">
      {typeof weatherData.main !== "undefined" ? (
        <div>
          <Weather weatherData={weatherData} />
          <Forecast forecast={forecast} weatherData={weatherData} />
        </div>
      ) : (
        <div>
          <Dimmer active>
            <Loader>Loading..</Loader>
          </Dimmer>
        </div>
      )}
    </div>
  );
};

export default WeatherView;
