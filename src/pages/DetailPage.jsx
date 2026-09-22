import { useParams } from "react-router-dom"
import { useWeather } from "../hooks/useWeather";
import WeatherCard from "../components/WeatherCard";
import { getWeatherInfo } from "../utils/weatherCodes";
import { getForecastDays } from "../utils/forecastDays";
import ForecastList from "../components/ForecastList";


function DetailPage() {
    
    const { citySearch } = useParams();
    const { weatherData, loading, error } = useWeather(citySearch);

    if (loading) return <p className="statusMessage">Loading...</p>
    if (error) {
        if (error.message === 'CITY_NOT_FOUND') {
            return <p className="statusMessage">No results found for that city.</p>
        } else {
        return <p className="statusMessage">A network error was encountered</p>
        }
    };

    const { cityName, weather } = weatherData;
    const { temperature_2m, wind_speed_10m, relative_humidity_2m, apparent_temperature  } = weather.current;
    const weatherInfo = getWeatherInfo(weather.current.weather_code);
    const forecastDays = getForecastDays(weather.daily);

    return (
        <>
            <WeatherCard 
            cityName={cityName} 
            icon={weatherInfo.icon}
            temperature={temperature_2m}
            description={weatherInfo.description}
            wind={wind_speed_10m}
            humidity={relative_humidity_2m}
            feelsLike={apparent_temperature}
            />
            <ForecastList days={forecastDays} />
        </>
    )

};

export default DetailPage