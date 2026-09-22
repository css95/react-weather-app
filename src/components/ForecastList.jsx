import styles from './ForecastList.module.css';
import { getWeatherInfo } from '../utils/weatherCodes';

function ForecastList({ days }) {

    return (
        <div className={styles.forecastSection}>
            <h3 className={styles.forecastHeading}>7-day forecast</h3>
            <ul className={styles.forecastList}>
                {days.map(day => {
                    const dayLabel = new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })
                    const dayWeatherInfo = getWeatherInfo(day.code)

                    return (
                        <li key={day.date} className={styles.forecastDay}>
                            <span className={styles.forecastDayLabel}>{dayLabel} </span>
                            <span className={styles.forecastIcon}>{dayWeatherInfo.icon}</span>
                            <span>{day.max}° / {day.min}°</span>
                        </li>
                    )
                })}
            </ul>

        </div>
    )

}

export default ForecastList