import { useState, useEffect } from "react";
import { getWeatherByCoords, getWeather } from "../api/weather";
import { getCurrentLocation } from "../utils/geolocation";

export function useLocationWeather() {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchLocationWeather() {
            setLoading(true);
            setError(null);

            try {
                const position = await getCurrentLocation();
                const { latitude, longitude } = position.coords;
                const data = await getWeatherByCoords(latitude, longitude);
                setWeatherData(data);

            } catch(error) {
                try {
                    const data = await getWeather('stockholm');
                    setWeatherData(data);
                } catch(fallbackError) {
                    setError(fallbackError);
                }
                
            } finally {
                setLoading(false);

            }
        }

        fetchLocationWeather();

    }, []);

    return { weatherData, loading, error };
}