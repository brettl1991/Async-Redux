import "./App.css";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Body, Button, Search } from "../src/styles";

function App() {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Manchester?unitGroup=metric&include=events%2Chours%2Ccurrent%2Cdays%2Calerts&key=GJQFRFUM5EJQKEXQGECBF7WG9&contentType=json"
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
        console.log(data.data);
      });
  };
  return (
    <Body>
      {weather && (
        <div>
          <div className="search">
            <input onChange={weatherInput} type="text" />

            <button type="submit" onClick={searchWeather}>
              Search
            </button>
          </div>
          <div className="weather-info"></div>
          <h1>{weather.address}</h1>
          <h2>{weather.resolvedAddress}</h2>
          <div className="condition">
            <h3>{weather.currentConditions.conditions}</h3>
            <img
              src={`icons/${weather.currentConditions.icon}.svg`}
              alt={weather.currentConditions.icon}
            />
            <h3>{weather.currentConditions.temp} Celsius</h3>
          </div>
        </div>
      )}
    </Body>
  );
}

export default App;
