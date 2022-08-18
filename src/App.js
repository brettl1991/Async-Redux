import "./App.css";

import { useEffect, useState } from "react";
import axios from "axios";

import { Body, Container } from "../src/styles";

function App() {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Manchester?unitGroup=metric&include=events%2Chours%2Ccurrent%2Cdays%2Calerts&key=${process.env.REACT_APP_WEATHER_API}&contentType=json`
      )
      .then((data) => {
        // console.log(data.data);
        setWeather(data.data);
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //Event
  const weatherInput = (e) => {
    // console.log(e.target.value);
    setInput(e.target.value);
  };
  const searchWeather = () => {
    axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?unitGroup=metric&include=events%2Chours%2Ccurrent%2Cdays%2Calerts&key=GJQFRFUM5EJQKEXQGECBF7WG9&contentType=json`
      )
      .then((data) => {
        // console.log(data);
        setWeather(data.data);
        setInput("");
        console.log(data.data);
      });
  };
  return (
    <Body>
      {weather && (
        <Container>
          <div className="search">
            <input onChange={weatherInput} type="text" value={input} />

            <button type="submit" onClick={searchWeather}>
              Search
            </button>
          </div>
          <div className="weather-info">
            <h1>{weather.address}</h1>
            <h2>{weather.resolvedAddress}</h2>
          </div>
          <div className="condition">
            <h3>{weather.currentConditions.conditions}</h3>
            <img
              src={`icons/${weather.currentConditions.icon}.svg`}
              alt={weather.currentConditions.icon}
            />
            <h4>{weather.currentConditions.temp} Celsius</h4>
          </div>
        </Container>
      )}
    </Body>
  );
}

export default App;
