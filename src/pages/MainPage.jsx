import React, { useEffect, useState } from 'react'
import Icon from '../components/UI/Icon'
import weatherApi from '../API/weather-api'
import dateUtils from '../utils/date-utils'
import Widgets from '../components/Widgets'
import FastInfo from '../components/FastInfo'
import { CityContext } from '../context/city-context'

const MainPage = () => {
	const [currentWeather, setCurrentWeather] = useState({})
	const [location, setLocation] = useState(null)
	const [cityCoords, setCityCoords] = useState([53.1, -0.13])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await weatherApi.getCurrentWeather(cityCoords)
				setCurrentWeather(result.current)
				setLocation(result.location)
				console.log(result.location)
				console.log(result.current)
			} catch (error) {
				console.log(error)
			}
		}

		fetchData()
	}, [cityCoords])
	return (
		<>
			<CityContext.Provider value={setCityCoords}>
				<FastInfo currentWeather={currentWeather} location={location} />
				<Widgets weatherData={currentWeather} />
			</CityContext.Provider>
		</>
	)
}

export default MainPage
