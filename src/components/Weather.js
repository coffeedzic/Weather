import React from 'react'
import '../styles/Weather.css'
import getCountryName from './countryObj.js'

const Weather = ({cityData}) => {
    const toCelsius = (val) => {
        let temp = val - 273.15
        return Math.round(temp)
    }
    const nameOfClass = 'wi-owm-' + cityData.weather[0].id
    
    return (
        <div className="weather">
            <div className="current-temp">
                <span className="temp">{toCelsius(cityData.main.temp)}&deg;</span>
                <span className="city">{cityData.name}</span>
                <span className="country">{getCountryName(cityData.sys.country)}</span>
            </div>
            <div className="info">
                <div className="icon">
                    <i className={nameOfClass}></i>
                </div>
                <div className="min-max">
                    <span>FEELS LIKE: {toCelsius(cityData.main.feels_like)}&deg;</span>
                    <span>HUMIDITY: {cityData.main.humidity}%</span>
                </div>              
            </div>
        </div>
    )
}

export default Weather