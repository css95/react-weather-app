function ForecastList({ days }) {

    return (
        <div className="forecast-list">
            <ul>
                {days.map(day => {
                    return <li key={day.date}>{day.date} {day.max} {day.min}</li>})}
            </ul>

        </div>
    )

}

export default ForecastList