import React, { useState } from 'react'
import dateUtils from '../utils/date-utils'
import Icon from './UI/Icon'
import SearchBar from './UI/SearchBar'
import SearchCity from './SearchCity'

const FastInfo = ({ currentWeather, location }) => {
	const lastUpdated = dateUtils.setDate(currentWeather?.last_updated)
	const [address, setAddress] = useState('Boston')
	const lastUpdatedDateString = `${lastUpdated.getDate()} ${dateUtils.getMonthByNumber(
		lastUpdated.getMonth() + 1
	)} ${lastUpdated.getFullYear()}`
	const locationString = `${location?.name}, ${location?.region}, ${location?.country}`

	return (
		<div>
			<SearchCity input={address} setInput={setAddress} />
			<Icon type={currentWeather?.condition?.text} />

			<div>{currentWeather?.temp_c}°C</div>
			<div>{currentWeather?.condition?.text}</div>
			<div>{lastUpdatedDateString}</div>
			<div>{`${dateUtils.getDayOFWeekByNumber(lastUpdated?.getDay())} `}</div>
			<div>{`${lastUpdated.getHours()}: ${lastUpdated.getMinutes()}`}</div>
			{!!currentWeather.isDay ? <div>Night</div> : <div>Day</div>}
			<div>{locationString}</div>
		</div>
	)
}

export default FastInfo
