import React from 'react'
import { WeatherDisplay, WeatherForm, Header } from '../index'


export default function WeatherContainer( ) {


  return (
    <div className="weather-container">
        <Header />
        <WeatherForm />
        <WeatherDisplay />
    </div>
  )
}
