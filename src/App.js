import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import Select from './components/Select'
import Weather from './components/Weather'
import './App.css'
import axios from 'axios'

const App = () => {
  const [cityName, setCityName] = useState('')
  const [cityData, setCityData] = useState(null)

  useEffect(() => {
    if(cityName !== '') {
      let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=30fe70c881fd2c830dd419b11f9bd0b4'
      axios.get(apiUrl)
        .then(res => {
          setCityData(res.data)
        })
    }  
  }, [cityName])  

  return (
    <div className="wrapper">
      <Header />
      <Select setCityName={setCityName} />
      {cityData ? <Weather cityData={cityData} /> : null}
    </div>    
  )
}

export default App;