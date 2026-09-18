import { useWeather } from '../hooks/useWeather';
import WeatherCard from '../components/WeatherCard';
import { getWeatherInfo } from '../utils/weatherCodes';
import { getForecastDays } from '../utils/forecastDays';

function OverviewPage() {

    const { weatherData, loading, error } = useWeather('stockholm');

    if (loading) return <p>Loading...</p>;
    if (error) {
        if (error.message === 'CITY_NOT_FOUND') {
            return <p>No results found for that city.</p>
        } else {
        return <p>A network error was encountered</p>
        }
    };

    const { cityName, weather } = weatherData;
    const { temperature_2m  } = weather.current;
    const weatherInfo = getWeatherInfo(weather.current.weather_code);


    return (
        <>
            <WeatherCard 
            cityName={cityName} 
            icon={weatherInfo.icon}
            temperature={temperature_2m}
            description={weatherInfo.description}
            />
        </>
    )

}

export default OverviewPage