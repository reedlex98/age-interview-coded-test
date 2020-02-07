import React, {useEffect, useState} from 'react';
import CitiesTable from '../CitiesTable'
import './style.css'

const CitiesDisplay : React.FC = () => {
  const [coord, setCoord ] = useState()
  const [citySearch, setCitySearch ] = useState("")

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success => {setCoord({"lat": success.coords.latitude, "lon": success.coords.longitude})}, fail => {console.log(fail)})
  }, [])

  const handleChange : React.FormEventHandler<HTMLInputElement> = (e : React.FormEvent<HTMLInputElement>) => setCitySearch(e.currentTarget.value)

  return <div className="cities-container">
    <input type="text" value={citySearch} onChange={handleChange}/>
    <CitiesTable coord={coord} cityName={citySearch}/>
  </div>

}

export default CitiesDisplay;
