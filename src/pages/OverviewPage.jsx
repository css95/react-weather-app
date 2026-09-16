import { useWeather } from '../hooks/useWeather';
import SearchForm from '../components/SearchForm';

function OverviewPage() {
    const { weatherData, loading, error } = useWeather('stockholm')

    if (loading) return <p>Loading...</p>
    if (error) return <p>A network error was encountered</p>

    return (
        <>
            <SearchForm />
            {JSON.stringify(weatherData)}
        </>
    )

}

export default OverviewPage