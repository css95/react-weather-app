import axios from "axios"

export async function getWeather(searchTerm) {
    try {
        const geoResponse = await axios.get('https://geocoding-api.open-meteo.com/v1/search', {
            params: { name: searchTerm }
        })
        console.log(geoResponse.data)

        if (!geoResponse.data.results || geoResponse.data.results.length === 0) {
            throw new Error('CITY_NOT_FOUND')
        }

        const { latitude, longitude, name: cityName } = geoResponse.data.results[0]
        console.log(latitude)
        console.log(longitude)

        const weatherResponse = await axios.get('https://api.open-meteo.com/v1/forecast', {
            params: { 
                latitude, 
                longitude, 
                current:'temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m,apparent_temperature',
                daily: 'temperature_2m_max,temperature_2m_min,weather_code',
                timezone: 'auto'
            }
        })
        console.log(weatherResponse.data)
        return { cityName: cityName, weather: weatherResponse.data }

    } catch (error) {
        console.error(error)
        throw error
    }
}

export async function getWeatherByCoords(latitude, longitude) {
    try {
        const weatherResponse = await axios.get('https://api.open-meteo.com/v1/forecast', {
            params: {
                latitude,
                longitude,
                current:'temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m,apparent_temperature',
                daily: 'temperature_2m_max,temperature_2m_min,weather_code',
                timezone: 'auto'
            }

        })
        return { cityName: 'Your location', weather: weatherResponse.data }
    } catch(error) {
        console.error(error)
        throw error
    }
}
