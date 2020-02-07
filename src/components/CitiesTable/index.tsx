import React from 'react'
import cities from '../../json/city.list.json'
import City from '../../json/city.interface'
import geodist from 'geodist'
import './style.css'
import {Link} from 'react-router-dom'
const brazilianCities = (cities as City[]).filter(city => city.country === 'BR')

interface CitiesTableProps {
    coord: {
        lat: number,
        lon: number
    },
    cityName?: string
}

const CitiesTable: React.FC<CitiesTableProps> = ({cityName, coord} : CitiesTableProps) => {

    const sortCitiesArr = (citiesArr : City[]) => citiesArr.sort((a,b) => geodist(coord, a.coord) - geodist(coord, b.coord))

    const filterCitiesArr = (citiesArr : City[]) => citiesArr.filter(({ name }) => cityName ? name.toLowerCase().startsWith(cityName.toLowerCase()): true)

    const createTableRow = (citiesArr : City[]) => citiesArr.map(({ id, name, coord, country }) =>
        <tr key={id}>
            <td>{id}</td>
            <td><Link to={{pathname: `/weather-board/${id}`}}>{name}</Link></td>
            <td>{country}</td>
            <td>{coord.lat}</td>
            <td>{coord.lon}</td>
        </tr>)

    return <table className="cities-table">
        <thead>
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>País</th>
                <th>Latitude</th>
                <th>Longitude</th>
            </tr>
        </thead>
        <tbody>
            {createTableRow(sortCitiesArr(filterCitiesArr(brazilianCities)))}
        </tbody>
    </table>
}

export default CitiesTable