import React from 'react'
import { apiResponse } from '../_interfaces/weatherBoard.interface'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

interface WeatherCardProps {
    cityname: string
    apiResponse: apiResponse
}

const WeatherCard: React.FC<WeatherCardProps> = (props: WeatherCardProps) => {
    const date = new Date()

    return <div className="weather-card">
        <div className="card-title">
            Previsão de hoje, dia {`${date.getDate()}/${date.getMonth()}`}, para <span>{props.cityname}</span>
        </div>
        <div className="min-max-temp">
            <div className="temp">
                <FontAwesomeIcon icon={["fas", "long-arrow-alt-up"]} style={{ color: "pink" }} size="4x" />
                <p>
                    {props.apiResponse.main?.temp_max}°
                </p>
            </div>
            <div className="temp">
                <FontAwesomeIcon icon={["fas", "long-arrow-alt-down"]} style={{ color: "lightblue" }} size="4x" />
                <p>
                    {props.apiResponse.main?.temp_min}°
                </p>
            </div>
        </div>
        <div className="temp-desc">
            <p>Previsão de {props.apiResponse.weather && props.apiResponse.weather[0].description} para as próximas horas</p>
            <ul className="other-data">
                <li>Temperatura: <span>{props.apiResponse.main?.temp} °</span></li>
                <li>Sensação térmica: <span>{props.apiResponse.main?.feels_like} °</span></li>
                <li>Humidade: <span>{props.apiResponse.main?.humidity} %</span></li>
                <li>Pressão atmosférica: <span>{props.apiResponse.main?.pressure} hPa</span></li>
                <li>Indice de nebulosidade: <span>{props.apiResponse.clouds?.all} %</span></li>
                <li>Volume de chuvas nas ultimas 1h (Em mm): <span>{props.apiResponse.rain?.["1h"] || "Indisponível"}</span></li>
                <li>Volume de chuvas nas ultimas 3h (Em mm): <span>{props.apiResponse.rain?.["3h"] || "Indisponível"}</span></li>
            </ul>
        </div>
    </div>
}


export default WeatherCard