import { useWeather } from '../hooks/useWeather';
import WeatherCard from '../components/WeatherCard';

function OverviewPage() {

    const { weatherData, loading, error } = useWeather('stockholm');

    if (loading) return <p>Loading...</p>
    if (error) {
        if (error.message === 'CITY_NOT_FOUND') {
            return <p>No results found for that city.</p>
        } else {
        return <p>A network error was encountered</p>
        }
    }

    const { cityName, weather } = weatherData;
    const { temperature_2m  } = weather.current;


    return (
        <>
            <WeatherCard 
            cityName={cityName} 
            icon=""
            temperature={temperature_2m}
            description="TODO"
            />
        </>
    )

}

export default OverviewPage