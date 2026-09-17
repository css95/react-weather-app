import { useParams } from "react-router-dom"
import { useWeather } from "../hooks/useWeather";
import WeatherCard from "../components/WeatherCard";

function DetailPage() {
    
    const { citySearch } = useParams();
    const { weatherData, loading, error } = useWeather(citySearch)

    if (loading) return <p>Loading...</p>
    if (error) {
        if (error.message === 'CITY_NOT_FOUND') {
            return <p>No results found for that city.</p>
        } else {
        return <p>A network error was encountered</p>
        }
    }

    const { cityName, weather } = weatherData;
    const { temperature_2m, wind_speed_10m, relative_humidity_2m, apparent_temperature  } = weather.current;

    return (
        <>
            <WeatherCard 
            cityName={cityName} 
            icon=""
            temperature={temperature_2m}
            description="TODO"
            wind={wind_speed_10m}
            humidity={relative_humidity_2m}
            feelsLike={apparent_temperature}
            />
        </>
    )

}

export default DetailPage