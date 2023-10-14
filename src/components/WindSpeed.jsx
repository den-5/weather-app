import React from 'react'
import weatherUtils from '../utils/weather-utils'
import DataBox from './UI/DataBox'

const WindSpeed = ({ speed, windDirection }) => {
	return (
		<DataBox
			title={'Wind'}
			data={`${speed} km\\h`}
			extraData={weatherUtils.getWindDirection(windDirection)}
		/>
	)
}

export default WindSpeed
