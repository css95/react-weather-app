import styles from './ForecastList.module.css';

function ForecastList({ days }) {

    return (
        <div>
            <ul className={styles.forecastList}>
                {days.map(day => {
                    const dayLabel = new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })
                    return (
                    <li key={day.date} className={styles.forecastDay}>{dayLabel} {day.max}°/{day.min}°</li>
                    )
                    
                })}
            </ul>

        </div>
    )

}

export default ForecastList