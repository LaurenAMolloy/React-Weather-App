import React from 'react'

import { useWeather } from '../../Contexts/Weather';
import { useForecast } from '../../Contexts/Forecast';

export default function WeatherDisplay() {

    const { weather } = useWeather();
    const { forecast } = useForecast();

  //add ternary statement here to conditionally render render
  if(!weather ) {
    console.log("No weather data yet")
    return <p>Waiting for Weather</p>
  }
 
  //Display the temp and icon
  const temp = Math.floor(weather?.main?.temp || 0);
  const iconUrl = weather?.weather?.[0]?.icon ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` : 'null';
  const name= weather.name;

  //Display and Change the first letter of description to uppercase
  const toUpper = weather.weather[0].main
 
  //Display the formatted date and time
  const unixTime = weather?.dt + (weather?.timezone);
  //convert to milliseconds and then create a new date obj
  const dateObj = new Date(unixTime * 1000)
  const utcString = dateObj.toUTCString();
  const cleanUtcString = utcString.replace(' GMT', '');
  
  //Display the wind speed
  const wind = weather.wind.speed
  //Display the humidity
  const humidity = weather.main.humidity

   const forecastElements = 
    forecast.map((item, idx) => {
    const dateTime = new Date(item.dt * 1000);
    const hour = dateTime.getHours();
    const temp = Math.round(item.main.temp);
    const icon =  `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
    
    return (
      <div key={idx} className="hourly-item">
        <span>{hour}:00</span>
        <img className="icon" src={icon}></img>
        <span className="temp">{temp}°</span>
      </div>
    );
  });

  return (
    <>
    <div className="weather-data">
      <div className= "current">
        <h3>{temp}°C</h3>
        <img className="icon" src={iconUrl}></img>
      </div>

      <h2>{name}<i className="fa-solid fa-location-dot"></i></h2>
      <p className="description">{toUpper}</p>
      <h4 className="date-time">{cleanUtcString}</h4>

      <div className="weather-details">
        <h2>Weather Details</h2>
        <div className="details-container">
          <div className="detail">
             <span className="detail-icon">💨</span>
             <p>Wind Speed</p>
             <h4>{wind}</h4>
          </div>
          <div className="detail">
             <span className="detail-icon">💧</span>
             <p>Humidity</p>
             <h4>{humidity}</h4>
          </div>
        </div>
      </div>
    </div>
    <div className="hourlyForecast">
      {forecastElements}
    </div>
    </>
  )}

