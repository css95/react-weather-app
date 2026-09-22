import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import styles from './WeatherCard.module.css';


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
        <div className={styles.weatherCard}>
            <div className={styles.titleRow}>
                <h1 className={styles.title}>{cityName}</h1>
                {isFavorite && <span className={styles.favoriteBadge}>❤️</span>}
            </div>
            <div className={styles.weatherMain}>
                <span className={styles.icon}>{icon}</span>
                <h2 className={styles.temperature}>{temperature}°</h2>
            </div>
            <p>{description}</p>
            <div className={styles.weatherStats}>
                <div className={styles.stat}>
                    <span className={styles.statLabel}>Wind</span>
                    <span className={styles.statValue}>{wind} km/h</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statLabel}>Humidity</span>
                    <span className={styles.statValue}>{humidity}%</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statLabel}>Feels like</span>
                    <span className={styles.statValue}>{feelsLike}°</span>
                </div>
            </div>
            <button className={styles.favoriteToggle} onClick={handleFavoriteClick}>
                {isFavorite ? 'Remove from favorites' : '❤️ Add to favorites'}
            </button>
        </div>
    )

}

export default WeatherCard