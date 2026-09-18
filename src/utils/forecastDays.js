export function getForecastDays(daily) {
    const days = daily.time.map((date, i) => {
        return {
            date: date,
            max: daily.temperature_2m_max[i],
            min: daily.temperature_2m_min[i]
        }
    })

    return days
}