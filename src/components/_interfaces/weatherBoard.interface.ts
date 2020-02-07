import {match} from 'react-router-dom'

export interface DetailParams {
    cityid: string
}

export interface DetailsProps {
    required: string;
    match?: match<DetailParams>;
}

export interface apiResponse {
    "coord"?: {
        "lon"?: number,
        "lat"?: number
    },
    "weather"?: [
        {
            "id"?: number,
            "main"?: string,
            "description"?: string,
            "icon"?: string
        }
    ],
    "rain"?: {
        "1h"?: number,
        "3h"?:number
    },
    "base"?: string,
    "main"?: {
        "feels_like"?: number,
        "temp"?: number,
        "pressure"?: number,
        "humidity"?: number,
        "temp_min"?: number,
        "temp_max"?: number,
        "sea_level"?: number,
        "grnd_level"?: number
    },
    "wind"?: {
        "speed"?: number,
        "deg"?: number
    },
    "clouds"?: {
        "all"?: number
    },
    "dt"?: number,
    "sys"?: {
        "message"?: number,
        "country"?: string,
        "sunrise"?: number,
        "sunset"?: number
    },
    "id"?: number,
    "name"?: string,
    "cod"?: number
}