import axios from 'axios'

class LocationAPI {
	async getCoordsByCityName(city) {
		const options = {
			method: 'GET',
			url: 'https://api.api-ninjas.com/v1/geocoding?city=' + city,
			headers: { 'X-Api-Key': '5kROd+3sNPS3WoTx2ClToQ==ujdeno5MTKwi4AtA' },
		}
		try {
			const response = await axios.request(options)
			return response.data
		} catch (error) {
			console.error(error)
		}
	}
}
export default new LocationAPI()
