import React, { useContext, useEffect, useState } from 'react'
import SearchBar from './UI/SearchBar'
import locationApi from '../API/location-api'
import { CityContext } from '../context/city-context'

const SearchCity = ({ input, setInput }) => {
	const [valueChanged, setValueChanged] = useState(true)
	const setCityCoords = useContext(CityContext)
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await locationApi.getCoordsByCityName(input)
				console.log(response)
				setCityCoords([response[0]?.latitude, response[0]?.longitude])
			} catch (e) {
				console.error(e)
			}
		}
		fetchData()
	}, [valueChanged])

	return (
		<SearchBar
			value={input}
			setValue={setInput}
			handleClick={e => {
				e.preventDefault()
				console.log('button click')
				setValueChanged(!valueChanged)
			}}
		/>
	)
}

export default SearchCity
