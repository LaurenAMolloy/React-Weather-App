import React from 'react'
import sunny from "../../assets/sunny.png"
import { useTheme } from "../../Contexts/ThemeSwitcher"

export default function Header() {
  const { theme, setTheme } = useTheme()

  function toggleTheme(){
    setTheme(prev => !prev)
  }

  return (
    <header>
    <div className="title">
        <img className="sunny beating" src={sunny} alt="smiling sun"/>
        <h1 className="name">Sunny's Forecast</h1>
    </div>
    <button onClick={toggleTheme} className="toggleBtn">Switch to {theme ? "Light": "Dark"} Mode </button>
    <div className="divider"></div>
    </header>
  )
}
