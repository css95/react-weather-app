import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function WeatherCard({ cityName, icon, temperature, description, wind, humidity, feelsLike }) {

    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

    const isFavorite = favorites.some((f) => f.city === cityName);

    function handleFavoriteClick() {
        if (isFavorite) {
            const favorite = favorites.find((f) => f.city === cityName);
            removeFavorite(favorite.id);
        } else {
            addFavorite(cityName);
        }
    }

    return (
        <div className="weather-card">
            <h1>{cityName}</h1>
            <button onClick={handleFavoriteClick}>
                {isFavorite ? '❤️' : '🤍'}
            </button>
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