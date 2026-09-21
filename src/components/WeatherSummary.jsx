import { useNavigate } from "react-router-dom";
import styles from './WeatherSummary.module.css';

function WeatherSummary({ cityName, icon, temperature }) {

    const navigate = useNavigate();

    function handleClick() {
        if (cityName === 'Your location') return;
        navigate(`/city/${cityName.toLowerCase()}`);
    }

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>{cityName}</h1>
            <button 
                className={styles.weatherSummary} 
                onClick={handleClick}
                style = {{ cursor: cityName === 'Your location' ? 'default' : 'pointer' }}
            >
                <div className={styles.weatherMain}>
                    <span className={styles.icon}>{icon}</span>
                    <h2 className={styles.temperature}>{temperature}°</h2>
                </div>
            </button>
        </div>
    )
}

export default WeatherSummary