
export function getWeatherInfo(code) {

    const weatherCodes = {
        0: { description: 'Clear sky', icon: '☀️' },
        1: { description: 'Mainly clear', icon: '🌤️' },
        2: { description: 'Partly cloudy', icon: '⛅' },
        3: { description: 'Overcast', icon: '☁️' },
        45: { description: 'Fog', icon: '🌫️' },
        61: { description: 'Slight rain', icon: '🌧️' },
        63: { description: 'Moderate rain', icon: '🌧️' },
        65: { description: 'Heavy rain', icon: '🌧️' },

    };

    const weatherInfo = weatherCodes[code];

    if (weatherInfo === undefined ) {
        return {description: 'Temperature', icon: '🌡️'}
    }


    return weatherInfo
}