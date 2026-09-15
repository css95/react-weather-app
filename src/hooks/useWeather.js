import { useState, useEffect } from 'react'
import { getWeather } from '../api/weather'

export function useWeather(cityName) {

    const [weatherData, setWeatherData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        setError(null)
        getWeather(cityName)
        .then((data) => setWeatherData(data))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))

    }, [cityName]);

    return { weatherData, loading, error }

}
