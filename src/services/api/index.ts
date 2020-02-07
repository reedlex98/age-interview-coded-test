import axios from 'axios'

const api = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5"
})

export const getWeatherById = async (id:string, lang: "pt_br" | "en" | "es" | "pt", units: "metric" | "imperial" | undefined, callback: (data : any) => void) => {
    const response = await api.get("/weather", {
        params:{
            id,
            lang,
            units,
            APPID : process.env.REACT_APP_OPENWHEATERKEY
        }
    })

    callback(response.data)
}