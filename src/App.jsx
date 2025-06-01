import './App.css'
import WeatherContainer from './components/WeatherContainer'
import { useTheme } from './Contexts/ThemeSwitcher'

function App() {
  //Use contexts to set theme
  const { theme} = useTheme();
  
  return (
    <>
    <div className = {`${theme ? "dark-theme" : "" } weather-wrapper`}>
    <WeatherContainer/>
    </div>
    </>
  )
}

export default App
