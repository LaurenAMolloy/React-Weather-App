import React from 'react'
import { useEffect, useState } from 'react'
import { useCity } from '../../Contexts/City';
import { useWeather } from '../../Contexts/Weather';
import { useForecast } from '../../Contexts/Forecast';

export default function WeatherForm() {
    const { city, setCity } = useCity();
    const { setWeatherData } = useWeather();
    const { setForecast } = useForecast();

    const [ loading, setLoading] = useState(true);

    useEffect(() => {
        // Call getWeather when component mounts
        getWeather();
    }, []); 

    function retrieveCity(e) {
        //console.log(e.target.value)
        setCity(e.target.value)
    }
    
    async function getWeather(e){
        if (e) e.preventDefault();
        const trimmedCity = city.trim();
        if(!trimmedCity) return

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${trimmedCity}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
            const data = await response.json()
            //console.log(data)

            const foreCast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${trimmedCity}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
            const foreCastData = await foreCast.json();

            //slice data to grab first 8 items
            const next24Hours = foreCastData.list.slice(0, 8)

            setWeatherData(data);
            setForecast(next24Hours);

            setLoading(false);

        } catch (error) {
            console.error('Error fetching weather data:', error);
            setLoading(false);
        }
        //clear the inputs
        //disable the button
        setCity("");
    };

    

  if (loading) {
    return (
     <>
     <p>I am loading</p>
     <div className="lds-dual-ring"></div>
     </>
    )
  }
  return (
     <form className="form" onSubmit={getWeather} >
        <input 
        className="inputCity"
        onChange={retrieveCity}
        type="text"
        name="city"
        placeholder="Enter City"
        value={city}>
        </input>
        <button disabled={city.length < 1}  type="submit" className="submitBtn">Get Weather</button>
     </form>
  )
}