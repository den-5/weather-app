import axios from 'axios'

class WeatherAPI {
	async getCurrentWeather(coords) {
		const options = {
			method: 'GET',
			url: 'https://weatherapi-com.p.rapidapi.com/current.json',
			params: { q: `${coords[0]},${coords[1]}` },
			headers: {
				'X-RapidAPI-Key': '7aed051136msh4c2de62fd1eba37p170256jsn96d1ed55af8d',
				'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
			},
		}

		try {
			const response = await axios.request(options)
			return response.data
		} catch (error) {
			console.error(error)
		}
	}
}

export default new WeatherAPI()
