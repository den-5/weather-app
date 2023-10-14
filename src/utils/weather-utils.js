class WeatherUtils {
	getWindDirection(wind_dir) {
		const directions = {
			N: 'North',
			NNE: 'North-Northeast',
			NE: 'Northeast',
			ENE: 'East-Northeast',
			E: 'East',
			ESE: 'East-Southeast',
			SE: 'Southeast',
			SSE: 'South-Southeast',
			S: 'South',
			SSW: 'South-Southwest',
			SW: 'Southwest',
			WSW: 'West-Southwest',
			W: 'West',
			WNW: 'West-Northwest',
			NW: 'Northwest',
			NNW: 'North-Northwest',
		}

		return directions[wind_dir] || 'Unknown'
	}
}

export default new WeatherUtils()
