import React from 'react'
import WindSpeed from '../components/WindSpeed'
import Humidity from '../components/Humidity'
import Pressure from '../components/Pressure'
import RealFeel from '../components/RealFeel'
import UVIndex from '../components/UVIndex'
import Visibility from '../components/Visibility'

const Widgets = ({ weatherData }) => {
	return (
		<div className='grid grid-cols-3 gap-4'>
			<WindSpeed
				speed={weatherData.wind_kph}
				windDirection={weatherData.wind_dir}
			/>
			<Humidity value={weatherData?.humidity} />
			<RealFeel value={weatherData?.feelslike_c} />
			<UVIndex value={weatherData?.uv} />
			<Pressure value={weatherData?.pressure_mb} />
			<Visibility value={weatherData?.vis_km} />
		</div>
	)
}

export default Widgets
