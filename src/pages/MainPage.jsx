import React, { useEffect, useState } from 'react'
import Icon from '../components/UI/Icon'
import weatherApi from '../API/weather-api'

const MainPage = () => {
	const [input, setInput] = useState()
	const [currentWeather, setCurrentWeather] = useState({})
	const date = new Date()
	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await weatherApi.getCurrentWeather([53.1, -0.13])
				setCurrentWeather(result.current)
				console.log(result.current)
			} catch (error) {
				console.log(error)
			}
		}

		fetchData()
	}, [])
	console.log(currentWeather.condition?.text)
	return (
		<>
			<input
				type='text'
				value={input}
				onChange={e => setInput(e.target.value)}
			/>

			<Icon type={'Clear'} />

			<div>{currentWeather.temp_c}</div>
			<div>{currentWeather?.condition?.text}</div>
			<div>{date.getDay()}</div>
		</>
	)
}

export default MainPage
