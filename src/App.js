import { useState } from 'react'
import Search from './components/search/search'
import CurrentWeather from './components/current-weather/current-weather'
import Forecast from './components/forecast/forecast'
import { WEATHER_API_URL, WEATHER_API_KEY } from './api'
import './App.css'

function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const city = searchData.value // Get city name directly

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/current.json?key=${WEATHER_API_KEY}&q=${city}`
    )

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=7`
    )

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        const forecastResponse = await response[1].json()

        setCurrentWeather({ city, ...weatherResponse })
        setForecast({ city, ...forecastResponse })
      })
      .catch(console.log)
  }

  return (
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  )
}

export default App
