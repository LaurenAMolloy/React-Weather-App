import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './Contexts/ThemeSwitcher.jsx'
import { CityProvider } from './Contexts/City.jsx'
import { WeatherProvider } from './Contexts/Weather.jsx'
import { ForecastProvider } from './Contexts/Forecast.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CityProvider>
    <WeatherProvider>
     <ForecastProvider>
         <ThemeProvider>
             <App />
         </ThemeProvider>
      </ForecastProvider>
      </WeatherProvider>
    </CityProvider>
  </StrictMode>,
)
