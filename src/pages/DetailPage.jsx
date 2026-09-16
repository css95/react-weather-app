import { useParams } from "react-router-dom"
import { useWeather } from "../hooks/useWeather";

function DetailPage() {
    
    const { cityName } = useParams();
    const { weatherData, loading, error } = useWeather(cityName)

    if (loading) return <p>Loading...</p>
    if (error) {
        if (error.message === 'CITY_NOT_FOUND') {
            return <p>No results found for that city.</p>
        } else {
        return <p>A network error was encountered</p>
        }
    }

    return (
        <>
            {JSON.stringify(weatherData)}
        </>
    )

}

export default DetailPage