function WeatherCard({ cityName, icon, temperature, description, wind, humidity, feelsLike }) {


    return (
        <div className="weather-card">
            <h1>{cityName}</h1>
            <div className="weather-main">
                <span className="weather-icon">{icon}</span>
                <h2>{temperature}°</h2>
            </div>
            <p>{description}</p>
            <div className="weather-stats">
                <p>{wind}</p>
                <p>{humidity}</p>
                <p>{feelsLike}</p>
            </div>
        </div>
    )

}

export default WeatherCard