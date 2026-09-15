import axios from "axios";

export async function getWeather(cityName) {
    try {
        const geoResponse = await axios.get('https://geocoding-api.open-meteo.com/v1/search', {
            params: { name: cityName }
        });
        console.log(geoResponse.data);

        const { latitude, longitude } = geoResponse.data.results[0]
        console.log(latitude)
        console.log(longitude)

        const weatherResponse = await axios.get('https://api.open-meteo.com/v1/forecast', {
            params: { 
                latitude, 
                longitude, 
                current:'temperature_2m,weather_code,wind_speed_10m',
                daily: 'temperature_2m_max,temperature_2m_min',
                timezone: 'auto'
             }
        })
        console.log(weatherResponse.data)
        return weatherResponse.data

    } catch (error) {
        console.error(error);
    }
}

