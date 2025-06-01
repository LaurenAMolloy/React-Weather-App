import { useContext, createContext, useState } from 'react'

//Create context
const WeatherContext = createContext()

//Wrap the theme provider
export const WeatherProvider = ({children}) => {
    //initial state for theme
    const [ weather, setWeatherData ] = useState(null);

    return (
        <WeatherContext.Provider  value ={{ weather, setWeatherData }}>
            {children}
        </WeatherContext.Provider>
    )
}

//Create a custom hook to allow the app to consume the context
export const useWeather = () => useContext(WeatherContext);
