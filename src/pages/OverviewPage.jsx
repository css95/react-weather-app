import { useWeather } from '../hooks/useWeather';
import WeatherSummary from '../components/WeatherSummary';
import { getWeatherInfo } from '../utils/weatherCodes';
import { useLocationWeather } from '../hooks/useLocationWeather';

function OverviewPage() {

    const { weatherData, loading, error } = useLocationWeather();

    if (loading) return <p>Loading...</p>;
    if (error) {
        if (error.message === 'CITY_NOT_FOUND') {
            return <p>No results found for that city.</p>
        } else {
        return <p>A network error was encountered</p>
        }
    };

    const { cityName, weather } = weatherData;
    const { temperature_2m } = weather.current;
    const weatherInfo = getWeatherInfo(weather.current.weather_code);


    return (
        <>
            <WeatherSummary
                cityName={cityName}
                icon={weatherInfo.icon}
                temperature={temperature_2m}
            />
        </>
    )

}

export default OverviewPage