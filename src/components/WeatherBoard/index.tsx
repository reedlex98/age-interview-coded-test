import React, {useEffect, useState} from 'react'
import {getWeatherById} from '../../services/api'
import {DetailsProps, apiResponse} from '../_interfaces/weatherBoard.interface'
import WeatherCard from '../WeatherCard'
import City from '../../json/city.interface'
import cities from '../../json/city.list.json'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const WeatherBoard : React.FC<DetailsProps> = ({match} : DetailsProps) => {
    const [apiData, setApiData] = useState<apiResponse>({})
    const [isFetchingCompleted, setIsFetchingCompleted] = useState<boolean>(false)

    const getCityId = () : string => match?.params.cityid as string
    const cityInfo : City = (cities as [City]).filter(city => `${city.id}` === getCityId())[0]

    useEffect(() => {
      const fetchCompleted = (data: any) => {
        setApiData(data)
        setIsFetchingCompleted(true)
      }

      getWeatherById(getCityId(),"pt_br","metric", fetchCompleted)
    }, [])
    
    return <div className="weather-board-container">
      { isFetchingCompleted ? <WeatherCard apiResponse={apiData} cityname={cityInfo.name} /> : <FontAwesomeIcon icon={["fas", "spinner"]} spin />}
    </div>
}

export default WeatherBoard