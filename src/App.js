import "./App.css";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Manchester?unitGroup=metric&key=GJQFRFUM5EJQKEXQGECBF7WG9&contentType=json"
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
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?unitGroup=metric&key=GJQFRFUM5EJQKEXQGECBF7WG9&contentType=json`
      )
      .then((data) => {
        // console.log(data);
        setWeather(data.data);
        console.log(data.data);
      });
  };
  return (
    <div>
      {weather && (
        <div>
          <div className="search">
            <input onChange={weatherInput} type="text" />
            <button onClick={searchWeather}>Search</button>
          </div>
          <div className="weather-info"></div>
          <h1>{weather.address}</h1>
          <h2>{weather.resolvedAddress}</h2>
          <div className="condition">
            <h3>{weather.currentConditions.conditions}</h3>
            <img src={weather.currentConditions.icon} alt="weather" />
            <h3>{weather.currentConditions.temp}Celsius</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
