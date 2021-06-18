import React, {useState} from 'react'
import '../styles/Select.css'

const Select = ({setCityName}) => {
    const [typingCityName, setTypingCityName] = useState('')

    const handleChange = (event) => {
        let val = event.target.value
        setTypingCityName(val)
    }

    const handleClick = () => {
        setCityName(typingCityName)
    }

    return (
        <div className="select-city">
              <input type="text" placeholder="Enter your City" value={typingCityName} onChange={handleChange} />
              <button onClick={handleClick}>Check Weather</button>             
        </div>
    )
}

export default Select