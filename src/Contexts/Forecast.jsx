import { useContext, createContext, useState } from 'react'

//Create context
const ForecastContext = createContext()

//Wrap the theme provider
export const ForecastProvider = ({children}) => {
    //initial state for theme
    const [ forecast, setForecast ] = useState(null);

    return (
        <ForecastContext.Provider  value ={{ forecast, setForecast }}>
            {children}
        </ForecastContext.Provider>
    )
}

//Create a custom hook to allow the app to consume the context
export const useForecast = () => useContext(ForecastContext);
