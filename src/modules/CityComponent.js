import React from "react";
import styled from "styled-components";
import homeclock from "./icons/homeclock.svg";



const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;

const ChooseCityLabel = styled.span`
  color: ;
  font-size: 25px;
  font-weight: bold;
  margin: 10px auto;
`;

const SearchBox = styled.span`
  display: flex;
  flex-direction: row;
  border: black solid 0px;
  color: transparent;
  font-size: 25px;
  margin: 25px auto;
  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: bold;
  }

  & button {
    background-color: transparent;
    -webkit-border-radius: 10;
    -moz-border-radius: 10;
    border-radius: 13px;
    font-family: Arial;
    color: Black;
    font-size: 15px;
    padding: 10px 8px 10px 20px;
    text-decoration: none;
}

.btn:hover {
  background: #3cb0fd;
  background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
  background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
  text-decoration: none;
}
`;

const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <WeatherLogo src={homeclock} />
      <ChooseCityLabel>Εισάγετε την πόλη</ChooseCityLabel>
      <SearchBox onClick={fetchWeather}>
        <input
          placeholder="Πόλη"
          onChange={(e) => updateCity(e.target.value)}
        />
        <button type={"submit"}>Click Me
        
        </button>
      </SearchBox>
    </>
  );
};

export default CityComponent;
