import { useState, useEffect } from "react"
import weatherData from "../services/weatherData"

const Weather = ({cityName }) => {

    const [weather , setWeather] = useState([])
  
    const getWeather = () => {
        weatherData
            .getWeatherByCityName(cityName)
            .then(currentWeather => {
                setTimeout(() => {
            },5000)
           setWeather(weather.concat(currentWeather))
        })
    }
    useEffect(getWeather,[cityName])
  
    const clima = weather.map( (w,i) => {
      return ( 
        <div key={i}>
          <p><strong>Temperatura: </strong>{w.current.temp_c} &deg;C</p>
          <p><strong>Indice UV: </strong>{w.current.uv}</p>
          <p><strong>Vento: </strong>{w.current.wind_kph} km/h</p>
          <p><strong>Umidade: </strong>{w.current.humidity}%</p>
          <p><strong>Nuvens: </strong>{w.current.cloud}%</p>
          <p><strong>Condição climatica: </strong>
          </p>
          <img alt='ICON' className="img-border" src={w.current.condition.icon} />
          <p><strong>{w.current.condition.text}</strong></p>
        </div>
        )
      
    })
  
    return (
      <div>
        <h2>Clima em {cityName}</h2>
        {clima}
      </div>
    )
}
  
  export default Weather;