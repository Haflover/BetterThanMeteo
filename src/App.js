import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import React, { useState } from "react";
import WeatherComponent from "./modules/WeatherInfoComponent";
import axios from "axios";

const API_KEY = "c20e17cb7d6f16b05a5ecdf5d087ddb9";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: inherit;
  align-items: center;
  border-radius: 0px;
  width: 700px;
  background-color: transparent;
  font-family: Monserrat;
  opacity: 1;
`;
const AppLabel = styled.div`
  color: black;
  font-size: 60px;
  font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response =
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}
   `);

    console.log(response.data);

    updateWeather(response.data);
  };

  return (
    <Container>
      <AppLabel>Better Than Meteo</AppLabel>

      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
