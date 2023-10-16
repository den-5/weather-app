import React, { useState } from 'react'
import dateUtils from '../utils/date-utils'
import Icon from './UI/Icon'
import SearchCity from './SearchCity'

const FastInfo = ({ currentWeather, location }) => {
	const lastUpdated = dateUtils.setDate(currentWeather?.last_updated)
	const [address, setAddress] = useState('Boston')
	const lastUpdatedDateString = `${lastUpdated.getDate()} ${dateUtils.getMonthByNumber(
		lastUpdated.getMonth()
	)} ${lastUpdated.getFullYear()}`

	return (
		<div className='w-full'>
			<SearchCity input={address} setInput={setAddress} />
			<div className='flex flex-col items-center justify-center gap-y-3'>
				<div className='text-4xl'>{location?.name}</div>

				<Icon link={currentWeather?.condition?.icon} />

				<div className='text-3xl'>{currentWeather?.temp_c}°C</div>

				<div>{currentWeather?.condition?.text}</div>
				{!!currentWeather?.is_day ? <div>Day</div> : <div>Night</div>}
				<div className='italic underline text-center mb-5'>
					Last updated:
					<div>{`${lastUpdated.getHours()}:${lastUpdated.getMinutes()}`}</div>
					<div>{lastUpdatedDateString}</div>
				</div>
			</div>
		</div>
	)
}

export default FastInfo
